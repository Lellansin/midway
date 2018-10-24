'use strict';

module.exports = {
  base: '/midway/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Midway',
      description: '面向未来的 Web 全栈应用开发框架'
    },
  },
  themeConfig: {
    lang: 'zh-CN',
    title: 'Midway',
    description: '面向未来的 Web 全栈应用开发框架',
    repo: 'midwayjs/midway',
    docsDir: 'docs',
    editLinks: true,
    serviceWorker: {
      updatePopup: true
    },
    nav: [
      {text: '首页', link: '/'},
      {text: 'TS 新手指南', link: '/ts_start'},
      {text: '使用指南', link: '/guide'},
      {text: 'API', link: '/api-reference'},
      {
        text: 'MidwayJs 系列产品',
        items: [
          {
            text: '框架',
            items: [
              {text: 'Midway - 面向未来的 Web 全栈框架', link: '/'},
            ]
          },
          {
            text: '应用管理',
            items: [
              {text: 'Pandora.js - Node.js 应用管理器', link: 'http://midwayjs.org/pandora/'},
            ]
          },
          {
            text: '监控产品',
            items: [
              {text: 'Sandbox - 私有化 Node.js 监控产品', link: '#'},
            ]
          }
        ]
      }
    ]
  },
  lastUpdated: 'Last Updated',
};
