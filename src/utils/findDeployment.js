import { getDeployments } from '../kubectl/deployments/getDeployments.js'
import { find } from '../helpers/find.js'

export const findDeployment = (deploymentName) => {
  const deployments = getDeployments()
  return deployments.find(({ name, labels }) => find(deploymentName, name, labels))
}
