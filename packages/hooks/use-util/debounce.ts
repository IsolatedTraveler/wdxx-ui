export function debounce(fun: (...args: any[]) => void, delay: number) {
  let timer: any = null
  return function (this: any, ...args: any[]) {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fun.apply(this, args)
    }, delay)
  }
}