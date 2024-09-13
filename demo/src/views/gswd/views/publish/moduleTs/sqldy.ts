import {ref} from 'vue';
import {dealSqlData, getCodes, getTableCol} from '../fun';
import {useGswdStore} from '@/store';

export function useSqldy(talbe: string = 'sqldy', primary: string[] = ['MKBH', 'YWDM']) {
  const formData = ref({
      bb: useGswdStore().getBb,
      where: `mkbh = '010411' and ywdm in ('8', '14')`,
      fwq: '242'
    }),
    code = ref('');
  function getCode() {
    var obj = formData.value,
      arr = obj.bb.split('.'),
      bb = '',
      tj = obj.where,
      backTable = '';
    useGswdStore().setBb(bb);
    if (tj) {
      if (arr[2]) {
        bb = arr[2].substring(2) + arr[3];
        backTable = talbe + '_' + bb;
      }
      Promise.all([getTableCol(talbe, obj.fwq), getCodes(tj, talbe, obj.fwq)]).then(([col, data]) => {
        col = col.filter(({col}) => col != 'URL' && col != 'ROW_ID' && col != 'SFTB' && col != 'XTBH');
        data.forEach(it => {
          it.SQL = (it.SQL || '').trim();
        });
        const {i, b, d} = dealSqlData(data, col, talbe, tj, primary, backTable);
        code.value = ['-- 修改sqldy', b, d, i, 'commit;'].filter(it => it).join('\n');
      });
    } else {
      code.value = '条件不能为空';
    }
  }
  return {code, formData, getCode};
}
