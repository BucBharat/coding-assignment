import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core';

/* import specific icons */
import {
  faUserSecret,
  faUser,
  faEnvelope,
  faPhone,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';
import { faChrome } from '@fortawesome/free-brands-svg-icons';

/* import font awesome icon component */

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faUserSecret, faUser, faEnvelope, faPhone, faHouse, faChrome);
// library.add(faUser);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
