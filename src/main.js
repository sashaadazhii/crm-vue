import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import VueMeta from 'vue-meta'
import Paginate from 'vuejs-paginate'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import localizeFilter from '@/filters/localize.filter'
import tooltipDirective from '@/directives/tooltip.directive'
import messagePlagin from '@/utils/message.plugin'
import titlePlagin from '@/utils/title.plugin'
import Loader from '@/components/app/Loader'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.use(messagePlagin)

// Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(VueMeta)
Vue.use(titlePlagin)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.filter('localize', localizeFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)

firebase.initializeApp({
  apiKey: 'AIzaSyCNRsaM-DvhZU_hQN7dLOhcXRkClGxFgBQ',
  authDomain: 'crm-vue-sasha.firebaseapp.com',
  databaseURL: 'https://crm-vue-sasha.firebaseio.com',
  projectId: 'crm-vue-sasha',
  storageBucket: 'crm-vue-sasha.appspot.com',
  messagingSenderId: '665012971555',
  appId: '1:665012971555:web:cbdd198421b71f1fabe996'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
