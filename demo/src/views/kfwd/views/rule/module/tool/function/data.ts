import { getMarkDownTitle } from "@/components/base";

export default [
  getMarkDownTitle('函数定义', 1),
  '该功能是一个智能的TypeScript函数创建助手，它接收函数的名称（遵循函数命名规范：小驼峰式命名法 —— 首字母小写）、函数参数，并且可选地允许为每个参数添加解释说明，之后它将自动构造出符合需求的TypeScript函数定义代码片段。同时，依据提供的信息，该工具还会生产相应的文档注释，以便于其他开发人员理解该函数的用途和背景。这样不仅提升了开发效率，也加强了代码文档质量。'
].join('\n')