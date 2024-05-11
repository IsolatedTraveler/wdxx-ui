export function throttle(fun: (...args: any[]) => void, delay: number) {
  let timer: NodeJS.Timeout | null = null
  return function (this: any, ...args: any[]) {
    if (!timer) {
      timer = setTimeout(() => {
        fun.apply(this, args)
        timer = null
      }, delay)
    }
  }
}