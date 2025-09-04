import { createI18n } from 'vue-i18n';
import zhCN from './lang/zh-cn';
// i18n
const i18n = createI18n({
  legacy: false,
  locale: 'zh-CN',
  fallbackLocale: 'zh-CN',
  messages: {
    'zh-CN': zhCN,
  },
  globalInjection: true,
  silentTranslationWarn: true,
  missingWarn: false,
  fallbackWarn: false,
});

const i18nGlobal = i18n.global;

// 异步加载并设置语言环境。
export async function loadLanguageAsync(locale: string): Promise<string> {
  const loadedLanguages = Object.keys(i18nGlobal.messages.value);
  if (i18nGlobal.locale.value === locale || loadedLanguages.includes(locale)) {
    i18nGlobal.locale.value = locale as any;
    return locale;
  }
  try {
    const localeName = locale
      .split('-')
      .map((v) => v.toLocaleLowerCase())
      .join('-') as any;
    const messages = await import(`./lang/${localeName}.ts`);
    i18nGlobal.setLocaleMessage(locale, messages.default);
    i18nGlobal.locale.value = locale as any;
    return locale;
  } catch (error) {
    console.error(`无法加载语言文件 ${locale}.ts:`, error);
    return i18nGlobal.locale.value;
  }
}

export default i18n;
