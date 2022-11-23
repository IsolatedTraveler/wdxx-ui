import { parallel } from "gulp";
import path from "path";
import { minify as minifyPlugin } from "rollup-plugin-esbuild";

import {epRoot,target,epOutput,PKG_CAMELCASE_NAME,PKG_BRAND_NAME,formatBundleFilename, creatRollup, epPackage} from "@ui/build-utils";
import { withTaskName } from "../../utils";
const { version } = require(epPackage);

const banner = `/*! ${PKG_BRAND_NAME} v${version} */\n`;
function buildFullEntry(minify: boolean) {
  const out = [
    {
      format: "umd",
      file: path.resolve(
        epOutput,
        "dist",
        formatBundleFilename("index.full", minify, "js")
      ),
      exports: "named",
      name: PKG_CAMELCASE_NAME,
      globals: {
        vue: "Vue",
      },
      sourcemap: false,
      banner
    }, {
      format: "esm",
      file: path.resolve(
        epOutput,
        "dist",
        formatBundleFilename("index.full", minify, "mjs")
      ),
      sourcemap: false,
      banner
    }
  ]
  let plugins = []
  if (minify) {
    plugins = [
      minifyPlugin({
        target,
        sourceMap: false
      })
    ]
  }
  return creatRollup(path.resolve(epRoot, "index.ts"), plugins, out)
}

// async function buildFullLocale(minify: boolean) {
//   const files = await glob(`**/*.ts`, {
//     cwd: path.resolve(localeRoot, "lang"),
//     absolute: true,
//   });
//   return Promise.all(
//     files.map(async (file) => {
//       const filename = path.basename(file, ".ts");
//       const name = upperFirst(camelCase(filename));

//       const bundle = await rollup({
//         input: file,
//         plugins: [
//           esbuild({
//             minify,
//             sourceMap: minify,
//             target,
//           }),
//         ],
//       });
//       await writeBundles(bundle, [
//         {
//           format: "umd",
//           file: path.resolve(
//             epOutput,
//             "dist/locale",
//             formatBundleFilename(filename, minify, "js")
//           ),
//           exports: "default",
//           name: `${PKG_CAMELCASE_LOCAL_NAME}${name}`,
//           sourcemap: minify,
//           banner,
//         },
//         {
//           format: "esm",
//           file: path.resolve(
//             epOutput,
//             "dist/locale",
//             formatBundleFilename(filename, minify, "mjs")
//           ),
//           sourcemap: minify,
//           banner,
//         },
//       ]);
//     })
//   );
// }

export const buildFull = (minify: boolean) => async () => {
  return buildFullEntry(minify)
  // return Promise.all([buildFullEntry(minify), buildFullLocale(minify)]);
};
export const buildFullBundle = parallel(
  // 压缩
  withTaskName("buildFullMinified", buildFull(true)),
  // 不压缩
  withTaskName("buildFull", buildFull(false))
);
