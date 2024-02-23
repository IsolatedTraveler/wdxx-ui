import Hljs from 'highlight.js';
function dealCode(el: HTMLElement) {
  let blocks = el.querySelectorAll('code'), j = 1, ul = document.createElement('ul')
  for (let i = 0; i < blocks.length; i++) {
    const item = blocks[i] as HTMLElement
    Hljs.highlightBlock(item);
    let html = item.innerHTML, size = html.split('\n').length
    for (let z = 0; z < size; z++) {
      let li = document.createElement('li')
      li.innerText = (j++) + ''
      ul.appendChild(li)
    }
    ul.classList.add('hljs-code-number')
    el.insertBefore(ul, blocks[0])
  }
}
export default {
  install(app: any) {
    app.directive('code', {
      updated: dealCode,
      created: (el: HTMLElement) => {
        dealCode(el)
        let copy = document.createElement('div')
        copy.classList.add('hljs-copy')
        copy.innerText = '复制'
        copy.style.display = "none"
        copy.addEventListener('click', () => {
          //创建一个输入框
          let blocks = el.querySelectorAll('code'), code = ''
          for (let i = 0; i < blocks.length; i++) {
            code += blocks[i].innerText + '\n'
          }
          navigator.clipboard.writeText(code).then(() => {
            copy.innerText = '复制成功'
          })
        })
        el.appendChild(copy)
        el.addEventListener('mouseout', () => {
          copy.innerText = '复制'
          copy.style.display = "none"
        })
        el.addEventListener('mouseover', () => {
          copy.style.display = "block"
        })
      }
    })
  }
}