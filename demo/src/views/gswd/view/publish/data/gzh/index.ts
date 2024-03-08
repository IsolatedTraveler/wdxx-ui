import { ref, computed } from "vue";
import { PublishCode, FormData } from "./type";
import { formItem } from "./formItem";
import { getNginxC, getPayParamSql, getPayPortSql, getSql, getSqSql } from "./fun";
import { formdataDef } from "./def";
import { fblxOption, zffsOption } from "./selectOption";
export default function useGzh() {
  const lx = ref<number>(1), formData = ref<FormData>(formdataDef), wwdz1 = computed(() => {
    var data = formData.value, url = data.wwdz || ''
    if (lx.value == 1) {
      url = `http://${data.fbd}.frp.cdjtwx.com:81/`
    }
    return url
  }), code = computed(() => {
    const data = formData.value, fbd = data.fbd || '', jgid = data.jgid || ''
      , zffs = data.zffs || '', yxq = data.yxq || 1
    return [
      ...getNginxC(fbd, wwdz1.value), {
        lx: 'sql',
        code: [
          getPayPortSql(jgid, zffs, yxq),
          getPayParamSql(jgid, zffs, 'ALLPAY_URL', `https://wx.cdjtwx.com/${fbd}wx/`),
          // getPayParamSql(jgid, '1', 'NOTIFY_URL', `https://wx.cdjtwx.com/${fbd}wx/`),
          getPayParamSql(jgid, zffs, 'APPID', data.APPID || ''),
          getPayParamSql(jgid, zffs, 'SECRETKEY', data.Appsecret || ''),
          getSql(jgid, zffs, data),
          getSqSql(yxq, jgid),
          'commit;'
        ].join('\n')
      }, {
        lx: 'bash',
        code: [
          `公众号URL：https://wx.cdjtwx.com/${fbd}wx/jggzh/index.html?oid=#{jgid}`,
          `公众号支付页面URL：https://wx.cdjtwx.com/${fbd}wx/app/mobile/pay.html?jgid=#{jgid}&id=#{id}&zffs=#{zffs}`,
          `公众号支付接口URL：https://wx.cdjtwx.com/${fbd}api/rest/h5payall?jgid=#{14}&no=#{zfno}`,
        ].join('\n')
      }, lx.value == 1 ? {
        lx: 'bash',
        code: [
          `sed -i 's/172.16.10.3/127.0.0.1/g' /home/frp/frpc.ini`,
          `sed -i 's/smq/${fbd}/g' /home/frp/frpc.ini`
        ].join('\n')
      } : ''
    ].filter(it => it) as Array<PublishCode>
  }), formItems = computed(() => formItem[formData.value.zffs])
  return {
    lx,
    code,
    formData,
    formItems,
    fblxOption,
    zffsOption
  }
}