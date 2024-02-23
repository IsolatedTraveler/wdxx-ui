import Hljs from 'highlight.js';
function dealCode(el: HTMLElement) {
  let blocks = el.querySelectorAll('code');
  for (let i = 0; i < blocks.length; i++) {
    const item = blocks[i] as HTMLElement
    Hljs.highlightBlock(item);
  }
}
export default {
  install(app: any) {
    app.directive('code', {
      updated: dealCode,
      created: dealCode
    })
  }
}