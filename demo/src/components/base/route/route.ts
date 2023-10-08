import { ExtractPropTypes } from "vue"

export const routeProps = {
  tabsName: {
    type: Array,
    default: []
  }
}
export const routeEmits = {
}
export type RouteProps = ExtractPropTypes<typeof routeProps>
export type RouteEmits = typeof routeEmits
