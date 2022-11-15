import {installComponent} from '@ui/utils'
import Button from './src/button.vue'
import ButtonGroup from './src/button-group.vue'
export default {
  install(app) {
    app.component(Button.name, Button)
    app.component(ButtonGroup.name, ButtonGroup)
  }
} as installComponent
