import { getMarkDownCode, getMarkDownTitle } from "@/components/base";

export default [
  getMarkDownTitle('linux', 3),
  '防火墙打开特定端口',
  getMarkDownCode([
    "firewall-cmd --permanent --add-port=8080/tcp",
    "firewall-cmd --reload",
  ].join("\n"))
].join('\n')
