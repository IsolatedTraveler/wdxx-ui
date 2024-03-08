export default [
  {
    id: 'nm', mc: '内蒙五区', child: [
      { id: 'nm-hlyy', mc: '合理用药', path: true }
    ]
  }, {
    id: 'ty', mc: '通用', child: [
      { id: 'jtphis', mc: 'jtphis', path: true }
    ]
  }
] as Menu[]
export interface Menu {
  id: string
  mc: string
  path?: boolean
  child?: Menu[]
}