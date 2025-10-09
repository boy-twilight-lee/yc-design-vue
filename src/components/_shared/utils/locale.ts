import { ref, reactive, computed } from 'vue';
import { isString } from './is';
import { getGlobalConfig } from './global-config';
import zhCN from '@/lang/lang-es/zh-cn';

// 当前的语言类型
const LOCALE = ref('zh-CN');
// 国际化信息存储
const I18N_MESSAGES = reactive<Record<string, any>>({
  'zh-CN': zhCN,
});

// useI18n
export const useI18n = () => {
  const { locale } = getGlobalConfig();
  //  i18nMessage
  const i18nMessage = computed<Record<string, any>>(
    () => locale.value ?? I18N_MESSAGES[LOCALE.value]
  );
  // t函数
  const transform = (key: string, ...args: any[]): string => {
    const keyArray = key.split('.');
    let temp: any = i18nMessage.value;
    for (const keyItem of keyArray) {
      if (!temp[keyItem]) {
        return key;
      }
      temp = temp[keyItem];
    }
    if (isString(temp)) {
      if (args.length > 0) {
        return temp.replace(/{(\d+)}/g, (sub, index) => args[index] ?? sub);
      }

      return temp;
    }
    return temp;
  };

  return {
    i18nMessage,
    locale: computed(() => i18nMessage.value.locale),
    t: transform,
  };
};
