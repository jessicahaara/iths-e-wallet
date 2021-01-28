import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  data() {
    return {
      cardStack: [
        {
          holder: "Jessica Haara",
          vendor: "Evil Corp",
          number: "1234567891011121",
          validMonth: "05",
          validYear: "22",
        },
        {
          holder: "Jessica Haara",
          vendor: "Bitcoin Inc",
          number: "1891189118911891",
          validMonth: "11",
          validYear: "21",
        },
        {
          holder: "Jessica Haara",
          vendor: "Ninja Bank",
          number: "1337133713371337",
          validMonth: "03",
          validYear: "23",
        },
      ] 
    }
  },
  render: h => h(App)
}).$mount('#app')


