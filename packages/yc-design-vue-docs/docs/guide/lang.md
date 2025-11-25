# 国际化

所有组件文案默认使用的是中文，通过设置可以使用其它语言。

---

通过 `ConfigProvider` 组件实现国际化。

### 基本用法

```vue
<template>
  <yc-config-provider :locale="enUS">
    <yc-pagination
      :total="50"
      show-total
      show-jumper
      show-page-size />
  </yc-config-provider>
</template>

<script setup>
import enUS from 'yc-design-vue/lang/en-us';
</script>
```

### 支持的地区语言

<field-table :data="langs" type="langs" />

<script setup>
import { ref } from 'vue';

const langs = ref([
  {
    name: '简体中文',
    desc: 'zh-CN',
  },
  {
    name: '英文',
    desc: 'en-US',
  },
  {
    name: '日文',
    desc: 'js-JP',
  },
  {
    name: '繁体中文（中国台湾）',
    desc: 'zh-TW',
  },
  {
    name: '葡萄牙语',
    desc: 'pt-PT',
  },
  {
    name: '西班牙语',
    desc: 'es-ES',
  },
  {
    name: '印度尼西亚语',
    desc: 'id-ID',
  },
  {
    name: '法语（法国）',
    desc: 'fr-FR',
  },
  {
    name: '德语（德国）',
    desc: 'de-DE',
  },
  {
    name: '韩语',
    desc: 'ko-KR',
  },
    {
    name: '意大利语(意大利)',
    desc: 'it-IT',
  },
    {
    name: '马来语(马来西亚)',
    desc: 'ms-MY',
  },
    {
    name: '泰语',
    desc: 'th-TH',
  },
      {
    name: '越南语',
    desc: 'vi-VN',
  },
    {
    name: '高棉语（柬埔寨）',
    desc: 'km-KH',
  },
    {
    name: '阿拉伯语（埃及）',
    desc: 'ar-EG',
  },
      {
    name: '俄语（俄罗斯）',
    desc: 'ru-RU',
  },
]);

</script>
