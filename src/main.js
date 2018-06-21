import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

Vue.config.productionTip = false;

import ScrollActive from "vue-scrollactive";

Vue.use(ScrollActive);

new Vue({
  render: h => h(App)
}).$mount("#app");
