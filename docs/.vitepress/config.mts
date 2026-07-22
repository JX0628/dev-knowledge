import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Dev Knowledge',
  description: '个人开发知识文档网站',
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '笔记', link: '/notes/' },
      { text: '项目', link: '/projects/' },
      { text: '片段', link: '/snippets/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [{ text: '开始使用', link: '/guide/' }]
        }
      ],
      '/notes/': [
        {
          text: '技术笔记',
          items: [
            { text: '笔记首页', link: '/notes/' },
            { text: 'Git 常用工作流', link: '/notes/git-workflow' },
            { text: 'VitePress 文档写作', link: '/notes/vitepress-writing' }
          ]
        }
      ],
      '/projects/': [
        {
          text: '项目',
          items: [{ text: '项目复盘', link: '/projects/' }]
        }
      ],
      '/snippets/': [
        {
          text: '片段',
          items: [{ text: '片段库', link: '/snippets/' }]
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
