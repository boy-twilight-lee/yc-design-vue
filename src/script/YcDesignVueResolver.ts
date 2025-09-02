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
  sideEffect?: boolean;
}

// 检查名称是否应被排除 (函数保持不变)
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

// 子组件及其对应的父组件映射 (保持不变)
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

// 解析器
export function YcDesignVueResolver(
  // 默认开启副作用，即自动导入样式
  options: YcDesignVueResolverOptions = {
    sideEffect: false,
  }
): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      // 1. 检查组件名是否合法
      if (!name.match(/^Yc[A-Z]/) || isExclude(name, options.exclude)) {
        return undefined;
      }
      // 2. 解析组件名和父组件
      const componentName = name.slice(2);
      const parentName = subCompt[componentName];
      const importDir = parentName || componentName;
      // 如果是子组件，我们需要具名导入；如果是父组件，通常是默认导入
      const importName = parentName ? componentName : 'default';
      // 3. 核心修改: 将 from 路径直接指向入口 JS 文件
      const config: ComponentInfo = {
        name: importName,
        as: componentName,
        from: `yc-design-vue/es/${importDir}`,
      };
      // 4. 处理样式副作用
      if (options.sideEffect) {
        config.sideEffects = [
          // 全局共享样式，应首先被引入
          'yc-design-vue/es/shared.css',
          // 组件自身的样式
          `yc-design-vue/es/${importDir}/index.css`,
        ];
      }
      return config;
    },
  };
}
