import { App, Component, Plugin } from 'vue';
import '@shared/styles/reset.less';
import '@shared/styles/translation.less';
import '@shared/styles/variable.less';
import Affix from './Affix';
import Alert from './Alert';
import { default as Anchor, AnchorLink } from './Anchor';
import AutoComplete from './AutoComplete';
import { default as Avatar, AvatarGroup } from './Avatar';
import BackTop from './BackTop';
import Badge from './Badge';
import { default as Button, ButtonGroup } from './Button';
import { default as Breadcrumb, BreadcrumbItem } from './Breadcrumb';
import { default as Card, CardMeta, CardGrid } from './Card';
import Calendar from './Calendar';
import { default as Carousel, CarouselItem } from './Carousel';
import { default as Checkbox, CheckboxGroup } from './Checkbox';
import { default as Collapse, CollapseItem } from './Collapse';
import ColorPicker from './ColorPicker';
import { default as Cascader, CascaderPanel } from './Cascader';
import Comment from './Comment';
import ConfigProvider from './ConfigProvider';
import { default as Descriptions, DescriptionsItem } from './Descriptions';
import {
  default as DatePicker,
  YearPicker,
  MonthPicker,
  WeekPicker,
} from './DatePicker';
import Divider from './Divider';
import Drawer from './Drawer';
import type { DrawerMethod } from './Drawer';
import {
  default as Dropdown,
  DropdownButton,
  Doption,
  Dgroup,
  Dsubmenu,
} from './Dropdown';
import Empty from './Empty';
import { default as Grid, GridItem, GridRow, GridCol } from './Grid';
import {
  default as Image,
  ImagePreview,
  ImagePreviewGroup,
  ImagePreviewAction,
} from './Image';
import {
  default as Input,
  InputPassword,
  InputSearch,
  InputGroup,
} from './Input';
import InputNumber from './InputNumber';
import InputTag from './InputTag';
import {
  default as Layout,
  LayoutContent,
  LayoutFooter,
  LayoutSider,
  LayoutHeader,
} from './Layout';
import Link from './Link';
import { default as List, ListItem, ListItemMeta } from './List';
import { default as Menu, MenuItem, SubMenu, MenuItemGroup } from './Menu';
import Mention from './Mention';
import Modal from './Modal';
import type { ModalMethod } from './Modal';
import Message from './Message';
import type { MessageMethod } from './Message';
import Notification from './Notification';
import type { NotificationMethod } from './Notification';
import OverflowList from './OverflowList';
import PageHeader from './PageHeader';
import Pagination from './Pagination';
import Popconfirm from './Popconfirm';
import Popover from './Popover';
import Progress from './Progress';
import { default as Radio, RadioGroup } from './Radio';
import Rate from './Rate';
import ResizeBox from './ResizeBox';
import Result from './Result';
import Scrollbar from './Scrollbar';
import { default as Select, Option, Optgroup } from './Select';
import { default as Skeleton, SkeletonLine, SkeletonShape } from './Skeleton';
import Slider from './Slider';
import Space from './Space';
import Split from './Split';
import Spin from './Spin';
import { default as Statistic, Countdown } from './Statistic';
import { default as Steps, Step } from './Steps';
import Switch from './Switch';
import Tag from './Tag';
import { default as Timeline, TimelineItem } from './Timeline';
import Textarea from './Textarea';
import TimePicker from './TimePicker';
import Tooltip from './Tooltip';
import Transfer from './Transfer';
import Trigger from './Trigger';
import {
  default as Typography,
  TypographyText,
  TypographyTitle,
  TypographyParagraph,
} from './Typography';
import { default as Tabs, TabPane } from './Tabs';
import Upload from './Upload';
import VerificationCode from './VerificationCode';
import Watermark from './Watermark';
export * from '@shared/type';
export * from './Affix';
export * from './Alert';
export * from './Anchor';
export * from './AutoComplete';
export * from './Avatar';
export * from './BackTop';
export * from './Badge';
export * from './Button';
export * from './Breadcrumb';
export * from './Card';
export * from './Calendar';
export * from './Carousel';
export * from './Checkbox';
export * from './Collapse';
export * from './ColorPicker';
export * from './Cascader';
export * from './Comment';
export * from './ConfigProvider';
export * from './Descriptions';
export * from './Divider';
export * from './Drawer';
export * from './Dropdown';
export * from './Empty';
export * from './Grid';
export * from './Image';
export * from './Input';
export * from './InputNumber';
export * from './InputTag';
export * from './Layout';
export * from './Link';
export * from './List';
export * from './Menu';
export * from './Mention';
export * from './Modal';
export * from './Message';
export * from './Notification';
export * from './OverflowList';
export * from './PageHeader';
export * from './Pagination';
export * from './Popconfirm';
export * from './Popover';
export * from './Progress';
export * from './Radio';
export * from './Rate';
export * from './ResizeBox';
export * from './Result';
export * from './Scrollbar';
export * from './Select';
export * from './Skeleton';
export * from './Slider';
export * from './Space';
export * from './Split';
export * from './Statistic';
export * from './Steps';
export * from './Spin';
export * from './Switch';
export * from './Tag';
export * from './Timeline';
export * from './Textarea';
export * from './TimePicker';
export * from './Tooltip';
export * from './Transfer';
export * from './Trigger';
export * from './Typography';
export * from './Tabs';
export * from './Upload';
export * from './VerificationCode';
export * from './Watermark';

