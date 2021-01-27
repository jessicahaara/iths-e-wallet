<template>
  <div class="card-stack">
    <card
      v-bind:card="card"
      v-for="(card, index) in getCardStack"
      v-bind:key="index"
      class="card"
      v-on:click.native="activeCard(index)"
    />
  </div>
</template>

<script>
import card from "@/components/card.vue";

export default {
  name: "CardStack",

  components: {
    card,
  },

  computed: {
    getCardStack () {
      return this.$root.$data.cardStack;
    },
  },

  methods: {
    activeCard (i) {
      this.$emit('clicked', i)
    },
  },
};
</script>

<style scoped>
</style>