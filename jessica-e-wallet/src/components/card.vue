<template>
  <div class="card" v-bind:class="colorClass">
    <header>
      <img alt="chip" src="../assets/chip-light.svg" />
    </header>
    <section class="number" v-if="card.number">{{ numberWithSpaces }}</section>
    <section class="number" v-else></section>
    <section class="info">
      <aside class="holder">
        <span>Cardholder Name</span>
        <p>{{ card.holder }}</p>
      </aside>
      <aside class="valid">
        <span>Valid Until</span>
        <p>{{ card.validMonth }}/{{ card.validYear }}</p>
      </aside>
    </section>
  </div>
</template>

<script>
export default {
  name: "card",

  props: {
    card: Object,
    getCardStack: Array,
    colorClass: String,
  },
  computed: {
    numberWithSpaces() {
      return this.card.number.match(/.{1,4}/g).join(" ");
    },
  },
};
</script>

<style scoped>
</style>