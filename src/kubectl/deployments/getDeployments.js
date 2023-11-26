import { chunk } from '../../helpers/chunck.js'
import { exec } from '../../helpers/exec.js'
import { getLabels } from '../../utils/getLabels.js'

export const getDeployments = (...args) => {
  const NUMBER_OF_COLUMNS = 6

  const result = exec(`get deployments --show-labels ${args.join(' ')}`)
  const raw = result.toString().split(/\s+/)

  const headers = raw.slice(0, NUMBER_OF_COLUMNS)
  const deployments = raw.slice(NUMBER_OF_COLUMNS, -1)

  const deploymentsChunked = chunk(deployments, NUMBER_OF_COLUMNS)

  return deploymentsChunked.map(([name, ready, upToDate, available, age, labels]) => ({
    name,
    ready,
    upToDate,
    available,
    age,
    labels: getLabels(labels),
  }))
}
