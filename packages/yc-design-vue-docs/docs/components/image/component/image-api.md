## API

### image Props

<field-table :data="imageProps"/>

### image Events

<field-table :data="imageEvents" type="emits"/>

### image Slots

<field-table :data="imageSlots" type="slots"/>

### image-preview Props

<field-table :data="imagePreviewProps"/>

### image-preview Events

<field-table :data="imagePreviewEvents" type="emits"/>

### image-preview Slots

<field-table :data="imagePreviewSlots" type="slots"/>

### image-preview-group Props

<field-table :data="imagePreviewGroupProps"/>

### image-preview-group Events

<field-table :data="imagePreviewGroupEvents" type="emits"/>

### image-preview-group Slots

<field-table :data="imagePreviewGroupSlots" type="slots"/>

### image-preview-action Props

<field-table :data="imagePreviewActionProps"/>

### Type

```typescript
type HideFooter = boolean | 'never';

type FooterPostion = 'inner' | 'outer';
```

### FAQ

<span style="font-size: 16px">关于 `image-preview `的属性说明：</span>
<br />
键盘快捷键 `keyboard` 设置此属性为 `true` 后，将根据 `actions-layout
  `操作项来启用相应的快捷键操作。
<br />
`esc`: 关闭预览
<br />
`left`: 切换至上一张图片
<br />
`right`: 切换至下一张图片
<br />
`up`: 放大图片
<br />
`down`: 缩小图片
<br />
`space`: 还原至原始大小
<br />
默认缩放比例 `defaultScale` 此属性定义了默认的图片缩放比例。例如，当设置为
`1.5 `时，图片将默认放大到原始大小的 `1.5 `倍。
<br />
滚动缩放速率 `zoomSate` 属性控制了在滚动操作时图片的缩放速率。以 `1.3
  `为例，每次滚动操作都会使图片放大或缩小 `1.3` 倍。

<script setup>
import { ref } from 'vue';

const imageProps = ref([
  {
    name: 'src',
    desc: '图片获取地址',
    type: 'string',
    value: '-',
  },
  {
    name: 'width',
    desc: '图片显示宽度',
    type: 'string | number',
    value: '-',
  },
  {
    name: 'height',
    desc: '图片显示高度',
    type: 'string | number',
    value: '-',
  },
  {
    name: 'title',
    desc: '标题',
    type: 'string',
    value: '-',
  },
  {
    name: 'description',
    desc: '描述，将显示在底部，如果 alt 没有值，则会将其设置给 alt',
    type: 'string',
    value: '-',
  },
  {
    name: 'fit',
    desc: '确定图片如何适应容器框',
    type: "ObjectFit",
    value: '-',
    href:'/guide/types'
  },
  {
    name: 'alt',
    desc: '图片的文字描述',
    type: 'string',
    value: '-',
  },
  {
    name: 'hide-footer',
    desc: '是否隐藏 footer（支持在加载错误时显示底部内容）',
    type: "HideFooter",
    value: 'false',
  },
  {
    name: 'footer-position',
    desc: '底部显示的位置',
    type: "FooterPostion",
    value: "'inner'",
  },
  {
    name: 'show-loader',
    desc: '是否显示加载中效果',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'preview',
    desc: '是否开启预览',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'preview-visible (v-model)',
    desc: '控制预览的打开状态，可与 previewVisibleChange 配合使用',
    type: 'boolean',
    value: '-',
  },
  {
    name: 'default-preview-visible',
    desc: '预览的默认打开状态',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'preview-props',
    desc: '预览的配置项（所有选项都是可选的） ImagePreviewProps',
    type: 'ImagePreviewProps',
    value: '-',
  },
  {
    name: 'footer-class',
    desc: '底部显示区域的类名',
    type: 'ClassName',
    value: '-',
    href:"/guide/types"
  },
]);

const imageEvents = ref([
  {
    name: 'preview-visible-change',
    desc: '预览的打开和关闭事件',
    type: {
      visible: 'boolean'
    },
    value: '-',
  },
]);

