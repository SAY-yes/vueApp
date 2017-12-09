<template id="header">
  <ul class="header">
      <li class="header-btn">
          <slot name="left">
              <a href="javascript:history.go(-1);"><</a>
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
      display: flex;line-height: 50px;text-align: center;
      position: fixed;top:0;left:0;background: #fff;width:100%
  }
  .header-btn{
      width:60px;
  }
  .header-tit{
      flex: 1
  }
</style>
