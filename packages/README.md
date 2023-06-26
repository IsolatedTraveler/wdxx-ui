```mermaid
graph LR
A("模块说明")-->AA("components")-->AAA("描述")-->AAAA("组件模块，实现组件功能逻辑，关联js和html")

A-->AB("props")-->ABA("描述")-->ABAA("定义所有组件具备的属性")

A-->AC("styles")-->ACA("描述")-->ACAA("实现所有组件样式功能")
AC-->ACB("src")-->ACBA("vars")-->ACBAA("样式通用参数，此处样式变更将改变全局样式")
ACB-->ACBB("base")-->ACBBA("全局样式，清除默认样式")
ACB-->ACBC("mod")-->ACBCA("组件样式")
ACB-->ACBD("end")-->ACBDA("通用样式，写在结尾，避免被覆盖")

A-->AD("utils")-->ADA("描述")-->ADAA("实现通用逻辑处理功能")

A-->AE("vars")-->AEA("描述")-->AEAA("定义通用参数变量")
AE-->AEB("模块")-->AEBA("props")-->AEBAA("定义属性可取值范围，该值仅用于props模块")
AEB-->AEBC("utils")-->AEBCA("通用逻辑处理功能变量属性，该值仅用于utils模块")
AEB-->AEBD("vue")-->AEBDA("全局变量通用属性，该值仅用于components模块、hooks模块")
```
