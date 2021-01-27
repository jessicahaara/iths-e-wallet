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
          id: "432984728397",
          holder: "Jessica Haara",
          vendor: "Evil Corp",
          number: "12334574536834",
          validMonth: "MM",
          validYear: "YY",
        },
        {
          id: "432984728396",
          holder: "Charlie Haara",
          vendor: "Bitcoin Inc",
          number: "456",
          validMonth: "MM",
          validYear: "YY",
        },
        {
          id: "432984728395",
          holder: "Lukas Rosman",
          vendor: "Ninja Bank",
          number: "789",
          validMonth: "05",
          validYear: "YY",
        },
      ] 
    }
  },
  render: h => h(App)
}).$mount('#app')



