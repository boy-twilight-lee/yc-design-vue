import _Avatar from "./Avatar.vue.js";
import AvatarGroup from "./AvatarGroup.vue.js";
const Avatar = Object.assign(_Avatar, {
  group: AvatarGroup,
  install: (app) => {
    app.component("Yc" + _Avatar.name, _Avatar);
    app.component("Yc" + AvatarGroup.name, AvatarGroup);
  }
});
export {
  AvatarGroup,
  Avatar as default
};
