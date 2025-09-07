/// <reference types="vite/client" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: defineComponent<{}, {}, any>;
  export default component;
}

declare module 'b-tween';
