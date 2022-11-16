import {installComponent} from '@ui/utils'
import checkBox from './src/checkbox.vue'
export const JtCheckBox = {
  install(app) {
    app.component(checkBox.name, checkBox)
  }
} as installComponent
export default JtCheckBox
