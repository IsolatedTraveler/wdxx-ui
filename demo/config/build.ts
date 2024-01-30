import { BuildOptions } from "vite"

const IS_PROD = process.env.NODE_ENV === 'production'
export const build: BuildOptions = {
  sourcemap: !IS_PROD
}