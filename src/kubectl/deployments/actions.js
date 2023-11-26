import { scaleDeployment } from './scaleDeployment.js'
import { restartDeployment } from './restartDeployment.js'

export default ['Apply', 'Down', 'Up', 'Restart']

export const orchestrateAction = (action, ...args) => {
  const actions = {
    apply: () => console.log('apply'),
    down: (...args) => scaleDeployment(...args, 0),
    up: (...args) => scaleDeployment(...args, 1),
    restart: (...args) => restartDeployment(...args),
  }

  const actionSelected = actions[action.toLowerCase()]
  if (!actionSelected) throw new Error('Action selected is not valid!')

  return actionSelected(...args)
}
