import { getMarkDownTitle } from "@/components/base";

export default [
  getMarkDownTitle('类型定义', 1),
  '该功能是一个智能的TypeScript类型创建助手，它接收类型的名称（遵循类型命名规范（大驼峰式命名法 —— 首字母大写））、该类型支持的值集合，并且可选地允许为每个值添加解释说明，之后它将自动构造出符合需求的TypeScript类型定义代码片段。同时，依据提供的信息，该工具还会生产相应的文档注释，以便于其他开发人员理解每个类型值的用途和背景。这样不仅提升了开发效率，也加强了代码base的类型安全性与文档质量。',
].join('\n')