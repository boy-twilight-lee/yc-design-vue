import { App } from 'vue';
import _Upload from './Upload.vue';

export type UploadInstance = InstanceType<typeof _Upload>;
export * from './type';

const Upload = Object.assign(_Upload, {
  install: (app: App) => {
    app.component('Yc' + _Upload.name, _Upload);
  },
});

export default Upload;
