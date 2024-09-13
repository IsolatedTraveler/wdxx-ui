import {ref} from 'vue';
import {dealSqlData, getCodes, getTableCol} from '@view/gswd/utils';
import {useGswdStore} from '@/store';

export function use(talbe: string = 'P_XTCS', primary: string[] = ['MKDM', 'XH']) {
  const formData = ref<{
      XH: string;
      max?: number | string;
      fwq: string;
      MKDM: string;
      bb: string;
      ZYLX: string;
      CSM: string;
      CSSM: string;
      CSJB: string;
      ZYFW: string;
      QSZ: string;
    }>({
      fwq: 'cs242',
      MKDM: '',
      bb: useGswdStore().getBb,
      XH: '',
      ZYLX: '',
      CSM: '',
      CSSM: '',
      CSJB: '',
      ZYFW: '',
      QSZ: '',
      max: undefined
    }),
    code = ref(''),
    ZYLX = ref({zyfw: '', qsz: ''});
  function selectedZylx({data}: any) {
    ZYLX.value = data;
  }
  function getCode() {
    getTableCol(talbe, formData.value.fwq).then(col => {
      const {MKDM, XH, max} = formData.value;
      let tj = `MKDM = '${MKDM}'`;
      if (XH) {
        tj += ` and XH in ('${(XH + '').split(',').join("','")}')`;
      }
      const {b, d, i} = dealSqlData([{...formData.value, XGR: 'ADMIN', CJR: 'ADMIN', ID: `${MKDM}${XH}`, XH: max}], col, talbe, tj, primary);
      code.value = [b, d, i, 'commit;'].filter(it => it).join('\n');
    });
  }
  function query() {
    var {bb, MKDM, XH, fwq} = formData.value,
      arr = bb.split('.'),
      bb = '',
      tj = `MKDM = '${MKDM}'`,
      backTable = '';
    useGswdStore().setBb(bb);
    if (XH) {
      tj += ` and XH in ('${(XH + '').split(',').join("','")}')`;
    }
    if (tj) {
      if (arr[2]) {
        bb = arr[2].substring(2) + arr[3];
        backTable = talbe + '_' + bb;
      }
      Promise.all([getTableCol(talbe, fwq), getCodes(tj, talbe, fwq)]).then(([col, data]) => {
        if (!XH) {
          if (data && data.length) {
            formData.value.max = Math.max(...data.map(it => it.XH)) + 1;
          } else formData.value.max = '0';
        } else formData.value.max = undefined;
        const {i, b, d} = dealSqlData(data, col, talbe, tj, primary, backTable);
        code.value = [b, d, i, 'commit;'].filter(it => it).join('\n');
      });
    } else {
      code.value = '条件不能为空';
    }
  }
  return {code, formData, getCode, query, selectedZylx, ZYLX};
}
