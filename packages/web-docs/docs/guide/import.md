# 自动引入插件

对于组件的按需引入，你可以直接使用我们准备好的自动引入插件，这里提供源码供大家学习。

## 插件源码

```typescript
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

interface YcDesignVueResolverOptions {
  exclude?: string | RegExp | (string | RegExp)[];
  sideEffect?: boolean;
}

// 子组件映射表：将子组件映射到其父组件/目录
const subCompt: Record<string, string> = {
  AnchorLink: 'Anchor',
  AvatarGroup: 'Avatar',
  ButtonGroup: 'Button',
  BreadcrumbItem: 'Breadcrumb',
  CardMeta: 'Card',
  CardGrid: 'Card',
  CarouselItem: 'Carousel',
  CheckboxGroup: 'Checkbox',
  CollapseItem: 'Collapse',
  Countdown: 'Statistic',
  DescriptionsItem: 'Descriptions',
  DropdownButton: 'Dropdown',
  Doption: 'Dropdown',
  Dgroup: 'Dropdown',
  Dsubmenu: 'Dropdown',
  GridCol: 'Grid',
  GridItem: 'Grid',
  GridRow: 'Grid',
  ImagePreview: 'Image',
  ImagePreviewAction: 'Image',
  ImagePreviewGroup: 'Image',
  LayoutContent: 'Layout',
  LayoutFooter: 'Layout',
  LayoutHeader: 'Layout',
  LayoutSider: 'Layout',
  ListItem: 'List',
  ListItemMeta: 'List',
  MenuItem: 'Menu',
  MenuItemGroup: 'Menu',
  Option: 'Select',
  Optgroup: 'Select',
  RadioGroup: 'Radio',
  SkeletonLine: 'Skeleton',
  SkeletonShape: 'Skeleton',
  Step: 'Steps',
  SubMenu: 'Menu',
  TabPane: 'Tabs',
  TimelineItem: 'Timeline',
  TypographyText: 'Typography',
  TypographyTitle: 'Typography',
  TypographyParagraph: 'Typography',
};

// 组件依赖关系表：记录一个组件依赖哪些其他组件
const componentDependencies: Record<string, string[]> = {
  VerificationCode: ['Input'],
  TypographyBase: ['Input', 'Tooltip'],
  Transfer: ['Checkbox', 'Button', 'Scrollbar', 'Input', 'Empty'],
  Tooltip: ['Trigger'],
  TimePicker: ['Trigger', 'Button', 'Scrollbar'],
  Timeline: ['Spin'],
  Tag: ['Spin'],
  Switch: ['Spin'],
  Slider: ['InputNumber', 'Tooltip'],
  Select: [
    'Spin',
    'Scrollbar',
    'Input',
    'InputTag',
    'Trigger',
    'Empty',
    'Checkbox',
  ],
  Popover: ['Trigger'],
  Popconfirm: ['Button', 'Trigger'],
  Pagination: ['InputNumber', 'Select'],
  PageHeader: ['Divider'],
  OverflowList: ['Tag'],
  Modal: ['Button'],
  Menu: ['Dropdown', 'Tooltip'],
  Mention: ['AutoComplete'],
  List: ['Spin', 'Scrollbar', 'Pagination', 'Empty'],
  Link: ['Spin'],
  Layout: ['ResizeBox'],
  InputTag: ['Tag'],
  InputNumber: ['Button', 'Input'],
  ImagePreviewAction: ['Tooltip'],
  Image: ['Spin'],
  Dropdown: [
    'Scrollbar',
    'Trigger',
    'Button',
    'ButtonGroup',
    'Trigger',
    'Scrollbar',
  ],
  Drawer: ['Button'],
  Comment: ['Avatar'],
  ColorPicker: ['Trigger', 'Select', 'Input', 'InputNumber'],
  Cascader: [
    'Scrollbar',
    'Spin',
    'Checkbox',
    'Input',
    'InputTag',
    'Trigger',
    'Empty',
  ],
  Card: ['Spin'],
  Calendar: ['Button', 'Radio'],
  Button: ['Spin'],
  Breadcrumb: ['Dropdown'],
  BackTop: ['Button'],
  Avatar: ['Popover'],
  AutoComplete: ['Select'],
};

//检查一个组件名是否应该被排除
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

// 使用 Map 作为缓存，存储已经计算过的组件依赖关系
const cache = new Map<string, Set<string>>();
// 递归查找一个组件的所有最终依赖（包括它自己）。
function findFinalDependencies(
  componentName: string,
  visited: Set<string> = new Set()
): Set<string> {
  // 性能优化：如果这个组件的结果已经被计算过，直接从缓存中返回。
  if (cache.has(componentName)) {
    return cache.get(componentName)!;
  }
  // 循环检测：如果当前组件已经在递归路径中，返回一个空集合以打破循环。
  if (visited.has(componentName)) {
    return new Set();
  }
  // 将当前组件添加到结果集和访问路径中。
  const allDeps = new Set<string>([componentName]);
  visited.add(componentName);
  // 获取当前组件的直接依赖。
  const directDependencies = componentDependencies[componentName];
  if (directDependencies) {
    // 遍历所有直接依赖。
    for (const dep of directDependencies) {
      // 递归调用此函数来查找所有子依赖，并将结果合并到当前集合中。
      const subDependencies = findFinalDependencies(dep, visited);
      subDependencies.forEach((finalDep) => allDeps.add(finalDep));
    }
  }
  // 回溯：处理完其分支后，将当前组件从访问路径中移除。
  visited.delete(componentName);
  // 将计算结果存入缓存以备将来使用。
  cache.set(componentName, allDeps);
  return allDeps;
}

// 解析器主函数
export const YcDesignVueResolver = (
  options: YcDesignVueResolverOptions = {
    exclude: [],
  }
): ComponentResolver => {
  return {
    type: 'component',
    resolve: (name: string) => {
      // 检查组件名是否有效（以 'Yc' 开头且后跟一个大写字母）或是否被排除了
      if (!name.match(/^Yc[A-Z]/) || isExclude(name, options.exclude)) {
        return undefined;
      }
      // 解析组件名和可能的父组件名
      const componentName = name.slice(2);
      const parentName = subCompt[componentName];
      const importDir = parentName || componentName;
      const importName = parentName ? componentName : 'default';
      // 构建组件信息对象
      const config: ComponentInfo = {
        name: importName,
        as: componentName, // 别名
        from: `yc-design-vue/es/${importDir}`, // 导入路径
      };
      // 创建一个 Set 来收集所有需要引入的样式文件（副作用）
      const sideEffects = new Set<string>();
      // 首先，添加全局共享样式
      sideEffects.add('yc-design-vue/es/shared.css');
      // 添加组件自身的样式
      sideEffects.add(`yc-design-vue/es/${importDir}/index.css`);
      // 获取当前组件的所有传递性依赖（包括它自己）
      const transitiveDependencies = findFinalDependencies(componentName);
      // 为所有这些依赖添加样式
      transitiveDependencies.forEach((depName) => {
        // 对于每个依赖，我们需要找到它的导入目录
        const depParentName = subCompt[depName];
        const depImportDir = depParentName || depName;
        sideEffects.add(`yc-design-vue/es/${depImportDir}/index.css`);
      });
      // 将 Set 转换为数组并赋值给配置对象
      config.sideEffects = Array.from(sideEffects);
      return config;
    },
  };
};
```
