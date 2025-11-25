<template>
  <a-table
    :columns="columns"
    :data="data"
    :pagination="false"
    style="width: 100%; margin-top: 20px"
    class="vp-raw">
    <template #columns>
      <a-table-column
        v-for="v in columns"
        :key="v.dataIndex"
        v-bind="v">
        <template #cell="{ record }">
          <div @click="handleClick(record)">
            <!-- 渲染参数 -->
            <div
              v-if="typeof record[v.dataIndex] == 'object'"
              class="param-list">
              <div
                v-for="[key, value] in Object.entries(record[v.dataIndex])"
                :key="key"
                class="param-list-item">
                {{ key }}:
                <i class="highlight">{{ value }}</i>
              </div>
            </div>
            <!-- 渲染pros -->
            <span
              v-else-if="
                type == 'props' && ['type', 'value'].includes(v.dataIndex)
              "
              :class="{
                highlight: true,
                'cursor-pointer': record.href,
              }">
              {{ record[v.dataIndex] }}
            </span>
            <!-- 渲染普通 -->
            <span v-else>{{ record[v.dataIndex] }}</span>
          </div>
        </template>
      </a-table-column>
    </template>
  </a-table>
</template>

<script setup>
import { computed, toRefs } from 'vue';
import { useRouter } from 'vitepress';
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  type: {
    type: String,
    default: 'props',
  },
});
const { type } = toRefs(props);
// router
const router = useRouter();
// 动态计算最终显示的列
const columns = computed(() => {
  const nameMap = {
    props: '参数名',
    emits: '事件名',
    methods: '方法名',
    slots: '插槽名',
    format: '格式',
    langs: '语言',
  };
  const typeMap = {
    props: '类型',
    format: '输出',
  };
  return [
    {
      title: nameMap[type.value],
      dataIndex: 'name',
      width: type.value == 'langs' ? 600 : 180,
    },
    {
      title: type.value == 'langs' ? '地区编码' : '描述',
      dataIndex: 'desc',
    },
    type.value != 'langs'
      ? {
          title: typeMap[type.value] ?? '参数',
          dataIndex: 'type',
          width: ['emits', 'methods', 'slots'].includes(props.type) ? 350 : 250,
        }
      : null,
    type.value == 'props'
      ? {
          title: '默认值',
          dataIndex: 'value',
          width: 150,
        }
      : null,
  ].filter((v) => v);
});
// 处理点击
const handleClick = (record) => {
  if (!record.href) return;
  router.go(record.href);
};
</script>

<style scoped>
.highlight {
  color: rgb(var(--primary-6));
}
.cursor-pointer {
  cursor: pointer;
}

.param-list {
  display: flex;
  flex-direction: column;
}
</style>
