import { watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';

export default () => {
  // route信息
  const route = useRoute();
  watch(
    () => route.path,
    async () => {
      await nextTick();
      document?.querySelectorAll('details')?.forEach((details) => {
        const summary = details.querySelector('summary');
        if (!summary) {
          return;
        }
        summary.onclick = () => {
          if (details.hasAttribute('open')) {
            details.removeAttribute('open');
          } else {
            details.setAttribute('open', 'true');
          }
        };
      });
    },
    {
      immediate: true,
    }
  );
};
