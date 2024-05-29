export const bbCols = [// 版本信息表
  { id: 'bbh', title: '版本号' }
  , { id: 'ms', title: '描述' }
  , { id: 'zt_mc', title: '状态' }  // 待归版    待发版    已发版
]
  , bbZt: any = {
    '-1': '移除',
    0: '待归版',
    1: '待发版',
    9: '已发版'
  }
  , bbFbCols = [
    { id: 'bbh', title: '版本号' }
    , { id: 'fbdq_mc', title: '发版地区' }
    , { id: 'zt_mc', title: '状态' }
  ]