import { ref, onMounted } from 'vue';
import { useMutationObserver } from '@vueuse/core';

export default () => {
  // 创建一个 ref 来存储当前的 theme 值
  const theme = ref<'dark' | 'light'>('light');
  // 在挂载时检查初始主题
  onMounted(() => {
    const value = document.body.getAttribute('yc-design-theme');
    theme.value = value === 'dark' ? 'dark' : 'light';
  });
  // 使用 useMutationObserver 来监听 bodyRef 的属性变化
  useMutationObserver(
    document.body,
    (mutationsList) => {
      for (const mutation of mutationsList) {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'yc-design-theme'
        ) {
          const value = (mutation.target as HTMLElement).getAttribute(
            'yc-design-theme'
          );
          theme.value = value === 'dark' ? 'dark' : 'light';
          console.log(theme.value, 'theme');
        }
      }
    },
    {
      attributes: true, // 明确告诉 MutationObserver 我们要监听属性的变化
      attributeFilter: ['yc-design-theme'],
    }
  );
  return {
    theme,
  };
};
