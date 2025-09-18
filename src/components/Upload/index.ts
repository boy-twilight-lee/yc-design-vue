import { App } from 'vue';
import _Upload from './Upload.vue';

export type UploadInstance = InstanceType<typeof _Upload>;
export * from './type';

const Upload = Object.assign(_Upload, {
  install: (app: App) => {
    app.component('Yc' + _Upload.name, _Upload);
  },
});

declare module 'vue' {
  export interface GlobalComponents {
    YcUpload: typeof Upload;
  }
}

export default Upload;
