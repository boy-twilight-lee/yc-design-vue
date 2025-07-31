import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// arco
import ArcoIcon from '@arco-design/web-vue/es/icon';
import Arco from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
// ycui
// import YcUi from '@/components';
// import '@/components/index.less';
import YcUi from 'yc-ui-pro';
import 'yc-ui-pro/es/style.css';

const app = createApp(App);
app.use(router);
app.use(ArcoIcon);
app.use(Arco);
app.use(YcUi);
app.mount('#app');
