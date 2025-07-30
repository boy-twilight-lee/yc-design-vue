import { reactive, render, h, nextTick } from "vue";
import _Message from "./Message.vue.js";
import _MessageList from "./MessageList.vue.js";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { isString } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
const container = /* @__PURE__ */ new Map();
const messageList = reactive({
  top: [],
  bottom: []
});
let messageId = 1;
const removeContainer = (position) => {
  if (messageList[position].length)
    return;
  document.body.removeChild(container.get(position));
  container.delete(position);
};
const open = (props, type = "info") => {
  const position = isString(props) ? "top" : props.position ?? "top";
  const list = messageList[position];
  if (!container.has(position)) {
    const messageContainer = document.createElement("div");
    messageContainer.className = "yc-overlay yc-overlay-message";
    document.body.appendChild(messageContainer);
    container.set(position, messageContainer);
    render(
      h(_MessageList, {
        messageList: list,
        position
      }),
      messageContainer
    );
  }
  const id = isString(props) || !props.id ? `__yc_message_${messageId++}` : props.id;
  const onDestory = () => {
    const index2 = list.findIndex((item) => item.id == id);
    if (index2 == -1) {
      return;
    }
    list.splice(index2, 1);
    removeContainer(position);
  };
  const message = isString(props) ? { content: props, id, onDestory, type } : { ...props, id, onDestory, type };
  const index = list.findIndex((item) => item.id == id);
  if (index != -1) {
    list[index] = {
      ...list[index],
      ...message,
      isReset: true
    };
    nextTick().then(() => {
      list[index].isReset = false;
    });
  } else {
    list.push(message);
  }
  return {
    close: onDestory
  };
};
const messageMethod = {
  ...Object.fromEntries(
    ["success", "warning", "error", "info", "loading", "normal"].map((type) => {
      return [
        type,
        (props) => {
          return open(props, type);
        }
      ];
    })
  ),
  clear(position) {
    messageList[position].splice(0);
    removeContainer(position);
  }
};
const Message = Object.assign(_Message, {
  install: (app) => {
    app.config.globalProperties.$message = Object.assign(
      _Message,
      messageMethod
    );
  },
  ...messageMethod
});
export {
  Message as default
};
