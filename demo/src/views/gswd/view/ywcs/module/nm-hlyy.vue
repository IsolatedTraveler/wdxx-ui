<template>
  <z-flex flex="col" class="ywcs-nm-hlyy">
    合理用药
    <z-btn @click.once="init">初始化</z-btn>
    <z-btn @click="tip">提示</z-btn>
    <z-btn @click="instruction">说明书</z-btn>
    <z-btn @click="rxReview">医嘱分析</z-btn>
  </z-flex>
</template>
<script lang="ts" setup>
const obj = window.YytPass, his_company_code = 'YQ-EEDS-001', his_medical_org_code = '150602007'
  , his_drug_code = 'XA10BHW104A001010101444'
function init() {
  obj.init({
    username: 'T12345', // 医生的工号，必填项
    his_company_code, // HIS 厂商编码，必填项
    his_medical_org_code, // 医疗机构编码，必填项
    createPageBall: true, // 是否创建桌面菜单小球，默认为创建。非必填项
    position: { // 小球在页面中出现的位置，非必填项，仅当 createPageBall 为 true 时生效
      top: '20px',
      right: '20px'
    }
  });
}
function instruction() {
  obj.showInstruction({
    his_company_code,
    his_medical_org_code,
    his_drug_code
  }).then(error)
}
function tip() {
  obj.showTips({
    his_company_code,
    his_medical_org_code,
    his_drug_code
  }).then(error)
}
function error(resp: any) {
  if (resp.code !== 200) {
    // layer.msg(resp.msg)
    alert(resp.msg)
  }
}
// 获取诊断信息
function getzdxx() {
  return []
}
// 获取订单药品信息
function getOrderDrug() {
  return [
    {
      dose: 1,
      dose_unit: "mg",
      dose_unit_code: "AO78",
      drug_quantity: 1,
      drug_quantity_unit: "mg",
      drug_quantity_unit_code: "AO78",
      drug_trade_name: "氨茶碱注射液",
      freq_code: "Q1H",
      group_number: 1,
      his_drug_code: "YP2000033061",
      medical_advice_type: "N",
      medication_days: 1,
      skin_test: "0"
    }
  ]
}
// 获取订单信息
function getOrder() {
  return [
    {
      prescription_order_num: "CF20221027214958",
      is_current: "1",
      prescription_type: "1",
      prescription_time: "2022-10-27 21:49:58",
      drug_info_list: getOrderDrug
    }
  ]
}
function rxReview() {
  obj.rxReview({
    his_company_code,
    his_medical_org_code,
    outpati_inpati_flag: 'op',
    his_time: Date.now(),
    is_formal_review: false,
    treat_type: 100,
    treat_code: '门诊号，医院内此次就诊唯一标识号，必填',
    bed_number: '床位号',
    doctor_info: {},
    patient_info: {},
    diagnosis: getzdxx(),
    prescription_order_list: getOrder()
  }).then(error)
}
defineOptions({
  name: 'ywcs-nm-hlyy'
})
</script>
<style lang="scss">
// .java {}</style>
