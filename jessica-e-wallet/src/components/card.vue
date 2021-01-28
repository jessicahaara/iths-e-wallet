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
.card {
  max-width: 24rem;
  height: 14rem;
  border-radius: 0.6rem;
  background: #eee;
  padding: 1rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);
  display: grid;
  gap: 0.5rem 0;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 2.8rem;
  text-shadow: -1px -1px 2px hsla(0, 0%, 100%, 0.4);
}
.blank {
  background: linear-gradient(
      237.75deg,
      hsla(0, 0%, 100%, 0.24),
      hsla(0, 0%, 100%, 0)
    ),
    #d0d0d0;
}
.evil {
  background: linear-gradient(248.3deg, rgba(0, 0, 0, 0.16), transparent),
    #f33355;
  color: #fff;
}
.blockchain {
  background: linear-gradient(248.52deg, rgba(0, 0, 0, 0.15) 1.49%, transparent),
    #8b58f9;
  color: #fff;
}
.bitcoin {
  background: linear-gradient(
      0.689turn,
      hsla(0, 0%, 100%, 0.15),
      hsla(0, 0%, 100%, 0) 99.07%
    ),
    #ffae34;
  color: #222;
}
.ninja {
  background: linear-gradient(
      248.3deg,
      hsla(0, 0%, 100%, 0.15),
      hsla(0, 0%, 100%, 0)
    ),
    #222;
  color: #fff;
}

.card header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  grid-column: auto/span 2;
  grid-row: auto/span 2;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}
.card header img {
  opacity: 0.8;
}
.card header [alt="chip"] {
  -ms-flex-item-align: end;
  align-self: flex-end;
  opacity: 1;
}
.card section.number {
  font-size: 1.6rem;
  letter-spacing: 0.05rem;
  padding: 0.5rem 0 0;
  text-transform: uppercase;
}
.card section.info,
.card section.number {
  grid-column: auto/span 2;
  grid-row: auto/span 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.card section aside span {
  display: block;
  text-transform: uppercase;
  font-size: 0.7rem;
  margin: 0 0 0.25rem;
}
.card section aside.valid span {
  text-align: right;
}
.card section aside p {
  display: block;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
}
.card section aside.valid p {
  text-align: right;
}
.card section.info aside.holder {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
</style>