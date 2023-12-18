/* __placeholder__ */
export default (await import('vue')).defineComponent({
  name: 'element-table',
  data() {
    return {
      cols: [
        {
          title: '个人信息', child: [
            {
              title: '基本信息', child: [
                { title: '姓名', id: 'xm' },
                { title: '性别', id: 'xb' }
              ]
            },
            {
              title: '学历情况', child: [
                {
                  title: '小学', child: [
                    { title: '毕业院校' },
                    { title: '是否结业' }
                  ]
                },
                {
                  title: '初中', child: [
                    { title: '毕业院校' },
                    { title: '是否结业' }
                  ]
                },
                {
                  title: '高中', child: [
                    { title: '毕业院校' },
                    { title: '是否结业' }
                  ]
                },
                {
                  title: '大学', child: [
                    { title: '毕业院校' },
                    { title: '是否结业' }
                  ]
                },
                {
                  title: '硕士', child: [
                    { title: '毕业院校' },
                    { title: '是否结业' }
                  ]
                },
                {
                  title: '博士', child: [
                    { title: '毕业院校' },
                    { title: '是否结业' }
                  ]
                }
              ]
            },
            {
              title: '工作信息', child: [
                { title: '单位名称' },
                { title: '单位性质' },
                { title: '单位地址' }
              ]
            }
          ]
        }, {
          title: '家庭成员信息', child: [
            { title: '子' },
            { title: '女' }
          ]
        },
        { title: '测试' }
      ]
    };
  },
  created() {
    setTimeout(() => {
      this.cols[0].child[0].title += 1;
    }, 4000);
  }
});
