import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false
new Vue({
    el: '#app',
    render: h => h(App),
    // mounted() {
    //     setTimeout(() => {
    //         this.$destroy();
    //     }, 3000);
    // },

})