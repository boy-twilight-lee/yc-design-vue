import { App } from 'vue';
import _Avatar from './Avatar.vue';
import _AvatarGroup from './AvatarGroup.vue';

export type AvatarInstance = InstanceType<typeof _Avatar>;
export type AvatarGroupInstance = InstanceType<typeof _AvatarGroup>;
export * from './type';

const Avatar = Object.assign(_Avatar, {
  group: _AvatarGroup,
  install: (app: App) => {
    app.component('Yc' + _Avatar.name, _Avatar);
    app.component('Yc' + _AvatarGroup.name, _AvatarGroup);
  },
});

export { _AvatarGroup as AvatarGroup };

export default Avatar;
