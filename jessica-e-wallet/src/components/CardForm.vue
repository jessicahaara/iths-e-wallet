<template>
  <div>
    <form class="card-form" v-on:submit.prevent="onSubmit">
      <label for="number" class="col2">Card Number</label>
      <input
        type="text"
        name="number"
        maxlength="16"
        minlength="16"
        placeholder="XXXX XXXX XXXX XXXX"
        class="col-2"
        v-model="card.number"
        required
      />

      <label for="cardholder" class="col2">Cardholder name</label>
      <input
        type="text"
        name="cardholder"
        placeholder="Firstname Lastname"
        class="col-2"
        v-model="card.holder"
        required
      />

      <label for="month" class="col-1">Month</label>

      <label for="year" class="col-1">year</label>

      <select name="month" class="col-1" v-model="card.validMonth" required>
        <option v-for="(month, index) in months" v-bind:key="index">
          {{ month }}
        </option>
      </select>

      <select name="year" class="col-1" v-model="card.validYear" required>
        <option v-for="(year, index) in years" v-bind:key="index">
          {{ year }}
        </option>
      </select>

      <label for="vendor" class="col-2">Vendor</label>
      <select name="vendor" class="col-2" v-model="card.vendor" required>
        <option v-for="(vendor, index) in vendors" v-bind:key="index">
          {{ vendor }}
        </option>
      </select>

      <input type="submit" value="ADD CARD" class="button col-2">
    </form>
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

      yearNow: new Date().getFullYear(),
      
      years: [],

      vendors: ["Bitcoin Inc", "Blockchain Inc", "Evil Corp", "Ninja Bank"],
    };
  },

  methods: {
    onSubmit: function () {
      this.$router.push("/");
      this.$root.$data.cardStack.push(this.card);
    },

    getYearList: function () {
      for (let i = 0; i < 5; i++) {
        let shortYear = (this.yearNow + i).toString();
        this.years.push(shortYear.substring(2))
      }
    },

  },

  beforeMount() {
    this.getYearList()
  }
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

.button {
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
.button:hover {
  background: #000;
  color: #ddd;
}
.button:active {
  background: #000;
  color: #fff;
}
</style>