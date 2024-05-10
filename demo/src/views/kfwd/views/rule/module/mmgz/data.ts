import { getMarkDownCode, getMarkDownList, getMarkDownTitle, MarkdownList } from "@/components/base";
const mmgf: MarkdownList[] = [
  {
    mc: '**camelCase** （小驼峰式命名法 —— 首字母小写）', child: [
      { mc: '**定义：** 首个单词首字母小写，后续单词首字母大写，无分隔符。**用于函数名和变量名**。' },
      { mc: '**示例:**\n' + getMarkDownCode('userName\ncalculateTotalPrice', 'plaintext') }
    ]
  }, {
    mc: '**PascalCase** （大驼峰式命名法 —— 首字母大写）', child: [
      { mc: '**定义：** 每个单词首字母均大写，无分隔符。**用于类型定义。**' },
      { mc: '**示例:**\n' + getMarkDownCode('UserName\nCalculateTotalPrice', 'plaintext') }
    ]
  }, {
    mc: '**kebab-case** （短横线连接式--全小写）', child: [
      { mc: '**定义：** 单词间以短横线（-）分隔。**用于CSS类名、HTML属性**。' },
      { mc: '**示例:**\n' + getMarkDownCode('user-name\ncalculate-totalPrice', 'plaintext') }
    ]
  }, {
    mc: '**snake_case** （下划线连接式--全小写）', child: [
      { mc: '**定义：** 单词间以下划线（_）分隔。**适用于变量名、数据库字段名、配置项**。' },
      { mc: '**示例:**\n' + getMarkDownCode('user_name\ncalculate_totalPrice', 'plaintext') }
    ]
  }, {
    mc: '**SNAKE_CASE** （下划线连接式--全大写）', child: [
      { mc: '**定义：** 单词间以下划线（_）分隔。**主要用于常量命名** ，强调这些值在整个程序运行期间不应改变。' },
      { mc: '**示例:**\n' + getMarkDownCode('USER_NAME\nCALCULATE_TOTALPRICE', 'plaintext') }
    ]
  }
]
export default [
  getMarkDownTitle('命名规范', 1),
  '在软件开发、编程及工程实践领域，遵循统一且一致的命名规则是提升代码可读性和便于后期维护的关键。本章节将深入介绍常用的命名规范及其在不同场景和编程语言中的具体应用，确保编码标准化与高效性。',
  getMarkDownList(mmgf)
].join('\n')