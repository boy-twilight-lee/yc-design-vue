好的，没问题。根据您提供的 `import` 方式，我为您生成一份 `yc-ui-pro` 的中文使用文档。

这份文档基于您给出的 **全局引入** 方式编写，并推断了其他标准实践（如按需引入），旨在提供一个完整且专业的说明。

---

# yc-ui-pro 使用文档

`yc-ui-pro` 是一个基于 Vue 3 和 TypeScript 构建的现代化企业级 UI 组件库。它旨在提供一套开箱即用、功能丰富且高度可定制的界面解决方案，帮助开发者快速构建高质量、一致性强的 Web 应用。

## ✨ 特性

*   **组件丰富**：提供覆盖各类常见业务场景的高质量组件。
*   **基于 Vue 3**：充分利用 Vue 3 的新特性，如 Composition API，性能更优。
*   **TypeScript 支持**：提供完整的类型定义，带来更好的开发体验和代码健壮性。
*   **开箱即用**：引入方式简单，学习成本低，可以快速上手。
*   **主题定制**：支持灵活的样式覆盖和主题定制，轻松匹配您的品牌视觉。

## 📦 安装

推荐使用 `npm` 或 `yarn` 进行安装。

```bash
# 使用 npm
npm install yc-ui-pro --save

# 使用 yarn
yarn add yc-ui-pro
```

## 🚀 快速上手

我们推荐使用全局引入的方式，这可以让您在项目中的任何地方直接使用 `yc-ui-pro` 的所有组件。

### 全局完整引入

在您的项目入口文件（通常是 `main.js` 或 `main.ts`）中，引入组件库和其配套的样式文件，并通过 `app.use()` 来注册。

```javascript
// main.js 或 main.ts

import { createApp } from 'vue'
import App from './App.vue'

// 1. 完整引入 yc-ui-pro 组件库
import YcUi from 'yc-ui-pro'

// 2. 引入组件库的全局样式
import 'yc-ui-pro/es/style.css'

const app = createApp(App)

// 3. 注册组件库插件
app.use(YcUi)

app.mount('#app')
```

完成以上配置后，您就可以在项目中的任意 `.vue` 文件里直接使用 `yc-ui-pro` 的组件了。

**示例：**
在您的 Vue 组件中使用 `yc-button` 和 `yc-input`。

```html
<template>
  <div>
    <yc-button type="primary">主要按钮</yc-button>
    <yc-button>默认按钮</yc-button>
  </div>
  <div style="margin-top: 20px;">
    <yc-input v-model="text" placeholder="请输入内容..."></yc-input>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const text = ref('')
</script>
```

### 按需引入 (推荐用于生产环境)

如果您对最终打包的体积有严格要求，可以采用按需引入的方式，只加载您使用到的组件，从而减小项目体积。

> **注意**：以下路径为标准推测，具体路径可能因库的打包结构而异。

假设您只需要使用 `YcButton` 和 `YcInput` 组件：

```javascript
// main.js 或 main.ts

import { createApp } from 'vue'
import App from './App.vue'

// 按需引入需要的组件
import { YcButton, YcInput } from 'yc-ui-pro'
// 分别引入组件对应的样式
import 'yc-ui-pro/es/components/button/style.css' // 假设的按钮样式路径
import 'yc-ui-pro/es/components/input/style.css'  // 假设的输入框样式路径

const app = createApp(App)

// 分别注册组件
app.component(YcButton.name, YcButton)
app.component(YcInput.name, YcInput)

app.mount('#app')
```
为了简化按需引入的过程，库的作者通常会提供一个 Babel 或 Vite 插件（如 `babel-plugin-import`），请查阅相关文档看是否支持。

## 🤝 贡献

欢迎任何形式的贡献！如果您在使用过程中发现任何问题，或者有功能建议，欢迎在项目的代码仓库中提交 Issue 或 Pull Request。

## 📄 许可证

本项目基于 [MIT](https://opensource.org/licenses/MIT) 许可证。