export {
  Affix,
  Alert,
  Anchor,
  AutoComplete,
  Avatar,
  BackTop,
  Badge,
  Button,
  Breadcrumb,
  Card,
  Calendar,
  Carousel,
  Checkbox,
  Collapse,
  ColorPicker,
  Cascader,
  Comment,
  ConfigProvider,
  Descriptions,
  DatePicker,
  Divider,
  Drawer,
  Dropdown,
  Empty,
  Grid,
  Image,
  Input,
  InputNumber,
  InputTag,
  Layout,
  Link,
  List,
  Menu,
  Mention,
  Modal,
  Message,
  Notification,
  OverflowList,
  PageHeader,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  Rate,
  ResizeBox,
  Result,
  Scrollbar,
  Select,
  Skeleton,
  Slider,
  Space,
  Split,
  Statistic,
  Steps,
  Spin,
  Switch,
  Tag,
  Timeline,
  Textarea,
  TimePicker,
  Tooltip,
  Transfer,
  Trigger,
  Typography,
  Tabs,
  Upload,
  VerificationCode,
  Watermark,
};

const components: Record<string, Plugin> = {
  Affix,
  Alert,
  Anchor,
  AutoComplete,
  Avatar,
  BackTop,
  Badge,
  Button,
  Breadcrumb,
  Card,
  Calendar,
  Carousel,
  Checkbox,
  Collapse,
  ColorPicker,
  Cascader,
  Comment,
  ConfigProvider,
  Descriptions,
  DatePicker,
  Divider,
  Drawer,
  Dropdown,
  Empty,
  Grid,
  Image,
  Input,
  InputNumber,
  InputTag,
  Layout,
  Link,
  List,
  Menu,
  Mention,
  Modal,
  Message,
  Notification,
  OverflowList,
  PageHeader,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  Rate,
  ResizeBox,
  Result,
  Scrollbar,
  Select,
  Skeleton,
  Slider,
  Space,
  Split,
  Statistic,
  Steps,
  Spin,
  Switch,
  Tag,
  Timeline,
  Textarea,
  TimePicker,
  Tooltip,
  Transfer,
  Trigger,
  Typography,
  Tabs,
  Upload,
  VerificationCode,
  Watermark,
};

const childComponents: Record<string, Component> = {
  AnchorLink,
  AvatarGroup,
  ButtonGroup,
  BreadcrumbItem,
  CardGrid,
  CardMeta,
  CarouselItem,
  CheckboxGroup,
  CollapseItem,
  Countdown,
  CascaderPanel,
  DescriptionsItem,
  YearPicker,
  MonthPicker,
  WeekPicker,
  DropdownButton,
  Doption,
  Dgroup,
  Dsubmenu,
  GridCol,
  GridItem,
  GridRow,
  InputGroup,
  InputSearch,
  InputPassword,
  ImagePreview,
  ImagePreviewAction,
  ImagePreviewGroup,
  LayoutContent,
  LayoutFooter,
  LayoutHeader,
  LayoutSider,
  ListItem,
  ListItemMeta,
  MenuItem,
  MenuItemGroup,
  Option,
  Optgroup,
  RadioGroup,
  SkeletonLine,
  SkeletonShape,
  Step,
  SubMenu,
  TabPane,
  TimelineItem,
  TypographyText,
  TypographyTitle,
  TypographyParagraph,
};

const YcDesignVue = {
  ...components,
  ...childComponents,
  install: (app: App) => {
    for (const key of Object.keys(components)) {
      app.use(components[key]);
    }
  },
};

export default YcDesignVue;

