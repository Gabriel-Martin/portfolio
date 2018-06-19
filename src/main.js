import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

import VueScrollactive from "vue-scrollactive";

Vue.config.productionTip = false;

Vue.use(VueScrollactive);

new Vue({
  render: h => h(App)
}).$mount("#app");
