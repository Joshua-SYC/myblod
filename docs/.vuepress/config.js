module.exports = {
 
    base: '/myblod/',    
    title: 'myblod',
    description: 'Vuepress blog demo',
    themeConfig: {
        // 你的GitHub仓库，请正确填写
      repo: 'https://github.com/Joshua-SYC/myblod',
      // 自定义仓库链接文字。
      repoLabel: 'My GitHub',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'FirstBlog', link: '/blog/FirstBlog.md' }
        ],
     sidebar: [
      ['/', '首页'],
      ['/blog/FirstBlog.md', '我的第一篇博客']
    ]
  },  
  plugins:['@vuepress-reco/vuepress-plugin-kan-ban-niang']  
  }