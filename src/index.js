#! /usr/bin/env node

import { initProgram } from './commander/program.js'
import { applyDeploymentCommands } from './commander/deployment/index.js'

const program = initProgram()

applyDeploymentCommands(program)

program.parse()

program.opts()
