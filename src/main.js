import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

Vue.config.productionTip = false;

import ScrollActive from "vue-scrollactive";
import inViewportDirective from "vue-in-viewport-directive";
import router from "./router";

Vue.use(ScrollActive);
Vue.directive("in-viewport", inViewportDirective);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
