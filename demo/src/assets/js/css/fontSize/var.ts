interface FontSizeConfig {
  yqWidth?: number
  zsWidth?: number
  llqWidth?: number
  fontBaseSize?: number
  size?: any
  judge?: boolean
}
export const event = 'orientationchange' in window ? 'orientationchange' : 'resize',
  config: FontSizeConfig = {
    yqWidth: 0,
    zsWidth: 0,
    llqWidth: 0,
    fontBaseSize: 0,
    size: 0,
    judge: true
  }