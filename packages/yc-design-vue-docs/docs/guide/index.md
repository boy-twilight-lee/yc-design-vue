# 快速上手

## 👋 介绍

欢迎来到 YC Design Vue 的世界！

YC Design Vue 是一个基于 **Vue 3** 和 **TypeScript** 精心构建的现代化企业级 UI 组件库。它旨在提供一套开箱即用、功能丰富且高度可定制的界面解决方案，帮助开发者和团队从零开始，以前所未有的速度构建出高质量、设计一致的 Web 应用。

## 🤔 为什么选择 YC Design Vue？

- **💎 设计精良**：拥有一套经过精心设计的视觉语言，确保为您的用户提供美观、一致的体验。
- **🧩 组件丰富**：提供覆盖各类常见业务场景（如表单、数据展示、反馈、导航等）的高质量组件，减少重复造轮。
- **🚀 性能卓越**：充分利用 Vue 3 的 Composition API 和虚拟 DOM 优化，确保组件拥有出色的性能表现。
- **🔒 类型安全**：提供完整的 TypeScript 类型定义，享受 IDE 智能提示带来的极致开发体验，并显著提升代码的健壮性。
- **🎨 主题定制**：基于 CSS 变量的样式系统，让主题定制变得前所未有的简单，轻松匹配您的品牌视觉。
- **🌱 学习曲线平缓**：清晰的 API 设计和详尽的文档，让您可以快速上手并投入到业务开发中。

## 🛠️ 准备工作

在开始之前，请确保您的开发环境满足以下要求：

- ✓ **Node.js**: `v16.0.0` 或更高版本
- ✓ **Vue**: `v3.3.0` 或更高版本
- ✓ 已创建一个基于 `Vite` 或 `Vue CLI` 的 Vue 3 项目

## 📦 安装

我们推荐使用 `npm`、`yarn` 或 `pnpm` 进行安装。

```bash
# 使用 npm
npm install yc-design-vue --save

# 使用 yarn
yarn add yc-design-vue

# 使用 pnpm
pnpm add yc-design-vue
```

## 💡 引入与使用

您可以选择“完整引入”或“按需引入”两种方式来使用组件库。

### 方式一：完整引入 (Global Import)

如果您不特别关心打包体积，或者希望项目中的所有组件都可以直接使用，那么完整引入是最方便的方式。

在您的项目入口文件（通常是 `main.ts` 或 `main.js`）中：

```typescript
// main.ts
import { createApp } from 'vue';
import App from './App.vue';

// 1. 完整引入 yc-design-vue 组件库
import YcDesignVue from 'yc-design-vue';

// 2. 引入组件库的全局样式
import 'yc-design-vue/es/style.css';

const app = createApp(App);

// 3. 将 YC Design Vue 作为插件注册
app.use(YcDesignVue);

app.mount('#app');
```

### 方式二：按需引入 (On-Demand Import) - 🌟 推荐

**我们强烈推荐这种方式**。它只会打包您在项目中实际使用到的组件及其样式，从而可以极大地优化最终产物的体积。为了实现这一目标，我们需要借助 `unplugin-vue-components`、`unplugin-auto-import` 插件来自动完成。

**1. 安装相关插件**

首先，您需要安装实现按需引入所必需的开发依赖。

```bash
# 使用 npm
npm install unplugin-vue-components unplugin-auto-import -D

# 使用 yarn
yarn add unplugin-vue-components unplugin-auto-import -D

# 使用 pnpm
pnpm add unplugin-vue-components unplugin-auto-import -D
```

**2. 配置插件**

接下来，在您的 `vite.config.ts` 文件中，引入并配置插件。

````typescript
// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import { YcDesignVueResolver } from 'yc-design-vue/resolver';

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [YcDesignVueResolver()],
    }),
    Components({
      resolvers: [
        YcDesignVueResolver(),
      ],
    }),
  ],
});
```

````

完成以上配置后，您就可以直接在项目的任何 `.vue` 文件的模板中直接使用 `yc-` 前缀的组件了，无需手动 `import` 组件和样式，打包工具会为您处理好一切，实现真正的按需加载！

## 浏览器支持

我们致力于支持所有现代浏览器。

| 浏览器         | 版本  |
| :------------- | :---- |
| 🟢 **Chrome**  | >= 64 |
| 🟢 **Firefox** | >= 78 |
| 🟢 **Safari**  | >= 12 |
| 🟢 **Edge**    | >= 79 |

**关于 Internet Explorer (IE)**:
由于 Vue 3 本身使用了 `Proxy` 等现代 JavaScript 特性，**因此 YC Design Vue 无法支持 IE 浏览器**。我们的目标是为现代浏览器提供最佳体验。

## ❓ 常见问题

**❓ Q: 组件渲染了，但是没有样式，怎么办？**

**✅ A:** 如果您是完整引入，请确保在 `main.ts` 中正确引入了全局样式文件 `import 'yc-design-vue/es/style.css';`。如果您是按需引入，请检查 `vite.config.ts` 中 `YcDesignVueResolver` 的配置是否正确，并确保插件版本是兼容的。

**❓ Q: 使用组件时 TypeScript 提示找不到类型？**

**✅ A:** 如果您使用了按需引入，请确保 `vite.config.ts` 中的 `dts` 选项已正确配置，并检查生成的 `components.d.ts` 文件是否已包含在项目的 `tsconfig.json` 的 `include` 范围内。重启 VSCode 或您的 IDE 有时也可以解决类型缓存问题。

**❓ Q: 是否支持服务端渲染 (SSR)？**

**✅ A:** 是的，YC Design Vue 在设计上考虑了通用性，完全兼容 Nuxt.js 等服务端渲染 (SSR) 环境。 _(您可以根据组件库的实际情况选择以下声明)_ / 目前我们的团队正在积极进行全面的 SSR 适配和测试，将在未来的版本中提供完整的支持，敬请期待。

## ❤️ 社区与支持

我们是一个开放和友好的社区。如果您在使用过程中遇到任何问题，或有任何建议，欢迎通过以下方式与我们交流：

- 🐞 **报告 Bug**: 在 **[GitHub Issues](https://github.com/boy-twilight-lee/yc-design-vue/issues)** 查找类似的问题或提交新的 Issue。
- 💡 **功能建议**: 同样可以通过 **[GitHub Issues](https://github.com/boy-twilight-lee/yc-design-vue/issues/new)** 提出您的宝贵想法。
- 💬 **参与讨论**: 在 **[Discussions](https://github.com/boy-twilight-lee/yc-design-vue/discussions)** 分享您的想法和经验。
