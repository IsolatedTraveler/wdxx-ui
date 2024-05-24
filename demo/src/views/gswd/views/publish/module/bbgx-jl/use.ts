import { ref } from "vue"

export default function () {
  // 版本信息数据
  const data = ref([])
    // 发版明细数据
    , mxData = ref([]), cols = [// 版本信息表
      { id: 'bbh', title: '版本号' }
      , { id: 'ms', title: '描述' }
      , { id: 'zt_mc', title: '状态' }  // 待归版    待发版    已发版
    ], mxCols = [// 发版明细表
      { id: 'fbdq_mc', title: '发版地区' },
      { id: 'zt_mc', title: '状态' }
    ]
  return { data, cols, mxCols, mxData }
}