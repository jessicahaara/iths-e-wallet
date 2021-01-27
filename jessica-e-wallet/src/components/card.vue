<template>
  <div
    class="card blank"
    v-bind:class="{
      evil: card.vendor === 'Evil Corp',
      blockchain: card.vendor === 'Blockchain Inc',
      bitcoin: card.vendor === 'Bitcoin Inc',
      ninja: card.vendor === 'Ninja Bank',
    }"
  >
    <header>
      <img
        v-if="card.vendor === 'Bitcoin Inc'"
        alt="chip"
        src="../assets/chip-dark.svg"
      />
      <img v-else alt="chip" src="../assets/chip-light.svg" />

      <img
        v-if="card.vendor === 'Bitcoin Inc'"
        alt="Bitcoin Inc"
        src="../assets/vendor-bitcoin.svg"
      />
      <img
        v-else-if="card.vendor === 'Evil Corp'"
        alt="Evil Corp"
        src="../assets/vendor-evil.svg"
      />
      <img
        v-else-if="card.vendor === 'Blockchain Inc'"
        alt="Blockchain Inc"
        src="../assets/vendor-blockchain.svg"
      />
      <img
        v-else-if="card.vendor === 'Ninja Bank'"
        alt="Ninja Bank"
        src="../assets/vendor-ninja.svg"
      />
    </header>

    <section class="number" v-if="card.number">
      {{ numberWithSpaces }}
    </section>
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