import ora from 'ora'
import inquirer from 'inquirer'

import { applyDeployment } from '../../kubectl/deployments/index.js'

export const apply = (program) => {
  program
    .command('apply')
    .option('-a, --ask', 'Ask when find deployment/s')
    .argument('<deployment_name>')
    .action(applyDeployment)
  // .action(async (deploymentName, { ask }) => {
  //   const spinner = ora('Looking for a deployment').start()

  //   const { name } = findDeployment(deploymentName) || { name: '' }
  //   if (!name) throw new Error('Not deployment found')

  //   spinner.color = 'yellow'
  //   spinner.text = `Deployment ${name} found!`

  //   const response =
  //     ask &&
  //     spinner.stop() &&
  //     (await inquirer.prompt([
  //       {
  //         type: 'input',
  //         name: 'action',
  //         message: `Deployment with name ${name} found. Do you want to continue? (y/n)`,
  //         validate: (input) => {
  //           const inputLower = input.toLowerCase()
  //           return inputLower === 'y' || inputLower === 'n'
  //         },
  //       },
  //     ]))

  //   if (response?.action === 'n') return

  //   scaleDeployment(name, 0)

  //   spinner.succeed(`Deployment with name ${name} scaled to 0 replicas`)
  // })
}
