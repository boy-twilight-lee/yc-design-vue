interface ComponentInfo {
  name: string;
  from: string;
  as: string;
  sideEffects?: string | string[];
}
interface ComponentResolver {
  type: 'component';
  resolve: (name: string) => ComponentInfo | undefined | null;
}
export interface YcDesignVueResolverOptions {
  exclude?: string | RegExp | (string | RegExp)[];
  importStyle?: boolean | 'css';
  sideEffect?: boolean;
}
// 检查名称是否应被排除。
function isExclude(
  name: string,
  exclude?: string | RegExp | (string | RegExp)[]
): boolean {
  if (!exclude) return false;
  if (typeof exclude === 'string') return name === exclude;
  if (exclude instanceof RegExp) return exclude.test(name);
  if (Array.isArray(exclude)) {
    for (const item of exclude) {
      if (isExclude(name, item)) return true;
    }
  }
  return false;
}
// 解析器
export function YcDesignVueResolver(
  options: YcDesignVueResolverOptions = {
    sideEffect: false,
  }
): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^Yc[A-Z]/) && !isExclude(name, options.exclude)) {
        const componentName = name.slice(2);
        const config: ComponentInfo = {
          name: 'default',
          as: componentName,
          from: `yc-design-vue/es/${componentName}`,
        };
        // 4. 处理样式副作用
        if (options.sideEffect !== false) {
          config.sideEffects = `yc-design-vue/es/${componentName}/style/index.js`;
        }
        return config;
      }
      // 如果不匹配，则不处理
      return undefined;
    },
  };
}
