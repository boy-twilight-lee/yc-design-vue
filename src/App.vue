<template>
  <div class="test">
    <yc-config-provider :locale="locale">
      <yc-radio-group
        type="button"
        v-model="localeType"
        :options="localeOptions"
      ></yc-radio-group>
      <div></div>
      <yc-space
        :size="20"
        style="margin-bottom: 20px"
        direction="vertical"
        align="center"
      >
        <yc-pagination
          :total="50"
          show-total
          show-jumper
          show-page-size
          style="margin-top: 20px; margin-bottom: 20px"
        />
        <yc-time-picker style="width: 300px" />
        <yc-calendar />
        <yc-popconfirm content="Are you sure you want to delete?">
          <yc-button type="primary">Popconfirm</yc-button>
        </yc-popconfirm>
      </yc-space>
    </yc-config-provider>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import zhCN from '../public/lang-es/zh-cn';
import enUS from '../public/lang-es/en-us';
import esES from '../public/lang-es/es-es';
import jaJP from '../public/lang-es/ja-jp';
import idID from '../public/lang-es/id-id';
import frFR from '../public/lang-es/fr-fr';
import ptPT from '../public/lang-es/pt-pt';
import deDE from '../public/lang-es/de-de';
import koKR from '../public/lang-es/ko-kr';
import itIT from '../public/lang-es/it-it';
import thTH from '../public/lang-es/th-th';
import viVN from '../public/lang-es/vi-vn';
const locales: Record<string, any> = {
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
const localeOptions = Object.keys(locales) as any[];
const localeType = ref('es-ES');
const locale = computed(() => locales[localeType.value]);
</script>

<style lang="less">
#app {
  height: 100vh;
  width: 100vw;
  .test {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
}
</style>
