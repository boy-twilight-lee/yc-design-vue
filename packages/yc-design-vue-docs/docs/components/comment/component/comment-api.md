## API

### comment Props

<field-table :data="commentProps"/>

### comment Slots

<field-table :data="commentSlots" type="slots"/>

### Type

```typescript
type Align =
  | 'left'
  | 'right'
  | { datetime?: 'left' | 'right'; actions?: 'left' | 'right' };
```

<script setup>
import { ref } from 'vue';

const commentProps = ref([
  {
    name: 'author',
    desc: '作者名',
    type: 'string',
    value: '-',
  },
  {
    name: 'avatar',
    desc: '头像',
    type: 'string',
    value: '-',
  },
  {
    name: 'content',
    desc: '评论内容',
    type: 'string',
    value: '-',
  },
  {
    name: 'datetime',
    desc: '时间描述',
    type: 'string',
    value: '-',
  },
  {
    name: 'align',
    desc: '靠左/靠右 展示 datetime 和 actions',
    type: 'Align',
    value: "'left'",
  },
]);

const commentSlots = ref([
  {
    name: 'avatar',
    desc: '头像',
    type: '-',
    value: '-',
  },
  {
    name: 'author',
    desc: '作者',
    type: '-',
    value: '-',
  },
  {
    name: 'datetime',
    desc: '时间描述',
    type: '-',
    value: '-',
  },
  {
    name: 'content',
    desc: '评论内容',
    type: '-',
    value: '-',
  },
  {
    name: 'actions',
    desc: '操作列表',
    type: '-',
    value: '-',
  },
]);
</script>
