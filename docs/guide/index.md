# 快速上手

## 介绍

YC Design Vue 是一个基于 Vue 3 和 TypeScript 构建的现代化企业级 UI 组件库。它旨在提供一套开箱即用、功能丰富且高度可定制的界面解决方案，帮助开发者快速构建高质量、一致性强的 Web 应用。

## 特性

- **组件丰富**：提供覆盖各类常见业务场景的高质量组件
- **基于 Vue 3**：充分利用 Vue 3 的新特性，如 Composition API，性能更优
- **TypeScript 支持**：提供完整的类型定义，带来更好的开发体验和代码健壮性
- **开箱即用**：引入方式简单，学习成本低，可以快速上手
- **主题定制**：支持灵活的样式覆盖和主题定制，轻松匹配您的品牌视觉

## 环境要求

- Node.js >= 16.0.0
- Vue >= 3.3.0
- TypeScript >= 4.9.0 (推荐)

## 安装

推荐使用 `npm` 或 `yarn` 进行安装。

```bash
# 使用 npm
npm install yc-design-vue --save

# 使用 yarn
yarn add yc-design-vue
```

## 使用方式

### 完整引入

我们推荐使用全局引入的方式，这可以让您在项目中的任何地方直接使用 `yc-design-vue` 的所有组件。

在您的项目入口文件（通常是 `main.js` 或 `main.ts`）中，引入组件库和其配套的样式文件，并通过 `app.use()` 来注册。

```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

// 1. 完整引入 yc-design-vue 组件库
import YcUi from 'yc-design-vue'

// 2. 引入组件库的全局样式
import 'yc-design-vue/es/style.css'

const app = createApp(App)

// 3. 注册组件库插件
app.use(YcUi)

app.mount('#app')
```

### 按需引入

如果您希望减小打包体积，可以使用按需引入的方式。

```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

// 按需引入组件
import { Button, Input } from 'yc-design-vue'
import 'yc-design-vue/es/button/style/css'
import 'yc-design-vue/es/input/style/css'

const app = createApp(App)

// 注册组件
app.component('yc-button', Button)
app.component('yc-input', Input)

app.mount('#app')
```

## 基础使用

完成以上配置后，您就可以在项目中的任意 `.vue` 文件里直接使用 `yc-design-vue` 的组件了。

**示例：**
在您的 Vue 组件中使用 `yc-button` 和 `yc-input`。

```vue
<template>
  <div>
    <yc-button type="primary">主要按钮</yc-button>
    <yc-button>默认按钮</yc-button>
  </div>
  <div style="margin-top: 20px;">
    <yc-input v-model="text" placeholder="请输入内容..."></yc-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const text = ref('')
</script>
```

## 组件前缀

所有 YC Design Vue 的组件都使用 `yc-` 前缀，例如：

- `yc-button` - 按钮组件
- `yc-input` - 输入框组件
- `yc-modal` - 对话框组件
- `yc-table` - 表格组件

## 样式定制

YC Design Vue 支持通过 CSS 变量进行主题定制。

```css
:root {
  --yc-primary-color: #165DFF;
  --yc-success-color: #00B42A;
  --yc-warning-color: #FF7D00;
  --yc-error-color: #F53F3F;
}
```

## 下一步

- 查看 [组件列表](/components/) 了解所有可用组件
- 阅读 [安装指南](/guide/installation) 了解详细的安装步骤
- 学习 [按需引入](/guide/import) 优化打包体积
- 探索 [主题定制](/guide/theme) 个性化您的应用

## 常见问题

### Q: 组件不显示怎么办？
A: 请检查是否正确引入了样式文件，确保 `import 'yc-design-vue/es/style.css'` 已添加。

### Q: TypeScript 类型错误怎么办？
A: 请确保您的 TypeScript 版本 >= 4.9.0，并且正确配置了类型声明。

### Q: 如何自定义组件样式？
A: 您可以通过 CSS 变量、CSS 覆盖或使用 ConfigProvider 组件进行样式定制。

## 技术支持

如果您在使用过程中遇到任何问题，可以通过以下方式获取帮助：

- 查看 [GitHub Issues](https://github.com/boy-twilight-lee/yc-design-vue/issues)
- 提交新的 [Issue](https://github.com/boy-twilight-lee/yc-design-vue/issues/new)
- 参与 [Discussions](https://github.com/boy-twilight-lee/yc-design-vue/discussions)
