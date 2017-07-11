<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Get Started Below by Adding a New Goal</h2>
  </div>
</template>

<script>
export default {
  name: 'introduction',
  data () {
    return {
      msg: 'Welcome to Hypothesize'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
