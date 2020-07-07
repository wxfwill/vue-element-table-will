import vueElementTable from "./vueElementTable.vue";

const vueElementTableWill = {
  install: function(Vue) {
    Vue.component(vueElementTable.name, vueElementTable);
  }
};

// 这里的判断很重要
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(vueElementTableWill);
}
export default vueElementTableWill;