const imageSlots = ref([
  {
    name: 'error',
    desc: '自定义错误状态内容',
    type: '-',
    value: '-',
  },
  {
    name: 'error-icon',
    desc: '自定义错误状态的图标',
    type: '-',
    value: '-',
  },
  {
    name: 'loader',
    desc: '自定义加载状态效果',
    type: '-',
    value: '-',
  },
  {
    name: 'extra',
    desc: '底部额外内容',
    type: '-',
    value: '-',
  },
]);

const imagePreviewProps = ref([
  {
    name: 'src',
    desc: '图片获取地址',
    type: 'string',
    value: '-',
  },
  {
    name: 'visible (v-model)',
    desc: '是否可见',
    type: 'boolean',
    value: '-',
  },
  {
    name: 'default-visible',
    desc: '默认是否可见，非受控',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'mask-closable',
    desc: '点击 mask 是否触发关闭',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'closable',
    desc: '是否显示关闭按钮',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'actions-layout',
    desc: '操作项的布局',
    type: 'string[]',
    value: "['fullScreen', 'rotateRight', 'rotateLeft', 'zoomIn', 'zoomOut', 'originalSize']",
  },
  {
    name: 'popup-container',
    desc: '设置弹出框的挂载点，同 teleport 的 to，缺省值是 document.body',
    type: 'PopupContainer',
    value: '-',
    href:"/guide/types"
  },
  {
    name: 'esc-to-close',
    desc: '是否支持 ESC 键关闭预览',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'wheel-zoom',
    desc: '是否开启滚轮缩放',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'keyboard',
    desc: '是否开启键盘控制',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'default-scale',
    desc: '默认缩放比',
    type: 'number',
    value: '1',
  },
  {
    name: 'zoom-rate',
    desc: '缩放速率，仅对滚动缩放生效',
    type: 'number',
    value: '1.1',
  },
]);

const imagePreviewEvents = ref([
  {
    name: 'close',
    desc: '关闭事件',
    type: '-',
    value: '-',
  },
]);

const imagePreviewSlots = ref([
  {
    name: 'actions',
    desc: '自定义额外的操作项',
    type: '-',
    value: '-',
  },
]);

const imagePreviewGroupProps = ref([
  {
    name: 'src-list',
    desc: '图片列表（设置了本属性之后，将不再收集 a-image 子组件的图片信息）',
    type: 'string[]',
    value: '-',
  },
  {
    name: 'current (v-model)',
    desc: '当前展示的图片的下标',
    type: 'number',
    value: '-',
  },
  {
    name: 'default-current',
    desc: '第一张展示的图片的下标',
    type: 'number',
    value: '0',
  },
  {
    name: 'infinite',
    desc: '是否无限循环',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'visible (v-model)',
    desc: '是否可见，受控属性',
    type: 'boolean',
    value: '-',
  },
  {
    name: 'default-visible',
    desc: '默认是否可见，非受控',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'mask-closable',
    desc: '点击 mask 是否触发关闭',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'closable',
    desc: '是否显示关闭按钮',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'actions-layout',
    desc: '控制条的布局',
    type: 'string[]',
    value: "['fullScreen', 'rotateRight', 'rotateLeft', 'zoomIn', 'zoomOut', 'originalSize']",
  },
  {
    name: 'popup-container',
    desc: '设置弹出框的挂载点，同 teleport 的 to，缺省值是 document.body',
    type: 'PopupContainer',
    value: '-',
    href:"/guide/types"
  },
]);

const imagePreviewGroupEvents = ref([
  {
    name: 'change',
    desc: '切换图片',
    type: {
      index: 'number'
    },
    value: '-',
  },
  {
    name: 'visible-change',
    desc: '预览的打开和关闭',
    type: {
      visible: 'boolean'
    },
    value: '-',
  },
]);

const imagePreviewGroupSlots = ref([
  {
    name: 'actions',
    desc: '自定义额外的操作项',
    type: '-',
    value: '-',
  },
]);

const imagePreviewActionProps = ref([
  {
    name: 'name',
    desc: '名称',
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
