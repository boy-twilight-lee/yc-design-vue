/// <reference types="vite/client" />
declare module '*.vue' {
  const component: defineComponent<{}, {}, any>;
  export default component;
}

declare module 'b-tween';
