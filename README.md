# vue3-antd-template

>vue3-antd-template with js


## install

```
$ npm init vite-app vue3-antd-template
$ cd vue3-antd-template
$ npm install

$ npm run dev
```

## 引入 ant-design-vue

```
$ npm i --save ant-design-vue@next
```

- 完整引入

```
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

const app = createApp(App);

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
app.use(Antd);

app.config.productionTip = false;
app.mount('#app')
```

- 按需引入

```
<template>
  <div>
    <a-button type="primary">
      Primary
    </a-button>
  </div>
</template>

import { Button } from 'ant-design-vue';
components: {
  AButton: Button
},
```