declare module 'vue' {
  interface GlobalComponents {
    YcAffix: typeof Affix;
    YcAlert: typeof Alert;
    YcAnchor: typeof Anchor;
    YcAnchorLink: typeof AnchorLink;
    YcAutoComplete: typeof AutoComplete;
    YcAvatar: typeof Avatar;
    YcAvatarGroup: typeof AvatarGroup;
    YcBackTop: typeof BackTop;
    YcBadge: typeof Badge;
    YcBreadcrumb: typeof Breadcrumb;
    YcBreadcrumbItem: typeof BreadcrumbItem;
    YcButton: typeof Button;
    YcButtonGroup: typeof ButtonGroup;
    YcCalendar: typeof Calendar;
    YcCard: typeof Card;
    YcCardMeta: typeof CardMeta;
    YcCardGrid: typeof CardGrid;
    YcCarousel: typeof Carousel;
    YcCarouselItem: typeof CarouselItem;
    YcCascader: typeof Cascader;
    YcCascaderPanel: typeof CascaderPanel;
    YcCheckbox: typeof Checkbox;
    YcCheckboxGroup: typeof CheckboxGroup;
    YcCollapse: typeof Collapse;
    YcCollapseItem: typeof CollapseItem;
    YcColorPicker: typeof ColorPicker;
    YcComment: typeof Comment;
    YcConfigProvider: typeof ConfigProvider;
    YcDatePicker: typeof DatePicker;
    YcYearPicker: typeof YearPicker;
    YcMonthPicker: typeof MonthPicker;
    YcWeekPicker: typeof WeekPicker;
    YcDescriptions: typeof Descriptions;
    YcDescriptionsItem: typeof DescriptionsItem;
    YcDivider: typeof Divider;
    YcDrawer: typeof Drawer;
    YcDropdown: typeof Dropdown;
    YcDropdownButton: typeof DropdownButton;
    YcDoption: typeof Doption;
    YcDgroup: typeof Dgroup;
    YcDsubmenu: typeof Dsubmenu;
    YcEmpty: typeof Empty;
    YcGrid: typeof Grid;
    YcCol: typeof GridCol;
    YcRow: typeof GridRow;
    YcGridItem: typeof GridItem;
    YcImage: typeof Image;
    YcImagePreview: typeof ImagePreview;
    YcImagePreviewGroup: typeof ImagePreviewGroup;
    YcImagePreviewAction: typeof ImagePreviewAction;
    YcInput: typeof Input;
    YcInputGroup: typeof InputGroup;
    YcInputPassword: typeof InputPassword;
    YcInputSearch: typeof InputSearch;
    YcInputNumber: typeof InputNumber;
    YcInputTag: typeof InputTag;
    YcLayout: typeof Layout;
    YcLayoutHeader: typeof LayoutHeader;
    YcLayoutFooter: typeof LayoutFooter;
    YcLayoutContent: typeof LayoutContent;
    YcLayoutSider: typeof LayoutSider;
    YcLink: typeof Link;
    YcList: typeof List;
    YcListItem: typeof ListItem;
    YcListItemMeta: typeof ListItemMeta;
    YcMention: typeof Mention;
    YcMenu: typeof Menu;
    YcSubMenu: typeof SubMenu;
    YcMenuItem: typeof MenuItem;
    YcMenuItemGroup: typeof MenuItemGroup;
    YcModal: typeof Modal;
    YcOverflowList: typeof OverflowList;
    YcPageHeader: typeof PageHeader;
    YcPagination: typeof Pagination;
    YcPopconfirm: typeof Popconfirm;
    YcPopover: typeof Popover;
    YcProgress: typeof Progress;
    YcRadio: typeof Radio;
    YcRadioGroup: typeof RadioGroup;
    YcRate: typeof Rate;
    YcResizeBox: typeof ResizeBox;
    YcResult: typeof Result;
    YcScrollbar: typeof Scrollbar;
    YcSelect: typeof Select;
    YcOption: typeof Option;
    YcOptgroup: typeof Optgroup;
    YcSkeleton: typeof Skeleton;
    YcSkeletonShape: typeof SkeletonShape;
    YcSkeletonLine: typeof SkeletonLine;
    YcSlider: typeof Slider;
    YcSpace: typeof Space;
    YcSpin: typeof Spin;
    YcSplit: typeof Split;
    YcStatistic: typeof Statistic;
    YcCountdown: typeof Countdown;
    YcSteps: typeof Steps;
    YcStep: typeof Step;
    YcSwitch: typeof Switch;
    YcTabs: typeof Tabs;
    YcTabPane: typeof TabPane;
    YcTag: typeof Tag;
    YcTextarea: typeof Textarea;
    YcTimeline: typeof Timeline;
    YcTimelineItem: typeof TimelineItem;
    YcTimePicker: typeof TimePicker;
    YcTooltip: typeof Tooltip;
    YcTransfer: typeof Transfer;
    YcTrigger: typeof Trigger;
    YcTypography: typeof Typography;
    YcTypographyParagraph: typeof TypographyParagraph;
    YcTypographyTitle: typeof TypographyTitle;
    YcTypographyText: typeof TypographyText;
    YcUpload: typeof Upload;
    YcVerificationCode: typeof VerificationCode;
    YcWatermark: typeof Watermark;
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $drawer: DrawerMethod;
    $message: MessageMethod;
    $modal: ModalMethod;
    $notification: NotificationMethod;
  }
}
