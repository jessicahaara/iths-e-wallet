<template>
  <div class="add-card">
    <header class="top">
      <top v-bind:heading="heading" v-bind:cardHeading="cardHeading" />
    </header>

    <card v-bind:card="card" />

    <CardForm v-bind:card="card" />
    <router-link to="/" tag="button" v-on:click.native="addNewCard()">
    ADD CARD
    </router-link>
  </div>
</template>

<script>
import top from "@/components/top.vue";
import CardForm from "@/components/CardForm.vue";
import card from "@/components/card.vue";

export default {
  name: "AddCard",
  components: {
    top,
    CardForm,
    card,
  },

  data() {
    return {
      heading: "add new card",
      cardHeading: "new card",

      card: {
        id: "432984728397",
        holder: "",
        vendor: "bitcoin",
        number: "",
        validMonth: "MM",
        validYear: "YY",
      },
    };
  },

  methods: {
    addNewCard() {
      this.$root.$data.cardStack.push(this.card);
    },
  },

};
</script>

<style scoped>
</style>