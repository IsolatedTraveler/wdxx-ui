import {ref, watch} from 'vue';
import {dealSqlData, getCodes, getTableCol} from '../fun';
import {useGswdStore} from '@/store';

export function useHisTyDzfp(table: string) {
  const formData = ref({
      bb: useGswdStore().getBb,
      fbbb: '',
      fbjg: '',
      zsdz: '',
      nsrsbm: '',
      fwq: '242'
    }),
    code = ref(''),
    fbbb = ref<any>([]);
  watch(
    () => formData.value.fwq,
    v => {
      getCodes('1=1', table, v).then(res => {
        fbbb.value = res;
      });
    },
    {immediate: true}
  );
  function getDzpjJkpz(bb: string) {
    const {fbbb, fbjg, zsdz, fwq} = formData.value,
      backTable = bb ? `${table}_${bb}` : table,
      tj = `dm = '${fbbb}'`;
    return Promise.all([getTableCol(table, fwq), getCodes(tj, table, fwq)]).then(([col, data]) => {
      data.forEach(it => {
        console.log(it);
        it.DZ = (zsdz || it.DZ).trim();
        it.JGID = (fbjg || it.JGID).trim();
      });
      const {i, b, d} = dealSqlData(data, col, table, tj, ['dm'], backTable);
      return [b, d, i].filter(it => it).join('\n');
    });
  }
  function getDzpjJkcs(bb: string) {
    const table = 'T_DZPJ_JKCS',
      {fbbb, fbjg, fwq} = formData.value,
      backTable = bb ? `${table}_${bb}` : table,
      tj = `jkdm = '${fbbb}'`;
    return Promise.all([getTableCol(table, fwq), getCodes(tj, table, fwq)]).then(([col, data]) => {
      data.forEach(it => {
        it.JGID = (fbjg || it.JGID).trim();
      });
      const {i, b, d} = dealSqlData(data, col, table, tj, ['jkdm'], backTable);
      return [b, d, i].filter(it => it).join('\n');
    });
  }
  function getBb(bb: string) {
    if (bb) {
      const arr = bb.split('.');
      if (arr[2]) {
        return arr[2].substring(2) + arr[3];
      }
    }
    return '';
  }
  function getCode(lx: number) {
    var {bb, fbbb} = formData.value;
    useGswdStore().setBb(bb);
    if (!fbbb) {
      code.value = '条件不能为空';
      return;
    }
    bb = getBb(bb);
    if (lx === 1) {
      getDzpjJkpz(bb).then(e => {
        code.value = e + '\ncommit;';
      });
    } else if (lx === 2) {
      getDzpjJkcs(bb).then(e => {
        code.value = e + '\ncommit;';
      });
    } else if (lx === 3) {
      Promise.all([getDzpjJkpz(bb), getDzpjJkcs(bb)]).then(e => {
        code.value = e.join('\n') + '\ncommit;';
      });
    }
  }
  return {code, formData, getCode, fbbb};
}
