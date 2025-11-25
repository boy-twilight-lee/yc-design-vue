import { App, h, render } from 'vue';
import { Type } from '@shared/type';
import { ModalConfig, ModalMethod } from './type';
import _Modal from './Modal.vue';
import _ModalService from './ModalService.vue';

export type ModalInstance = InstanceType<typeof _Modal>;
export * from './type';

// 容器实例
let container: HTMLDivElement;
// 打开modal
const open = (props: ModalConfig) => {
  // 挂在容器
  if (!container) {
    container = document.createElement('div');
    container.className = 'yc-overlay yc-overlay-modal';
    document.body.append(container);
  }
  // 关闭函数
  const close = () => {
    render(null, container as HTMLDivElement);
  };
  // 挂在vnode
  const vnode = h(_ModalService, {
    ...props,
    onClose: () => {
      close();
      props.onClose?.();
    },
  });
  // 渲染 VNode 到容器
  render(vnode, container);
  return {
    close,
  };
};
// modal方法
const modalMethod = {
  open,
  ...Object.fromEntries(
    ['info', 'warning', 'error', 'success', 'confirm'].map((type) => {
      return [
        type,
        (props: ModalConfig) => {
          return open({
            ...props,
            type: type as Type,
            simple: true,
            hideCancel: type != 'confirm',
            width: 400,
          });
        },
      ];
    })
  ),
} as ModalMethod;

const Modal = Object.assign(_Modal, {
  install: (app: App) => {
    app.component('Yc' + _Modal.name, _Modal);
    app.config.globalProperties.$modal = modalMethod;
  },
  ...modalMethod,
});

export default Modal;
