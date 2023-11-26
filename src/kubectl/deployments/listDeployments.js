import inquirer from 'inquirer'
import chalk from 'chalk'

export const listDeployments = async (namespace, deployments, options) => {
  const SEPARATOR = ' | '
  const GREEN_COLOR = '\x1B[1m\x1B[32m'
  const RED_COLOR = '\x1B[1m\x1B[31m'

  const getColor = {
    1: (text) => chalk.bold.green(text),
    0: (text) => chalk.bold.red(text),
  }

  const { desc, available, unavailable } = options

  const deploymentsToList =
    available || unavailable
      ? deployments.filter((deployment) => (available ? deployment.available === '1' : deployment.available === '0'))
      : deployments

  const choices = deploymentsToList.map(({ name, labels, available }) => getColor[available](labels.join(SEPARATOR)))

  try {
    const { deploymentSelected } = await inquirer.prompt([
      {
        type: 'list',
        name: 'deploymentSelected',
        message: `Deployments from ${namespace}`,
        choices: desc ? choices.reverse() : choices,
      },
    ])

    const [deploymentId] = deploymentSelected.replace(GREEN_COLOR, '').replace(RED_COLOR, '').split(SEPARATOR)

    return deployments.find(({ name }) => name === deploymentId)
  } catch (err) {
    throw err
  }
}
