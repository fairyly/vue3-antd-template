import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

const app = createApp(App);

// antd vue
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
app.use(Antd);

app.config.productionTip = false;
app.mount('#app')
