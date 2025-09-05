import { ref, reactive, computed } from 'vue';
import { isString } from './is';
import { getGlobalConfig } from './global-config';
import zhCN from '@/components/_lang/zh-cn';

const LOCALE = ref('zh-CN');
const I18N_MESSAGES = reactive<Record<string, any>>({
  'zh-CN': zhCN,
});

/**
 * 添加地区语言包。添加过后的语言包可以通过 `useLocale` 使用
 * @param messages 需要添加的地区语言数据
 * @param options
 */
export const addI18nMessages = (
  messages: Record<string, any>,
  options?: {
    overwrite?: boolean;
  }
) => {
  for (const key of Object.keys(messages)) {
    if (!I18N_MESSAGES[key] || options?.overwrite) {
      I18N_MESSAGES[key] = messages[key];
    }
  }
};

/**
 * 切换地区语言。仅在未提供ConfigProvider时生效。
 * @param locale
 */
export const useLocale = (locale: string) => {
  if (!I18N_MESSAGES[locale]) {
    // eslint-disable-next-line no-console
    console.warn(`use ${locale} failed! Please add ${locale} first`);
    return;
  }
  LOCALE.value = locale;
};

/**
 * 获取当前的地区语言
 */
export const getLocale = () => {
  return LOCALE.value;
};

// 仅内部使用
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
