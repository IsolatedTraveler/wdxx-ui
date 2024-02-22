export default [
  {
    id: 'fbqz', mc: '发版前置', child: [
      { id: 'yjxq', mc: '硬件需求', path: true },
      {
        id: 'sfyl', mc: '三方依赖', child: [
          { id: 'java', mc: 'java', path: true }
          , { id: 'tomcat', mc: 'tomcat', path: true }
          , { id: 'nginx', mc: 'nginx', path: true }
        ]
      }
    ]
  }, {
    id: 'fbxt', mc: '发布系统', child: [
      { id: 'jtphis', mc: 'jtphis', path: true }
      , { id: 'his', mc: 'his', path: true }
      , { id: 'ydgw', mc: '移动公卫', path: true }
    ]
  }
]