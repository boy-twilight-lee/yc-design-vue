import { App, Plugin } from 'vue';
import './index.less';
import Affix from './Affix';
import Alert from './Alert';
import { default as Anchor, AnchorLink } from './Anchor';
import AutoComplete from './AutoComplete';
import { default as Avatar, AvatarGroup } from './Avatar';
import BackTop from './BackTop';
import Badge from './Badge';
import Button, { ButtonGroup } from './Button';
import { default as Breadcrumb, BreadcrumbItem } from './Breadcrumb';
import { default as Card, CardMeta, CardGrid } from './Card';
import Calendar from './Calendar';
import { default as Carousel, CarouselItem } from './Carousel';
import { default as Checkbox, CheckboxGroup } from './Checkbox';
import Collapse, { CollapseItem } from './Collapse';
import ColorPicker from './ColorPicker';
import Cascader from './Cascader';
import Comment from './Comment';
import ConfigProvider from './ConfigProvider';
import { default as Descriptions, DescriptionsItem } from './Descriptions';
import Divider from './Divider';
import Drawer from './Drawer';
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
import Input from './Input';
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
import Message from './Message';
import Notification from './Notification';
import OverflowList from './OverflowList';
import PageHeader from './PageHeader';
import Pagination from './Pagination';
import Popconfirm from './Popconfirm';
import Popover from './Popover';
import Progress from './Progress';
import Radio, { RadioGroup } from './Radio';
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
import VerificationCode from './VerificationCode';
import Watermark from './Watermark';
import i18n from '@shared/locale/i18n';
export type {
  Size,
  Direction,
  Theme,
  TargetContainer,
  PopupContainer,
} from '@shared/type';
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
  VerificationCode,
  Watermark,
};

export const components: Record<string, Plugin> = {
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
  VerificationCode,
  Watermark,
};

export default {
  ...components,
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
  DescriptionsItem,
  DropdownButton,
  Doption,
  Dgroup,
  Dsubmenu,
  GridCol,
  GridItem,
  GridRow,
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
  install: (app: App) => {
    app.use(i18n);
    for (const key of Object.keys(components)) {
      app.use(components[key]);
    }
  },
};
