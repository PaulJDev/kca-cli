import { exec } from '../../helpers/exec.js'

export const scaleDeployment = (deployment, replicasNumber) => {
  return exec(`scale deployment ${deployment} --replicas=${replicasNumber}`)
}
