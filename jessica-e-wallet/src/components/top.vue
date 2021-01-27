<template>
  <div class="top">
    <h1>{{ heading }}</h1>

    <p>{{ cardHeading }}</p>
    
  </div>
</template>

<script>
export default {
  name: 'top',
  
  props: {
    heading: String,
    cardHeading: String
  }
}
</script>


<style scoped>
h1 {
  font-family: Source Sans Pro, sans-serif;
  -webkit-box-flex: 2;
  -ms-flex: 2;
  flex: 2;
  line-height: 2rem;
  font-size: 2rem;
  padding: 1.5rem 0;
}
.top {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  text-transform: uppercase;
}

h1,
p {
  text-align: center;
  margin: 0;
}
p {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.4);
  padding: 0.25rem;
}
</style>
