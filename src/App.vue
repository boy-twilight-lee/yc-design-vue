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
import zhCN from '@shared/lang/zh-cn';
import enUS from '@shared/lang/en-us';
import esES from '@shared/lang/es-es';
import jaJP from '@shared/lang/ja-jp';
import idID from '@shared/lang/id-id';
import frFR from '@shared/lang/fr-fr';
import ptPT from '@shared/lang/pt-pt';
import deDE from '@shared/lang/de-de';
import koKR from '@shared/lang/ko-kr';
import itIT from '@shared/lang/it-it';
import thTH from '@shared/lang/th-th';
import viVN from '@shared/lang/vi-vn';
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
