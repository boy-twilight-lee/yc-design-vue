<template>
  <div class="test">
    <yc-config-provider :locale="locale">
      <yc-radio-group
        type="button"
        v-model="locale"
        :options="localeOptions"
      ></yc-radio-group>
      <div>
        <yc-pagination
          :total="50"
          show-total
          show-jumper
          show-page-size
          style="margin-top: 20px; margin-bottom: 20px"
        />
      </div>
      <yc-space :size="20" style="margin-bottom: 20px">
        <yc-time-picker type="time-range" style="width: 300px" />
        <yc-popconfirm content="Are you sure you want to delete?">
          <yc-button type="primary">Popconfirm</yc-button>
        </yc-popconfirm>
      </yc-space>
    </yc-config-provider>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const locales = {
  'zh-CN': 'zhCN',
  'en-US': 'enUS',
  'es-ES': 'esES',
  'ja-JP': 'jaJP',
  'id-ID': 'idID',
  'fr-FR': 'frFR',
  'pt-PT': 'ptPT',
  'de-DE': 'deDE',
  'ko-KR': 'koKR',
  'it-IT': 'itIT',
  'th-TH': 'thTH',
  'vi-VN': 'viVN',
};
const localeOptions = Object.keys(locales);
const locale = ref('es-ES');
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
