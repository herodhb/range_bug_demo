import { createApp } from "vue";
import {
  Button,
  Toast,
  Navbar,
  SideNavBar,
  SubSideNavBar,
  Cell,
  CellGroup,
  Popup,
  OverLay,
  Input,
  InputNumber,
  Switch,
  Picker,
  DatePicker,
  RadioGroup,
  Radio,
  Range,
  Dialog,
  Swiper,
  SwiperItem,
  Icon,
} from "@nutui/nutui-taro";

import "./app.scss";

const App = createApp({
  onShow() {},
  mounted() {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

App.use(Button)
  .use(Toast)
  .use(Navbar)
  .use(Cell)
  .use(CellGroup)
  .use(Input)
  .use(InputNumber)
  .use(Picker)
  .use(DatePicker)
  .use(Switch)
  .use(Range)
  .use(Radio)
  .use(RadioGroup)
  .use(Swiper)
  .use(SwiperItem)
  .use(Dialog)
  .use(Popup)
  .use(OverLay)
  .use(SideNavBar)
  .use(SubSideNavBar)
  .use(Icon);

export default App;
