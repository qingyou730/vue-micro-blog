import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import md5 from 'js-md5';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.prototype.$md5 = md5;
Vue.prototype.$axios = axios;


Vue.use(ElementUI);

// Vue.prototype.$generateParams = function(data){
//   var admin = {
//     "groups":this.$store.state.user.group,
//     "username":this.$store.state.user.user_id,
//     "email":this.$store.state.user.email,
//   }
//   var finalData = {
//   	app: this.$store.state.APP.toUpperCase(),
//   	role: admin,
//   	sign: ''
//   }
//   finalData.data = data;
//   return finalData;
// }

Vue.prototype.$success = function(msg) {
  this.$message({
    showClose: true,
    message: msg,
    type: 'success'
  })
}
Vue.prototype.$error = function(msg) {
  this.$message({
    showClose: true,
    message: msg,
    type: 'error'
  })
}
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
