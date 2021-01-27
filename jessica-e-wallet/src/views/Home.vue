<template>
  <div class="home">
    <header>
      <!-- <img alt="Vue logo" src="../assets/logo.png">  lägga till bild från assets-->
      <top v-bind:heading="heading" v-bind:cardHeading="cardHeading" />
    </header>

    <card v-if="getCardStack.length > 0" v-bind:card="getCardStack[activeCard]" />
    <p v-else>Your E-wallet is empty</p>

    <button v-if="getCardStack.length > 0" class="delete" v-on:click="deleteCard">
      Delete card
    </button>

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
      activeCard: 0,
    };
  },

  methods: {
    changeCard: function (i) {
      this.activeCard = i;
    },

    deleteCard: function () {
      let confirmation = window.confirm("Are you sure?");

      if (confirmation === true) {
        console.log(confirmation);

        this.getCardStack.splice(this.activeCard, 1);

        this.activeCard = 0;
  
      }
    },
  },
};
</script>

<style scoped>
.delete {
  max-width: 30%;
  height: 20px;
  font-size: 10px;
  margin: 4px auto 20px auto;
}

p {
  text-align: center;
}
</style>