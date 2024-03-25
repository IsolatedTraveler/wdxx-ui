import { ref, watch } from "vue"
import { getCodes, dealSqlData, TableCol, getTableCol } from "../fun"
import { ObjAny } from "@ui/vars"
var gnCol: Array<TableCol>, mlCol: Array<TableCol>, pzCol: Array<TableCol>, jgMlCol: Array<TableCol>

function getCol(col: Array<TableCol>, table: string) {
  if (col) {
    return Promise.resolve(col)
  } else {
    return getTableCol(table)
  }
}
export function hisTyThird() {
  const code = ref(''), formData = ref({ gnid: '', jkid: '', jgid: '70' }), gnml = ref<Array<ObjAny>>([])
    , jkMl = ref<Array<ObjAny>>([])
  // 获取功能选项
  getCodes('1=1', 't_jk_gn').then(res => {
    gnml.value = res
  })
  // 获取功能对应接口选项
  watch(() => formData.value.gnid, (v) => {
    if (v) {
      getCodes(`gnid='${v}'`, 't_jk_ml').then(res => {
        if (res.length === 1) {
          formData.value.jkid = res[0].JKID
        }
        jkMl.value = res
      })
    } else {
      jkMl.value = []
    }
  })
  function getPublish() {
    const obj = formData.value, gnid = obj.gnid, jkid = obj.jkid, jgid = obj.jgid
    Promise.all([getCol(gnCol, 't_jk_gn'), getCol(mlCol, 't_jk_ml'), getCol(pzCol, 't_jk_pz'), getCol(jgMlCol, 't_jk_ml_jg')]).then(([gn, ml, pz, jgml]) => {
      gnCol = gn
      mlCol = ml
      pzCol = pz
      jgMlCol = jgml
      const gnSql = dealSqlData(gnml.value.filter(it => it.GNID == gnid), gn, 't_jk_gn', `gnid='${gnid}'`, ['gnid'])
        , mlSql = dealSqlData(jkMl.value.filter(it => it.JKID == jkid), ml, 't_jk_ml', `jkid='${jkid}' and gnid='${gnid}'`, ['gnid', 'jkid'])
        , tj = `gnid='${gnid}' and jkid='${jkid}' and jgid= '70'`
      Promise.all([getCodes(tj, 't_jk_pz'), getCodes(tj, 't_jk_ml_jg')]).then(([pzArr, jgmlArr]) => {
        const tj = `gnid='${gnid}' and jkid='${jkid}' and jgid= '${jgid}'`, primary = ['gnid', 'jkid', 'jgid']
          , pzObj = dealSqlData(pzArr.map((it) => { it.JGID = jgid; return it }), pz, 't_jk_pz', tj, primary)
          , jgmlObj = dealSqlData(jgmlArr.map((it) => { it.JGID = jgid; return it }), jgml, 't_jk_ml_jg', tj, primary)
        code.value = [
          [gnSql.d, gnSql.i].join('\n'),
          [mlSql.d, mlSql.i].join('\n'),
          [pzObj.d, pzObj.i].join('\n'),
          [jgmlObj.d, jgmlObj.i].join('\n')
        ].join('\n')
      })
    })
  }


  return { code, gnml, formData, jkMl, getPublish }
}