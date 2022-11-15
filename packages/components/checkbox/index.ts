import {installComponent} from '@ui/utils'
import checkBox from './src/checkbox.vue'
export default {
  install(app) {
    app.component(checkBox.name, checkBox)
  }
} as installComponent
