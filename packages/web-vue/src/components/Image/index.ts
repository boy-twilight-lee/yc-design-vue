import { App } from 'vue';
import _Image from './Image.vue';
import _ImagePreview from './ImagePreview.vue';
import _ImagePreviewGroup from './ImagePreviewGroup.vue';
import _ImagePreviewAction from './ImagePreviewAction.vue';

export type ImageInstance = InstanceType<typeof _Image>;
export type ImagePreviewInstance = InstanceType<typeof _ImagePreview>;
export type ImagePreviewGroupInstance = InstanceType<typeof _ImagePreviewGroup>;
export type ImagePreviewActionInstance = InstanceType<
  typeof _ImagePreviewAction
>;
export * from './type';

const Image = Object.assign(_Image, {
  preview: _ImagePreview,
  ['preview-group']: _ImagePreviewGroup,
  action: _ImagePreviewAction,
  install: (app: App) => {
    app.component('Yc' + _Image.name, _Image);
    app.component('Yc' + _ImagePreview.name, _ImagePreview);
    app.component('Yc' + _ImagePreviewGroup.name, _ImagePreviewGroup);
    app.component('Yc' + _ImagePreviewAction.name, _ImagePreviewAction);
  },
});

export {
  _ImagePreview as ImagePreview,
  _ImagePreviewGroup as ImagePreviewGroup,
  _ImagePreviewAction as ImagePreviewAction,
};

export default Image;
