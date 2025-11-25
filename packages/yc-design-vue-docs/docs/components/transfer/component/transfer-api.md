## API

### transfer Props

<field-table :data="transferProps"/>

### transfer Events

<field-table :data="transferEvents" type="emits" />

### transfer Slots

<field-table :data="transferSlots"  type="slots"/>

### TransferItem

<field-table :data="transferItemProps"/>

<script setup>
import { ref } from 'vue';

const transferProps = ref([
  {
    name: 'data',
    desc: '穿梭框的数据',
    type: 'TransferItem[]',
    value: '[]',
  },
  {
    name: 'model-value (v-model)',
    desc: '目标选择框中的值',
    type: 'string[]',
    value: '-',
  },
  {
    name: 'default-value',
    desc: '目标选择框中默认的值（非受控状态）',
    type: 'string[]',
    value: '[]',
  },
  {
    name: 'selected (v-model)',
    desc: '选中的选项值',
    type: 'string[]',
    value: '-',
  },
  {
    name: 'default-selected',
    desc: '默认选中的选项值（非受控状态）',
    type: 'string[]',
    value: '[]',
  },
  {
    name: 'disabled',
    desc: '是否禁用',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'simple',
    desc: '是否开启简单模式（点击选项即移动）',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'one-way',
    desc: '是否开启单向模式（仅可移动到目标选择框）',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'show-search',
    desc: '是否显示搜索框',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'show-select-all',
    desc: '是否展示全选勾选框',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'title',
    desc: '源选择框和目标选择框的标题',
    type: 'string[]',
    value: "['Source', 'Target']",
  },
  {
    name: 'source-input-search-props',
    desc: '源选择框的搜索框配置',
    type: 'object',
    value: '-',
  },
  {
    name: 'target-input-search-props',
    desc: '目标选择框的搜索框配置',
    type: 'object',
    value: '-',
  },
]);

const transferEvents = ref([
  {
    name: 'change',
    desc: '目标选择框的值改变时触发',
    type: {
      value: 'string[]'
    },
    value: '-',
  },
  {
    name: 'select',
    desc: '选中的值改变时触发',
    type: {
      selected: 'string[]'
    },
    value: '-',
  },
  {
    name: 'search',
    desc: '用户搜索时触发',
    type: {
      value: "string",
      type: "'target'|'source'"
    },
    value: '-',
  },
]);

const transferSlots = ref([
  {
    name: 'source',
    desc: '源面板',
    type: {
      data: 'TransferItem[]',
      selectedKeys: 'string[]',
      onSelect: '(value: string[]) => void'
    },
    value: '-',
  },
  {
    name: 'source-title',
    desc: '源标题插槽 ',
    type: {
      countTotal: 'number',
      countSelected: 'number',
      searchValue: 'string',
      checked: 'boolean',
      indeterminate: 'boolean',
      onSelectAllChange: '(checked:boolean) => void',
      onClear: '() => void'
    },
    value: '-',
  },
  {
    name: 'to-target-icon',
    desc: '移至目标图标插槽',
    type: '-',
    value: '-',
  },
  {
    name: 'to-source-icon',
    desc: '移至源图标插槽',
    type: '-',
    value: '-',
  },
  {
    name: 'target',
    desc: '目标面板',
    type: {
      data: 'TransferItem[]',
      selectedKeys: 'string[]',
      onSelect: '(value: string[]) => void'
    },
    value: '-',
  },
  {
    name: 'target-title',
    desc: '目标标题插槽',
    type: {
      countTotal: 'number',
      countSelected: 'number',
      searchValue: 'string',
      checked: 'boolean',
      indeterminate: 'boolean',
      onSelectAllChange: '(checked:boolean) => void',
      onClear: '() => void'
    },
    value: '-',
  },
  {
    name: 'item',
    desc: '选项',
    type: {
      value: 'string',
      label: 'string'
    },
    value: '-',
  },
]);

const transferItemProps = ref([
  {
    name: 'string | value',
    desc: '选项的值',
    type: 'string',
    value: '-',
  },
  {
    name: 'label',
    desc: '选项的标签',
    type: 'string',
    value: '-',
  },
  {
    name: 'disabled',
    desc: '是否禁用',
    type: 'boolean',
    value: 'false',
  },
]);
</script>
