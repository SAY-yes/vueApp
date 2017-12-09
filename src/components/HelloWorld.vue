<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <v-tab-bar></v-tab-bar>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'HelloWorld'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
