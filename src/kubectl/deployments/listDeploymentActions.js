import inquirer from 'inquirer'

import choices from './actions.js'

export const listDeploymentActions = async (deployment) => {
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: `What action do you want to do with ${deployment}`,
      choices,
    },
  ])

  return action
}
