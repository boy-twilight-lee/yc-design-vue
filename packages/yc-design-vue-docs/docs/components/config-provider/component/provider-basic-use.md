### 基本用法

设置国际化语言的基本用法。

<div class="cell-demo vp-raw">
<yc-config-provider :locale="locale">
<yc-radio-group
      type="button"
      v-model="localeType"
      :options="localeOptions"></yc-radio-group>
<yc-space
      :size="20"
      style="margin-bottom: 20px"
      direction="vertical"
      align="center">
<yc-pagination
        :total="50"
        show-total
        show-jumper
        show-page-size
        style="margin-top: 20px; margin-bottom: 20px" />
<yc-time-picker style="width: 300px" />
<yc-calendar />
<yc-popconfirm content="Are you sure you want to delete?">
<yc-button type="primary">Popconfirm</yc-button>
</yc-popconfirm>
</yc-space>
</yc-config-provider>
</div>

<script setup>
import { ref, computed } from 'vue';
import zhCN from 'yc-design-vue/lang/zh-cn';
import enUS from 'yc-design-vue/lang/en-us';
import esES from 'yc-design-vue/lang/es-es';
import jaJP from 'yc-design-vue/lang/ja-jp';
import idID from 'yc-design-vue/lang/id-id';
import frFR from 'yc-design-vue/lang/fr-fr';
import ptPT from 'yc-design-vue/lang/pt-pt';
import deDE from 'yc-design-vue/lang/de-de';
import koKR from 'yc-design-vue/lang/ko-kr';
import itIT from 'yc-design-vue/lang/it-it';
import thTH from 'yc-design-vue/lang/th-th';
import viVN from 'yc-design-vue/lang/vi-vn';
const locales = {
  'zh-CN': zhCN,
  'en-US': enUS,
  'es-ES': esES,
  'ja-JP': jaJP,
  'id-ID': idID,
  'fr-FR': frFR,
  'pt-PT': ptPT,
  'de-DE': deDE,
  'ko-KR': koKR,
  'it-IT': itIT,
  'th-TH': thTH,
  'vi-VN': viVN,
};
const localeOptions = Object.keys(locales);
const localeType = ref('es-ES');
const locale = computed(() => locales[localeType.value]);
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-config-provider :locale="locale">
    <yc-radio-group
      type="button"
      v-model="localeType"
      :options="localeOptions"></yc-radio-group>
    <yc-space
      :size="20"
      style="margin-bottom: 20px"
      direction="vertical"
      align="center">
      <yc-pagination
        :total="50"
        show-total
        show-jumper
        show-page-size
        style="margin-top: 20px; margin-bottom: 20px" />
      <yc-time-picker style="width: 300px" />
      <yc-calendar />
      <yc-popconfirm content="Are you sure you want to delete?">
        <yc-button type="primary">Popconfirm</yc-button>
      </yc-popconfirm>
    </yc-space>
  </yc-config-provider>
</template>

<script setup>
import { ref, computed } from 'vue';
import zhCN from 'yc-design-vue/lang/zh-cn';
import enUS from 'yc-design-vue/lang/en-us';
import esES from 'yc-design-vue/lang/es-es';
import jaJP from 'yc-design-vue/lang/ja-jp';
import idID from 'yc-design-vue/lang/id-id';
import frFR from 'yc-design-vue/lang/fr-fr';
import ptPT from 'yc-design-vue/lang/pt-pt';
import deDE from 'yc-design-vue/lang/de-de';
import koKR from 'yc-design-vue/lang/ko-kr';
import itIT from 'yc-design-vue/lang/it-it';
import thTH from 'yc-design-vue/lang/th-th';
import viVN from 'yc-design-vue/lang/vi-vn';
const locales = {
  'zh-CN': zhCN,
  'en-US': enUS,
  'es-ES': esES,
  'ja-JP': jaJP,
  'id-ID': idID,
  'fr-FR': frFR,
  'pt-PT': ptPT,
  'de-DE': deDE,
  'ko-KR': koKR,
  'it-IT': itIT,
  'th-TH': thTH,
  'vi-VN': viVN,
};
const localeOptions = Object.keys(locales);
const localeType = ref('es-ES');
const locale = computed(() => locales[localeType.value]);
</script>
```

</details>
