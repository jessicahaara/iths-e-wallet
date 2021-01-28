<template>
  <div class="home">
    <header>
      <top v-if="getCardStack.length > 0" v-bind:heading="heading" v-bind:cardHeading="cardHeading" />
      <top v-else v-bind:heading="heading" />
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

        this.getCardStack.splice(this.activeCard, 1);

        this.activeCard = 0;
  
      }
    },
  },
};
</script>

<style scoped>

button {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 4rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
  color: #000;
  border: 0.125rem solid #000;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 0.5rem;
  margin: 2rem 0;
  font-family: PT Mono, monospace;
  cursor: pointer;
  background: #fff;
  width: 100%;
}
button:hover {
  background: #000;
  color: #ddd;
}
button:active {
  background: #000;
  color: #fff;
}

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