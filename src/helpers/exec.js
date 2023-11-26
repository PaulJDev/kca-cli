import { execSync } from 'child_process'

export const exec = (command) => {
  try {
    return execSync(`kubectl ${command}`).toString()
  } catch (err) {
    throw err
  }
}
