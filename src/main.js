import Vue from "vue";
import App from "./App.vue";
// import { Input, Pagination, Table, TableColumn } from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
// Vue.use(Input);
// Vue.use(Pagination);
// Vue.use(Table);
// Vue.use(TableColumn);

// import vueElementTableWill from "../dist/vue-element-table-will.js";
import vueElementTableWill from "./lib/index.js";
Vue.use(vueElementTableWill);

new Vue({
  el: "#app",
  render: h => h(App)
});
