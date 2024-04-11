import { epOutput } from '@ui/build-utils/var'
import { dest, parallel, series, src } from 'gulp'
import gulpSass from 'gulp-sass'
import dartSass from 'sass'
import autoprefixer from 'gulp-autoprefixer'
import consola from 'consola'
import rename from 'gulp-rename'
import concat from 'gulp-concat'
import cleanCSS from 'gulp-clean-css'
import path from 'path'

import judge from './index'
const distBundle = path.resolve(epOutput, 'styles'),distFolder = path.resolve(__dirname, 'dist'),noElPrefixFile = /(index|base|display)/
, thirdCss =[
  'node_modules/highlight.js/styles/atom-one-dark.min.css'
]
function buildStylesChalk() {
  const judgeV = judge(), sass = gulpSass(dartSass)
  if (judgeV) {
    return Promise.reject(new Error(judgeV))
  }
  return src([
    ...thirdCss
    ,path.resolve(__dirname, 'src/*.scss')
  ])
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(
      rename((path) => {
        if (!noElPrefixFile.test(path.basename)) {
          path.basename = `ui-${path.basename}`
        }
      })
    )
    .pipe(concat('index.css'))
    .pipe(dest(distFolder))
    .on('end', () => {
      src(path.join(distFolder, 'index.css'))
      .pipe(cleanCSS())
      .pipe(rename('index.min.css'))
      .pipe(dest(distFolder))
    })
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
    copyStylesBundle
  )
)
export default build