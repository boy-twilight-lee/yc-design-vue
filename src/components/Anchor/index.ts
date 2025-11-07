import { App } from 'vue';
import _Anchor from './Anchor.vue';
import _AnchorLink from './AnchorLink.vue';

export type AnchorInstance = InstanceType<typeof _Anchor>;
export type AnchorLinkInstance = InstanceType<typeof _AnchorLink>;
export * from './type';

const Anchor = Object.assign(_Anchor, {
  link: _AnchorLink,
  install: (app: App) => {
    app.component('Yc' + _Anchor.name, _Anchor);
    app.component('Yc' + _AnchorLink.name, _AnchorLink);
  },
});

export { _AnchorLink as AnchorLink };

declare module 'vue' {
  interface GlobalComponents {
    YcAnchor: typeof Anchor;
    YcAnchorLink: typeof _AnchorLink;
  }
}

export default Anchor;
