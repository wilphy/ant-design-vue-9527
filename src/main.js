import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import {
  Button,
  Layout,
  Icon,
  Drawer,
  Radio,
  Menu,
  Alert,
  Form,
  Input,
  Select
} from "ant-design-vue";
import Auth from "./directives/auth";

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);
Vue.use(Alert);
Vue.use(Form);
Vue.use(Input);
Vue.use(Select);

Vue.use(Auth);

const IconFont_404 = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1543883_hbr3zdlopwf.js"
});
Vue.component("IconFont_404", IconFont_404);

const IconFont_Logo = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1543883_e5mc4qi4pjp.js"
});
Vue.component("IconFont_Logo", IconFont_Logo);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
