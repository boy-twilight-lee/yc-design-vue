import { reactive, render, h, nextTick } from "vue";
import _Notification from "./Notification.vue.js";
import _NotificationList from "./NotificationList.vue.js";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { isString } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
const container = /* @__PURE__ */ new Map();
const notificationList = reactive({
  topLeft: [],
  topRight: [],
  bottomLeft: [],
  bottomRight: []
});
let notificationId = 1;
const removeContainer = (position) => {
  if (notificationList[position].length)
    return;
  document.body.removeChild(container.get(position));
  container.delete(position);
};
const open = (props, type = "info") => {
  const position = isString(props) ? "topRight" : props.position ?? "topRight";
  const list = notificationList[position];
  if (!container.has(position)) {
    const notificationContainer = document.createElement("div");
    notificationContainer.className = "yc-overlay yc-overlay-notification";
    document.body.appendChild(notificationContainer);
    container.set(position, notificationContainer);
    render(
      h(_NotificationList, {
        notificationList: list,
        position
      }),
      notificationContainer
    );
  }
  const id = isString(props) || !props.id ? `__yc_notification_${notificationId++}` : props.id;
  const onDestory = () => {
    const index2 = list.findIndex((item) => item.id == id);
    if (index2 == -1) {
      return;
    }
    list.splice(index2, 1);
    removeContainer(position);
  };
  const notification = isString(props) ? { content: props, id, onDestory, type } : { ...props, id, onDestory, type };
  const index = list.findIndex((item) => item.id == id);
  if (index != -1) {
    list[index] = {
      ...list[index],
      ...notification,
      isReset: true
    };
    nextTick().then(() => {
      list[index].isReset = false;
    });
  } else {
    list.push(notification);
  }
  return {
    close: onDestory
  };
};
const NotificationMethod = {
  ...Object.fromEntries(
    ["success", "warning", "error", "info"].map((type) => {
      return [
        type,
        (props) => {
          return open(props, type);
        }
      ];
    })
  ),
  remove(id) {
    let posi = "topRight";
    let i = -1;
    for (let [position, list] of Object.entries(notificationList)) {
      const index = list.findIndex((item) => item.id == id);
      if (index != -1) {
        posi = position;
        i = index;
        break;
      }
    }
    if (i == -1) {
      return;
    }
    notificationList[posi].splice(i, 1);
  },
  clear(position) {
    notificationList[position].splice(0);
    removeContainer(position);
  }
};
const Notification = Object.assign(_Notification, {
  install: (app) => {
    app.config.globalProperties.$notification = Object.assign(
      _Notification,
      NotificationMethod
    );
  },
  ...NotificationMethod
});
export {
  Notification as default
};
