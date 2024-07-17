import { getMarkDownCode, getMarkDownTitle } from "@/components/base";
import { vim } from "../../../code/linux/vim";

export default [
  getMarkDownTitle('java安装', 3),
  getMarkDownCode([
    '# 拷贝jdk-8u333-linux-x64.tar.gz到/usr/local/src',
    'cd /usr/local/src/',
    "tar -zxvf jdk-8u333-linux-x64.tar.gz",
    "mv jdk1.8.0_333/* /usr/lib/jvm/",
    vim(
      [
        "export JAVA_HOME=/usr/lib/jvm",
        "export JRE_HOME=$JAVA_HOME/jre",
        "export PATH=$PATH:$JAVA_HOME/bin",
        "export CLASSPATH=.:$JAVA_HOME/lib:$JRE_HOME/lib",
      ].join("\n"),
      "/etc/profile",
      true
    ),
    "source /etc/profile", "# 测试", "java -version", "javac -version"
  ].join('\n'), 'bash')
].join('\n')