import { createApp } from 'vue';
import App from './App.vue';
// import ArcoIcon from '@arco-design/web-vue/es/icon';
// import Arco from '@arco-design/web-vue';
// import '@arco-design/web-vue/dist/arco.css';
// import YcDesign from '@/components';
import YcDesign from 'yc-design-vue';
import 'yc-design-vue/es/style.css';
// import '@/components/index.less';

const app = createApp(App);
// app.use(ArcoIcon);
// app.use(Arco);
// app.use(YcDesign);
app.mount('#app');
