<template id="header">
  <ul class="header">
      <li class="header-btn">
          <slot name="left">
              <a href=""><</a>
          </slot>
      </li>
      <li class="header-tit">
          <div>{{tit}}</div>
      </li>
      <li class="header-btn">
          <slot name="right">more</slot>
      </li>
  </ul>
</template>

<script>
export default {
  name: 'Header',
  props:["tit"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
      display: flex;line-height: 50px;text-align: center;background:#ccc
  }
  .header-btn{
      width:80px;
  }
  .header-tit{
      flex: 1
  }
</style>
