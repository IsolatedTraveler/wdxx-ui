import { series } from 'gulp'
import {withTaskName, run} from '@ui/build-utils'
export default series(
  withTaskName('clean', () => run('npx rimraf dist'))
)