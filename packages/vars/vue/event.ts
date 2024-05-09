export const EventUpdate = 'update:modelValue'
export const EventUpdateIndex = 'update:index'
export const EventUpdateObj = 'update:obj'
export const EventUpdateMc = 'update:mc'
export const EventChange = 'change'
export const EventSearch = 'search'
export const EventClick = 'click'
export const EventSelect = 'selected'
export const EventCheck = 'checked'
export const EventExpand = 'expand'
export const EventLeave = 'leave'
export const EventSetVal = 'setVal'
export const EventHide = 'hide'
export const EventNext = 'next'
export const EventLast = 'last'

export interface EventSelectData {
  data: any
  selected: Boolean
  val: any
}