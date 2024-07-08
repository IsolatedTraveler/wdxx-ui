import { CwglZddbLx } from "../../type";

export function fl_son(data: any, drlx: CwglZddbLx) {
  if (drlx === 'zfb' || drlx === 'wx') {
    const str = data.sale_info + data.spms
    if (/成都地铁运营|成都天府通/.test(str)) {
      data.fl = '行车交通'
      return '地铁'
    } else if (/高德打车/.test(str)) {
      data.fl = '行车交通'
      return '打车'
    } else if (/红旗连锁|柒一拾壹/.test(str)) {
      data.fl = '购物消费'
      return '超市购物'
    } else if (/孟儒诊所|成都中医药大学附属医院|芙蓉大药房|杏林大药房|省妇幼保健院|成都高新悬壶中医医院/.test(str)) {
      data.fl = '医疗教育'
      return '药品费'
    } else if (/包佬汇|状元水饺|罗记现卤|过桥米线|开心包点|金牌牛腩把子肉|西楼兰新疆抓饭|^小罗$|小米餐厅|砂锅食堂首航店|藕然间|徐记乐山烧烤|大众点评点餐|叁元老火锅成都武侯立交店|大米先生|廖记重庆老麻抄手|重庆小面王|酒城小笼包|原窝肠旺|宜宾燃面|沙县小吃|猪脚饭|沐小芸乌鸡米|商户_王艳青|牛卜力金牌牛腩把子肉/.test(str)) {
      data.fl = '食品酒水'
      const now = new Date(data.jysj);
      const hour = now.getHours(); // 获取当前小时数（0-23）
      if (hour < 10) {
        return "早餐";
      } else if (hour < 14) {
        return "中餐";
      } else if (hour < 24) {
        return "晚餐";
      }
    } else if (/巭酥糕点|蛋烘糕|黎健副食日杂/.test(str)) {
      data.fl = '食品酒水'
      return '零食'
    } else if (/吉顺生鲜|新鲜蔬菜|小周蔬菜|英姐肉摊|周姐蔬菜|农贸市场店|朴朴超市/.test(str)) {
      data.fl = '食品酒水'
      return '买菜'
    } else if (/中式糕点/.test(str)) {
      data.fl = '食品酒水'
      return '零食'
    } else if (/麻子枇杷|天天鲜果/.test(str)) {
      data.fl = '食品酒水'
      return '水果'
    } else if (/公仆快剪/.test(str)) {
      data.fl = '购物消费'
      return '美妆护肤'
    } else if (/中国人民人寿保险/.test(str)) {
      data.fl = '金融保险'
      return '人身保险'
    } else if (/中国移动/.test(str)) {
      data.fl = '交流通讯'
      return '手机话费'
    } else if (/福建乐摩物联科技有限公司/.test(str)) {
      data.fl = '休闲娱乐'
      data.bz = '按摩'
      return '其他娱乐'
    } else if (/网上国网/.test(str)) {
      data.fl = '居家生活'
      return '电费'
    } else if (/天童文化|成都市武侯区桦林贝尔幼儿园/.test(str)) {
      data.fl = '宝宝费用'
      return '宝宝教育'
    } else if (/停车缴费|停车费/.test(str)) {
      data.fl = '行车交通'
      return '停车'
    } else if (data.jylx == '收入') {
      data.fl = '职业收入'
      return '利息收入'
    } else if (data.jylx == '转账') {
      data.fl = ''
      return ''
    }
    console.log(data.sale_info, '||||||', data.spms)
    data.fl = '导入数据'
    return '待处理'
  }
}