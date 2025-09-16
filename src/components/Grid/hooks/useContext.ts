import {
  ref,
  toRefs,
  Ref,
  computed,
  onBeforeUnmount,
  reactive,
  Reactive,
  watchEffect,
  provide as _provide,
  inject as _inject,
} from 'vue';
import { GridRowGutter } from '../type';
import { RecordType, BreakpointName, ResponsiveValue } from '@shared/type';
import { getBreakpointValue, isArray } from '@shared/utils';
import { nanoid } from 'nanoid';

export const GRID_CONTEXT_KEY = 'grid-context';
export type GridContext = {
  breakpoint: Ref<BreakpointName>;
  div: Ref<boolean>;
  gutter: Ref<number[]>;
  cols: Ref<number>;
  colGap: Ref<number>;
  spanMap: Reactive<SpanMap>;
  collapsed: Ref<boolean>;
  collapsedRows: Ref<number>;
};
export type SpanMap = Map<
  string,
  {
    id: string;
    span: number;
    suffix: boolean;
  }
>;
export type GutterValue = GridRowGutter | [GridRowGutter, GridRowGutter];

export default () => {
  const provide = (props: RecordType) => {
    const {
      gutter: _gutter = ref<GutterValue>(0),
      cols: _cols = ref(24),
      rowGap: _rowGap = ref(0),
      colGap: _colGap = ref(0),
      collapsed = ref(false),
      collapsedRows = ref(1),
      div = ref(false),
    } = toRefs(props);
    // 收集总的spans数量
    const spanMap = reactive<SpanMap>(new Map());
    // breakpoint
    const breakpoint = ref<BreakpointName>('xxl');
    // cols
    const cols = computed(() => {
      return getBreakpointValue(breakpoint.value, _cols.value, 24) as number;
    });
    // rowgap
    const rowGap = computed(() => {
      return getBreakpointValue(breakpoint.value, _rowGap.value);
    });
    // colgap
    const colGap = computed(() => {
      return getBreakpointValue(breakpoint.value, _colGap.value, 0) as number;
    });
    // gutter[x,y]
    const gutter = computed(() => {
      const result = isArray(_gutter.value)
        ? _gutter.value.map((v) =>
            getBreakpointValue(breakpoint.value, v as ResponsiveValue, 0)
          )
        : [getBreakpointValue(breakpoint.value, _gutter.value, 0), 0];
      return result as number[];
    });
    // 提供给子组件
    _provide<GridContext>(GRID_CONTEXT_KEY, {
      breakpoint,
      gutter,
      div,
      spanMap: spanMap as any,
      cols,
      colGap,
      collapsed,
      collapsedRows,
    });
    return {
      breakpoint,
      cols,
      colGap,
      rowGap,
      gutter,
    };
  };
  const inject = () => {
    // 接收的值
    const injection = _inject<GridContext>(GRID_CONTEXT_KEY, {
      gutter: ref([0, 0]),
      breakpoint: ref('xs'),
      div: ref(false),
      colGap: ref(0),
      cols: ref(24),
      collapsed: ref(false),
      collapsedRows: ref(1),
      spanMap: new Map(),
    });
    const { spanMap } = injection;
    // 收集占据的格子数量
    const collectSpan = (span: Ref<number>, suffix: Ref<boolean>) => {
      const id = nanoid();
      watchEffect(() => {
        spanMap.set(id, {
          id,
          suffix: suffix.value,
          span: span.value,
        });
      });
      onBeforeUnmount(() => {
        spanMap.delete(id);
      });
      return {
        id,
      };
    };
    return {
      ...injection,
      collectSpan,
    };
  };
  return {
    provide,
    inject,
  };
};
