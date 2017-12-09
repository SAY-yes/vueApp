<template id="Content">
   <div class="Content">
        <slot></slot>
   </div>
</template>

<script>
export default {
  name: 'Content',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .Content{padding-bottom:60px;padding-top:50px}
</style>
