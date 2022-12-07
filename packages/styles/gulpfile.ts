import { epOutput } from '@ui/build-utils'
import { dest, parallel, series, src } from 'gulp'
import gulpSass from 'gulp-sass'
import dartSass from 'sass'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import consola from 'consola'
import chalk from 'chalk'
import rename from 'gulp-rename'
import path from 'path'

import judge from './index'
const distBundle = path.resolve(epOutput, 'styles')
const distFolder = path.resolve(__dirname, 'dist')
function buildStylesChalk() {
  const judgeV = judge()
  if (judgeV) {
    consola.error(judgeV)
    return Promise.reject(new Error(judgeV))
  } 
  const sass = gulpSass(dartSass)
  const noElPrefixFile = /(index|base|display)/
  return src(path.resolve(__dirname, 'src/*.scss'))
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(
      cleanCSS({}, (details) => {
        consola.success(
          `${chalk.cyan(details.name)}: ${chalk.yellow(
            details.stats.originalSize / 1000
          )} KB -> ${chalk.green(details.stats.minifiedSize / 1000)} KB`
        )
      })
    )
    .pipe(
      rename((path) => {
        if (!noElPrefixFile.test(path.basename)) {
          path.basename = `ui-${path.basename}`
        }
      })
    )
    .pipe(dest(distFolder))
}
export function copyStylesSource() {
  return src(path.resolve(__dirname, 'src/**')).pipe(
    dest(path.resolve(distBundle, 'src'))
  )
}
export function copyStylesBundle() {
  return src(`${distFolder}/**`).pipe(dest(distBundle))
}
export const build = parallel(
  copyStylesSource,
  series(
    buildStylesChalk,
    // buildDarkCssVars,
    copyStylesBundle
  )
)
export default build