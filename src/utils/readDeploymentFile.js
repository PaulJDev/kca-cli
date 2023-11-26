import { parseAllDocuments, stringify } from 'yaml'

import { resolve } from 'node:path'
import { readFileSync } from 'node:fs'

const KIND = 'kind: "Deployment"'

export const readDeployment = (path) => {
  console.log(resolve(path))
  const file = readFileSync(resolve(path), 'utf8')
  return parseAllDocuments(file)
    .map(stringify)
    .find((document) => document.includes(KIND))
}
