import { series } from "gulp";
import {withTaskName, run} from './utils'
export default series(
  withTaskName('clean', () => run('pnpm run clean'))
)