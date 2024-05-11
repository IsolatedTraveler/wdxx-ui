import { getMarkDownList, getMarkDownTitle, MarkdownList } from "@/components/base";
const mmgf: MarkdownList[] = [
  {
    mc: '**As short as possible（如无必要，勿增注释）** ：注释应该精炼且有针对性，避免解释显而易见的代码。好的代码应当是自解释的，注释应补充那些从代码本身难以表达的信息。对于简单明了的逻辑或自我解释的代码行，过度注释反而可能导致噪音，降低代码的整洁度。'
  }, {
    mc: '**As long as necessary（如有必要，尽量详尽）** ：当涉及到复杂的算法、设计决策、边缘情况处理或代码行为的非直观之处，注释应当详细且全面。提供足够的上下文信息，解释为什么做出这样的设计选择，以及可能存在的权衡考虑。对于公共API或库的文档化，详尽的注释更是必不可少，以确保使用者能够准确理解和正确地调用。'
  }
]
export default [
  getMarkDownTitle('注释原则', 2),
  getMarkDownList(mmgf)
].join('\n')