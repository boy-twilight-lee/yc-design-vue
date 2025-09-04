import { createI18n } from 'vue-i18n';
import zhCN from './lang/zh-cn.json';
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
// i18n全局对象
const i18nGlobal = i18n.global;
// 加载的语言模块
const langModules = import.meta.glob('./lang/*.json');
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
    const modulePath = `./lang/${localeName}.json`;
    if (langModules[modulePath]) {
      const module = await langModules[modulePath]();
      console.log((module as any).default, locale);
      i18nGlobal.setLocaleMessage(locale, (module as any).default);
      i18nGlobal.locale.value = locale as any;
      return locale;
    } else {
      throw new Error(`无法找到语言文件: ${localeName}.json`);
    }
  } catch (error) {
    console.error(`无法加载语言文件 ${locale}.ts:`, error);
    return i18nGlobal.locale.value;
  }
}
export default i18n;
