import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ArcoIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css';
import YcDesign from '@/components';
import '@/components/index.less';

const app = createApp(App);
app.use(router);
app.use(ArcoIcon);
app.use(YcDesign);
app.mount('#app');
