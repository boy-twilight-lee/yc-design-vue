import { defineConfig } from 'vitepress'
import { resolve } from 'path'

export default defineConfig({
  title: 'YC Design Vue',
  description: '基于 Vue 3 和 TypeScript 构建的现代化企业级 UI 组件库',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#165DFF' }],
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'YC Design Vue',
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' },
      { text: 'GitHub', link: 'https://github.com/boy-twilight-lee/yc-design-vue' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '基础',
          items: [
            { text: '快速上手', link: '/guide/' },
            { text: '安装', link: '/guide/installation' },
            { text: '按需引入', link: '/guide/import' },
            { text: '主题定制', link: '/guide/theme' },
          ],
        },
      ],
      '/components/': [
        {
          text: '通用',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Icon 图标', link: '/components/icon' },
            { text: 'Typography 排版', link: '/components/typography' },
          ],
        },
        {
          text: '布局',
          items: [
            { text: 'Grid 栅格', link: '/components/grid' },
            { text: 'Layout 布局', link: '/components/layout' },
            { text: 'Space 间距', link: '/components/space' },
            { text: 'Divider 分割线', link: '/components/divider' },
          ],
        },
        {
          text: '导航',
          items: [
            { text: 'Menu 导航菜单', link: '/components/menu' },
            { text: 'Tabs 标签页', link: '/components/tabs' },
            { text: 'Breadcrumb 面包屑', link: '/components/breadcrumb' },
            { text: 'Pagination 分页', link: '/components/pagination' },
            { text: 'Steps 步骤条', link: '/components/steps' },
            { text: 'Anchor 锚点', link: '/components/anchor' },
          ],
        },
        {
          text: '数据录入',
          items: [
            { text: 'Input 输入框', link: '/components/input' },
            { text: 'InputNumber 数字输入框', link: '/components/input-number' },
            { text: 'InputTag 输入标签', link: '/components/input-tag' },
            { text: 'Textarea 文本域', link: '/components/textarea' },
            { text: 'Select 选择器', link: '/components/select' },
            { text: 'Checkbox 复选框', link: '/components/checkbox' },
            { text: 'Radio 单选框', link: '/components/radio' },
            { text: 'Switch 开关', link: '/components/switch' },
            { text: 'Slider 滑块', link: '/components/slider' },
            { text: 'Rate 评分', link: '/components/rate' },
            { text: 'Cascader 级联选择器', link: '/components/cascader' },
            { text: 'TimePicker 时间选择器', link: '/components/time-picker' },
            { text: 'ColorPicker 颜色选择器', link: '/components/color-picker' },
            { text: 'Transfer 穿梭框', link: '/components/transfer' },
            { text: 'AutoComplete 自动完成', link: '/components/auto-complete' },
            { text: 'Mention 提及', link: '/components/mention' },
            { text: 'VerificationCode 验证码', link: '/components/verification-code' },
          ],
        },
        {
          text: '数据展示',
          items: [
            { text: 'List 列表', link: '/components/list' },
            { text: 'Card 卡片', link: '/components/card' },
            { text: 'Descriptions 描述列表', link: '/components/descriptions' },
            { text: 'Empty 空状态', link: '/components/empty' },
            { text: 'Progress 进度条', link: '/components/progress' },
            { text: 'Skeleton 骨架屏', link: '/components/skeleton' },
            { text: 'Statistic 统计数值', link: '/components/statistic' },
            { text: 'Tag 标签', link: '/components/tag' },
            { text: 'Timeline 时间轴', link: '/components/timeline' },
            { text: 'Badge 徽标', link: '/components/badge' },
            { text: 'Avatar 头像', link: '/components/avatar' },
            { text: 'Image 图片', link: '/components/image' },
            { text: 'Calendar 日历', link: '/components/calendar' },
            { text: 'Carousel 走马灯', link: '/components/carousel' },
            { text: 'Collapse 折叠面板', link: '/components/collapse' },
            { text: 'Comment 评论', link: '/components/comment' },
          ],
        },
        {
          text: '反馈',
          items: [
            { text: 'Modal 对话框', link: '/components/modal' },
            { text: 'Drawer 抽屉', link: '/components/drawer' },
            { text: 'Message 全局提示', link: '/components/message' },
            { text: 'Notification 通知提醒', link: '/components/notification' },
            { text: 'Popconfirm 气泡确认框', link: '/components/popconfirm' },
            { text: 'Popover 气泡卡片', link: '/components/popover' },
            { text: 'Tooltip 文字提示', link: '/components/tooltip' },
            { text: 'Alert 警告', link: '/components/alert' },
            { text: 'Result 结果', link: '/components/result' },
            { text: 'Spin 加载中', link: '/components/spin' },
          ],
        },
        {
          text: '其他',
          items: [
            { text: 'Affix 固钉', link: '/components/affix' },
            { text: 'BackTop 回到顶部', link: '/components/back-top' },
            { text: 'ConfigProvider 全局配置', link: '/components/config-provider' },
            { text: 'Dropdown 下拉菜单', link: '/components/dropdown' },
            { text: 'Link 链接', link: '/components/link' },
            { text: 'OverflowList 溢出列表', link: '/components/overflow-list' },
            { text: 'PageHeader 页头', link: '/components/page-header' },
            { text: 'ResizeBox 调整尺寸', link: '/components/resize-box' },
            { text: 'Scrollbar 滚动条', link: '/components/scrollbar' },
            { text: 'Split 分割面板', link: '/components/split' },
            { text: 'Trigger 触发器', link: '/components/trigger' },
            { text: 'Watermark 水印', link: '/components/watermark' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/boy-twilight-lee/yc-design-vue' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present YC Design Vue',
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              },
            },
          },
        },
      },
    },
  },
  vite: {
    resolve: {
      alias: {
        '@': resolve(__dirname, '../../src'),
      },
    },
  },
})
