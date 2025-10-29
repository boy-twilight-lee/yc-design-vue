import { createApp } from 'vue';
import App from './index.vue';
import Arco from '@arco-design/web-vue';
import ArcoIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css';
import YcDesign from '@/components';

const app = createApp(App);
app.use(ArcoIcon);
app.use(Arco);
app.use(YcDesign);
app.mount('#app');
