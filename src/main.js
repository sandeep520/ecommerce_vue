import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
import JwPagination from 'jw-vue-pagination'
import {Pagination}  from 'bootstrap-vue'
Vue.component('b-pagination',Pagination)
Vue.component('jw-pagination',JwPagination)
Vue.use(Vuelidate);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
