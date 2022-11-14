import { esUrl, libUrl } from "./var";

export default {
  target: 'modules',
  // css代码拆分
  cssCodeSplit: true,
  // 最小化混淆
  minify: false,
  lib: {
    entry: './index.ts',
    name: 'JT'
  },
  rollupOptions: {
    external: ['vue', /\.less/, '@wdxx-ui/utils'],
    input: 'index.ts',
    output: [{
      entryFileNames: '[name].mjs',
      preserveModules: true,
      dir: esUrl
    }, {
      format: 'cjs' as any,
      entryFileNames: '[name].js',
      preserveModules: true,
      dir: libUrl
    }]
  }
}