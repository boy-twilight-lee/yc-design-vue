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

// 子组件及其对应的父组件映射
// The key is the sub-component, and the value is its parent component.
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
  options: YcDesignVueResolverOptions = {
    sideEffect: false,
  }
): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (!name.match(/^Yc[A-Z]/) || isExclude(name, options.exclude)) {
        return undefined;
      }
      const componentName = name.slice(2);
      const parentName = subCompt[componentName];
      let importInfo;
      if (parentName) {
        importInfo = {
          name: componentName,
          from: `yc-design-vue/es/${parentName}`,
        };
      } else {
        importInfo = {
          name: 'default',
          from: `yc-design-vue/es/${componentName}`,
        };
      }
      const config: ComponentInfo = {
        name: importInfo.name,
        as: componentName,
        from: importInfo.from,
      };
      // 4. 处理样式副作用
      if (options.sideEffect !== false) {
        const styleDir = parentName || componentName;
        config.sideEffects = `yc-design-vue/es/${styleDir}/style/index.js`;
      }
      return config;
    },
  };
}
