import { App, render, h } from 'vue';
import { DrawerConfig, DrawerMethod } from './type';
import _Drawer from './Drawer.vue';
import _DrawerService from './DrawerService.vue';

export type DrawerInstance = InstanceType<typeof _Drawer>;
export * from './type';

// 容器实例
let container: HTMLDivElement;
// open
const open = (props: DrawerConfig) => {
  if (!container) {
    container = document.createElement('div');
    container.className = 'yc-overlay yc-overlay-drawer';
    document.body.append(container);
  }
  // 关闭函数
  const close = () => {
    render(null, container as HTMLDivElement);
  };
  // 挂在vnode
  const vnode = h(_DrawerService, {
    ...props,
    serviceClose: close,
  });
  // 渲染 VNode 到容器
  render(vnode, container);
  return {
    close,
  };
};

const Drawer = Object.assign(_Drawer, {
  install: (app: App) => {
    app.component('Yc' + _Drawer.name, _Drawer);
    app.config.globalProperties.$drawer = {
      open,
    };
  },
  open,
});

declare module 'vue' {
  export interface GlobalComponents {
    YcDrawer: typeof Drawer;
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $drawer: DrawerMethod;
  }
}

export default Drawer;
