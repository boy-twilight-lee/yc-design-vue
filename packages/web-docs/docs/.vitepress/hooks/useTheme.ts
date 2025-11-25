import { ref, onMounted, onBeforeUnmount, provide } from 'vue';
export default () => {
  // 处理暗色主题
  let observer: MutationObserver | null = null;
  const isDark = ref(false);
  provide('isDark', isDark);
  onMounted(() => {
    const htmlElement = document.documentElement;
    observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName !== 'class') return;
        if ((mutation.target as HTMLElement).classList.contains('dark')) {
          document.body.setAttribute('yc-design-theme', 'dark');
          isDark.value = true;
        } else {
          document.body.removeAttribute('yc-design-theme');
          isDark.value = false;
        }
      });
    });
    observer.observe(htmlElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
  });
  onBeforeUnmount(() => {
    observer?.disconnect();
  });
  return {
    isDark,
  };
};
