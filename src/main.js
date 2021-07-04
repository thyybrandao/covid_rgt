import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faSyringe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { auth } from './services/firebase'
// import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

library.add(faUserSecret)
library.add(faSyringe)

Vue.component('font-awesome-icon', FontAwesomeIcon)

let app
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      // vuetify,
      render: (h) => h(App),
    }).$mount('#app')
  }
})
