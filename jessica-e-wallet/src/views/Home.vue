<template>
  <div class="home">
    <header>
      
      <!-- <img alt="Vue logo" src="../assets/logo.png">  lägga till bild från assets-->
      <top v-bind:heading="heading" v-bind:cardHeading="cardHeading" />
    </header>


    <card v-bind:card="getCardStack[activeCard]" />


    <CardStack v-on:clicked="changeCard" />

    <router-link to="AddCard" tag="button">ADD A NEW CARD</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import top from "@/components/top.vue";
import CardStack from "@/components/CardStack.vue";
import card from "@/components/card.vue";

export default {
  name: "Home",

  computed: {
    getCardStack: function () {
      return this.$root.$data.cardStack;
    },
  },

  components: {
    top,
    CardStack,
    card,
  },

  data() {
    return {
      heading: "e-wallet",
      cardHeading: "active card",
      activeCard: 0
    };
  },

  methods: {
    changeCard: function(i) {
      this.activeCard = i;
    }
  }
  
};
</script>

<style scoped>
</style>