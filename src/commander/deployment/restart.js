import ora from 'ora'
import inquirer from 'inquirer'

import { restartDeployment } from '../../kubectl/deployments/index.js'
import { findDeployment } from '../../utils/findDeployment.js'

export const restart = (program) => {
  program
    .command('restart')
    .option('-a, --ask', 'Ask when find deployment/s')
    .argument('<deployment_name>')
    .action(async (deploymentName, { ask }) => {
      const spinner = ora('Looking for a deployment').start()

      const { name } = findDeployment(deploymentName) || { name: '' }
      if (!name) throw new Error('Not deployment found')

      spinner.color = 'yellow'
      spinner.text = `Deployment ${name} found!`

      const response =
        ask &&
        spinner.stop() &&
        (await inquirer.prompt([
          {
            type: 'input',
            name: 'action',
            message: `Deployment with name ${name} found. Do you want to continue? (y/n)`,
            validate: (input) => {
              const inputLower = input.toLowerCase()
              return inputLower === 'y' || inputLower === 'n'
            },
          },
        ]))

      if (response?.action === 'n') return

      restartDeployment(name)

      spinner.succeed(`Deployment with name ${name} restarted`)
    })
}
