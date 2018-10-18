import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './plugins/element.js';
import { createProvider } from './vue-apollo';

Vue.config.productionTip = false;

new Vue({
  router,
  apolloProvider: createProvider(),
  render: (h) => h(App)
}).$mount('#app');