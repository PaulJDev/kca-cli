import ora from 'ora'
import inquirer from 'inquirer'

import {
  getDeployments,
  listDeployments,
  listDeploymentActions,
  orchestrateAction,
} from '../../kubectl/deployments/index.js'

export const list = (program) => {
  program
    .command('list')
    .option('-a,--asc', 'Oder by name ascending')
    .option('-d,--desc', 'Oder by name descending')
    .option('-av,--available', 'Only seach for available deployments')
    .option('-unav,--unavailable', 'Only seach for unavailable deployments')
    .argument('[namespace]')
    .action(async (namespace, options) => {
      const spinner = ora(`Listing ${namespace} deployments`).start()

      const deployments = getDeployments(`--namespace=${namespace}`)

      spinner.stop()

      if (!deployments?.length) {
        spinner.fail('No deployments found')
        return
      }

      const deployment = await listDeployments(namespace, deployments, options)
      const { name } = deployment
      const action = await listDeploymentActions(name)
      orchestrateAction(action, name)
    })
}
