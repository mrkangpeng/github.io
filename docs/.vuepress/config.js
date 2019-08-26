module.exports = {
  title: '鹏 の 博客',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }] // 设置移动端兼容
  ],
  description: '越努力，越幸运',
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {
        text: '主页', // 您想展示的文本信息
        link: '/' // '/'默认为docs文件夹下的README.md文件
      },
      {
        text: '技术分享',
        items: [
          {text:'vue',link:'/technology/vue/'},
          {text:'react',link:'/technology/react/'},
          {text:'性能优化',link:'/technology/performance/'}
        ]
      },
      {
        text: '工作分享',
        items: [
          {text:'踩坑',link:'/work/bug/'},
        ]
      },
      {
        text: '生活分享',
        items: [
          {text:'美食',link:'/life/food/'},
          {text:'风景',link:'/life/scenery/'},
          {text:'趣事',link:'/life/fun/'}
        ]
      }      
    ],
    // 侧边栏配置
    sidebar: {
      '/technology/performance/':[
        ['','介绍'],
        ['防抖和节流.md','防抖和节流']
      ]
    },
    sidebarDepth: 2, // 侧边栏显示2级
  },
  theme: 'reco' ,
  // 远程关联
  repo: 'https://github.com/mrkangpeng/mrkangpeng.github.io.git',
}