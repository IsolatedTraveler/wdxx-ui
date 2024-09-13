import {defineStore} from 'pinia';
import {temp} from './gnzj/temp';
import {format} from '@/api/util';
export const useGswdStore = defineStore('gswd', {
  state: () => ({
    bb: (temp('gswd-bb') || format(new Date(), 'v1.0.yyyyMMdd.01')) as string
  }),
  getters: {
    getBb: state => {
      return state.bb;
    }
  },
  actions: {
    setBb(v: string) {
      if (v) {
        temp('gswd-bb', v);
        this.bb = v;
      }
    }
  }
});
