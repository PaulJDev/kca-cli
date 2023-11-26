import { scaleDeployment } from './scaleDeployment.js'

export const restartDeployment = (deployment) => {
  scaleDeployment(deployment, 0)
  scaleDeployment(deployment, 1)
}
