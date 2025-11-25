## API

### watermark Props

<field-table :data="watermarkProps" />

### WatermarkFont Props

<field-table :data="watermarkFontProps" />

<script setup>
import { ref } from 'vue';

const watermarkProps = ref([
  {
    name: 'content',
    desc: '水印文字内容',
    type: 'string | string[]',
    value: '-',
  },
  {
    name: 'image',
    desc: '图片源，建议使用 2 倍或 3 倍图',
    type: 'string',
    value: '-',
  },
  {
    name: 'width',
    desc: '水印宽度（默认为内容宽度）',
    type: 'number',
    value: '-',
  },
  {
    name: 'height',
    desc: '水印高度（默认为内容高度）',
    type: 'number',
    value: '-',
  },
  {
    name: 'gap',
    desc: '水印间的间距',
    type: '[number, number]',
    value: '`[90, 90]`',
  },
  {
    name: 'offset',
    desc: '距离容器左上角的偏移量，默认为水印间距的一半',
    type: '[number, number]',
    value: '`[gap[0]/2, gap[1]/2]`',
  },
  {
    name: 'rotate',
    desc: '旋转角度',
    type: 'number',
    value: '`-22`',
  },
  {
    name: 'font',
    desc: '水印字体样式，具体参数配置看 WatermarkFont',
    type: 'WatermarkFont',
    value: '-',
  },
  {
    name: 'z-index',
    desc: '水印层级',
    type: 'number',
    value: '`6`',
  },
  {
    name: 'alpha',
    desc: '透明度',
    type: 'number',
    value: '`1`',
  },
  {
    name: 'anti-tamper',
    desc: '水印防篡改',
    type: 'boolean',
    value: '`true`',
  },
  {
    name: 'grayscale',
    desc: '灰阶水印',
    type: 'boolean',
    value: '`false`',
  },
  {
    name: 'repeat',
    desc: '是否重复水印',
    type: 'boolean',
    value: '`true`',
  },
  {
    name: 'staggered',
    desc: '是否错开排列',
    type: 'boolean',
    value: '`true`',
  },
]);

const watermarkFontProps = ref([
  {
    name: 'color',
    desc: '字体颜色',
    type: 'string',
    value: '`rgba(0, 0, 0, 0.15)`',
  },
  {
    name: 'fontSize',
    desc: '字体大小',
    type: 'number',
    value: '`16`',
  },
  {
    name: 'fontFamily',
    desc: '字体类型',
    type: 'string',
    value: '`sans-serif`',
  },
  {
    name: 'fontStyle',
    desc: '字体样式',
    type: "'none' | 'normal' | 'italic' | 'oblique'",
    value: '`normal`',
  },
  {
    name: 'textAlign',
    desc: '字体对齐方式',
    type: "'start' | 'end' | 'left' | 'right' | 'center'",
    value: '`center`',
  },
  {
    name: 'fontWeight',
    desc: '字体粗细',
    type: "'normal' | 'bold' | 'bolder' | 'lighter' | number",
    value: '`normal`',
  },
]);
</script>
