// 入口文件
import Vue from "vue";
import App from "./App.vue";//大组件

new Vue({
  render: (h) => h(App),
}).$mount("#app");//挂载
