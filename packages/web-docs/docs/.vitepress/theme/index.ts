import { h } from 'vue';
import Theme from 'vitepress/theme';
import vitepressNprogress from 'vitepress-plugin-nprogress';
import 'vitepress-plugin-nprogress/lib/css/index.css';
import 'yc-design-vue/es/style.css';
import '@arco-design/web-vue/dist/arco.css';
import '../style/index.less';
import { HeroImage, FieldTable } from '../components';
import useCodeExpand from '../hooks/useCodeExpand';
import useTheme from '../hooks/useTheme';

// 是否是服务端渲染
export const isServerRendering = (() => {
  try {
    return !(typeof window !== 'undefined' && document !== undefined);
  } catch (e) {
    return true;
  }
})();

export default {
  extends: Theme,
  enhanceApp: async (ctx) => {
    vitepressNprogress(ctx);
    const { app } = ctx;
    if (isServerRendering) return;
    const YcDesign = await import('yc-design-vue');
    const ArcoIcon = await import('@arco-design/web-vue/es/icon');
    app.use(YcDesign.default);
    app.use(ArcoIcon.default);
    app.component('FieldTable', FieldTable);
  },
  Layout() {
    return h(Theme.Layout, null, {
      'home-hero-image': () => h(HeroImage),
    });
  },
  setup() {
    if (isServerRendering) return;
    useCodeExpand();
    useTheme();
  },
};
