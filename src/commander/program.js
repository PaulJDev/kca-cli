import { program } from 'commander'
import chalk from 'chalk'

//import packageJson from '../../package.json' assert { type: 'json' }

import { getRandomNumber } from '../helpers/randomNumber.js'

//const { version, name, description } = packageJson

export function initProgram() {
  const colors = [chalk.bold.red, chalk.bold.green, chalk.bold.blue, chalk.bold.cyan, chalk.bold.magenta]

  const randomIndex = getRandomNumber(colors.length)
  const color = colors[randomIndex]
  const PROGRAM_NAME = color(`
 __                                  .__  .__ 
|  | __ ____ _____              ____ |  | |__|
|  |/ // ___\\\\__  \\    ______ _/ ___\\|  | |  |
|    <\\  \\___ / __ \\_ /_____/ \\  \\___|  |_|  |
|__|_ \\\\___  >____  /          \\___  >____/__|
     \\/    \\/     \\/               \\/         
`)

  program
    .name(`${PROGRAM_NAME}\n\n`)
    //.version(`${name} - Version: ${version}`)
    //.description(description)
    .showHelpAfterError()

  return program
}
