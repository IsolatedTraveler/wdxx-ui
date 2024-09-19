import { getMarkDownCode } from '@/components/base';
import { dealSqlData, getTableCol } from '@/views/gswd/utils';
import {ref} from 'vue';

export function use() {
  const formData = ref({mkbh: '', dm: '', fwq: '242'}),
    code = ref(''),
    talbe = 'sqldy',
    primary: string[] = ['MKBH', 'YWDM'];
  function getCode() {
    var { mkbh, dm,fwq } = formData.value
      dm = dm.replace(/if\("([0-9a-zA-Z_-]+)"\.equals\(ywdm\)\)/g, '//@/YWDM_MKBH//$1');
      const sqlStr = dm.split(/\/\/Map map = namedParameterJdbcTemplate\.queryForMap\(countsql, namedParameters\);/)[0].split('//@/YWDM_MKBH//');
      sqlStr.shift();
      const data = sqlStr.map(it => {
        const d = it
          .replace(/sql[= ]+sql[ +]+"[ ]*";/g, '')
          .trim()
          .replace(/}$/, '')
          .trim()
          .split('\n');
        return {
          MKBH: mkbh,
          YWDM: d[0].replace('{', ''),
          QSBB: 'v1.0',
          ZT: '1',
          SQL: d
            .map(it => {
              it = it.trim();
              if (/^sql =/.test(it)) {
                return it
                  .replace(/^sql = sql \+"/, '')
                  .replace(/[";]+$/, '')
                  .replace(/:([0-9a-zA-Z_-]+)/g, '#{$1}')
                  .replace(/([^'])[ ]+([^'])/g, '$1 $2')
                  .replace(/(23|hh24)#\{(59|mi)\}\#\{(59|ss)\}/g, '$1:$2:$3')
                  .trim();
              } else if (/^[ ]*if[ ]*\(/.test(it)) {
                return `<if ${it
                  .replace(/\{$/, '')
                  .replace(/'/g, '"')
                  .replace(/\(([0-9a-zA-Z_-]+)\)/g, '(#{$1})')
                  .replace(/([^'])[ ]+([^'])/, '$1 $2')}>`;
              } else if (it == '}') {
                return `</if>`;
              }
            })
            .filter(it => it && it.trim())
            .join('\n')
        }
      });
    getTableCol(talbe, fwq).then(cols => {
      cols = cols.filter(({ col }) => col != 'URL' && col != 'ROW_ID' && col != 'SFTB' && col != 'XTBH');
       data.forEach(it => {
         it.SQL = (it.SQL || '').trim();
       });
       const {i, b, d} = dealSqlData(data, cols, talbe, `mkbh='${mkbh}'`, primary);
       code.value = getMarkDownCode(['-- 修改sqldy', b, d, i, 'commit;'].filter(it => it).join('\n'), 'sql');
    })
  }
  return {formData, code, getCode};
}
