import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import pluralize from 'pluralize'
import Shop from './components/shop/Shop'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

Vue.filter('pluralize', pluralize)

Vue.filter('currencyEur', function (value) {
  return parseFloat(value).toFixed(2) + ' €';
});

Vue.filter('currencyUsd', function (value) {
  return  '$' + parseFloat(value).toFixed(2);
});

new Vue({
  store,
  render: h => h(Shop)
}).$mount('#shop')
