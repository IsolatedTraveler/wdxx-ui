import {ref} from 'vue';
import {dealSqlData, getCodes, getTableCol} from '@view/gswd/utils';
import {useGswdStore} from '@/store';

export function use(talbe: string = 'p_tyzdml', primary: string[] = ['fldm', 'dm']) {
  const formData = ref<{
      dm: string;
      fwq: string;
      fldm: string;
      bb: string;
    }>({
      fwq: 'cs242',
      fldm: '',
      bb: useGswdStore().getBb,
      dm: ''
    }),
    code = ref('');
  function query() {
    var {bb, fwq, fldm, dm} = formData.value,
      arr = bb.split('.'),
      bb = '',
      tj = `fldm = '${fldm}'`,
      backTable = '';
    useGswdStore().setBb(bb);
    if (dm) {
      tj += ` and dm in ('${(dm + '').split(',').join("','")}')`;
    }
    if (tj) {
      if (arr[2]) {
        bb = arr[2].substring(2) + arr[3];
        backTable = talbe + '_' + bb;
      }
      Promise.all([getTableCol(talbe, fwq), getCodes(tj, talbe, fwq)]).then(([col, data]) => {
        const {i, b, d} = dealSqlData(data, col, talbe, tj, primary, backTable);
        code.value = ['-- 修改字典', b, d, i, 'commit;'].filter(it => it).join('\n');
      });
    } else {
      code.value = '条件不能为空';
    }
  }
  return {code, formData, query};
}
