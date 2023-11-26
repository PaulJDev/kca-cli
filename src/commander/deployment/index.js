import { down } from './down.js'
import { up } from './up.js'
import { restart } from './restart.js'
import { apply } from './apply.js'
import { list } from './list.js'

export const applyDeploymentCommands = (program) => {
  down(program)
  up(program)
  restart(program)
  apply(program)
  list(program)
}
