import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Dev Knowledge',
  description: '个人常用信息速查库',
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '速查', link: '/cheatsheets/' },
      { text: '片段', link: '/snippets/' },
      { text: '问题', link: '/fixes/' },
      { text: '模板', link: '/templates/' },
      { text: '资料', link: '/references/' }
    ],
    sidebar: {
      '/cheatsheets/': [
        {
          text: '常用速查',
          items: [
            { text: '速查首页', link: '/cheatsheets/' },
            { text: 'Git 常用命令', link: '/cheatsheets/git' },
            { text: 'npm 常用命令', link: '/cheatsheets/npm' }
          ]
        }
      ],
      '/snippets/': [
        {
          text: '代码片段',
          items: [
            { text: '片段首页', link: '/snippets/' },
            { text: 'Shell 片段', link: '/snippets/shell' },
            { text: 'JavaScript 片段', link: '/snippets/javascript' },
            { text: 'CSS 片段', link: '/snippets/css' }
          ]
        }
      ],
      '/fixes/': [
        {
          text: '问题解决',
          items: [
            { text: '问题首页', link: '/fixes/' },
            { text: 'Node 版本问题', link: '/fixes/node-version' }
          ]
        }
      ],
      '/templates/': [
        {
          text: '配置模板',
          items: [
            { text: '模板首页', link: '/templates/' },
            { text: 'README 模板', link: '/templates/readme' }
          ]
        }
      ],
      '/references/': [
        {
          text: '参考资料',
          items: [
            { text: '资料首页', link: '/references/' },
            { text: 'VitePress 常用语法', link: '/references/vitepress-syntax' }
          ]
        }
      ]
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/' }],
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  },
  head: [
    ['meta', { name: 'theme-color', content: '#2563eb' }],
    ['link', { rel: 'icon', href: '/logo.svg' }]
  ]
})
