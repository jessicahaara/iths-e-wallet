<template>
  <div class="card-form">
    <label for="number" class="col2">Card Number</label>
    <input
      type="text"
      name="number"
      maxlength="16"
      placeholder="XXXX XXXX XXXX XXXX"
      class="col-2"
      v-model="card.number"
    />

    <label for="cardholder" class="col2">Cardholder name</label>
    <input
      type="text"
      name="cardholder"
      placeholder="Firstname Lastname"
      class="col-2"
      v-model="card.holder"
    />

    <label for="month" class="col-1">Month</label>

    <label for="year" class="col-1">year</label>

    <select name="month" class="col-1" v-model="card.validMonth">
      <option v-for="(month, index) in months" v-bind:key="index">
        {{ month }}
      </option>
    </select>

    <select name="year" class="col-1" v-model="card.validYear">
      <option v-for="(year, index) in years" v-bind:key="index">
        {{ year }}
      </option>
    </select>

    <label for="vendor" class="col-2">Vendor</label>
    <select
      name="vendor"
      class="col-2"
      v-model="card.vendor"
      v-on:change="changeColor(card.vendor)"
      
    >
      <option v-for="(vendor, index) in vendors" v-bind:key="index" >
        {{ vendor }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "CardForm",

  props: {
    card: Object,
  },

  data() {
    return {
      months: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
      ],

      years: ["21", "22", "23", "24", "25"],

      vendors: ["Bitcoin Inc", "Blockchain Inc", "Evil Corp", "Ninja Bank"],
    };
  },

  methods: {
    changeColor(vendor) {
      this.$emit("clicked", vendor);
      console.log(vendor)
    },
  },
};
</script>

<style scoped>
.card-form {
  margin: 2rem 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 1rem;
}
label {
  padding: 0.25rem 0;
  font-size: 0.7rem;
  text-transform: uppercase;
}
input,
select {
  border: 1px solid #000;
  border-radius: 0.25rem;
  padding: 0.5rem;
  height: 2.6rem;
  margin: 0 0 0.8rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 1rem;
  width: 100%;
}
.col-1 {
  grid-column: auto/span 1;
}
.col-2 {
  grid-column: auto/span 2;
}
</style>