import { readDeployment } from '../../utils/readDeploymentFile.js'
import { getDeploymentName } from '../../utils/getDeploymentName.js'
import { getDeployments } from './getDeployments.js'
import { scaleDeployment } from './scaleDeployment.js'
import { exec } from '../../helpers/exec.js'

export const applyDeployment = (path) => {
  const file = readDeployment(path)
  const name = getDeploymentName(file)
  const deployments = getDeployments('--namespace=alicante')

  const { available } = deployments.find((deployment) => deployment.name === name) || { available: '0' }

  const deploymentHasToDown = available === '1'
  //console.log({ name, available, deploymentHasToDown })

  if (deploymentHasToDown) scaleDeployment(name, 0)

  exec(`apply -f "${path}"`)
}
