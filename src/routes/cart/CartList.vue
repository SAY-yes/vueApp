<template id="CartList">
  <div class="CartList">
      购物车列表
    <div class="cart-item" v-for="(data,index) in cartData" :key="data.cart_id">
      <label><input type="checkbox" /></label>
      <img class="cart-img" :src="data.goods_image_url" alt=""/>
      <div class="cart-info">
        <p>商品</p>
        <p>价格:111</p>
        <div>
          <span>数量：</span>
          <div>
          <span>-</span>
          <input type="text" v-model="data.goods_num">
          <span> + </span>
          </div>
        </div>
      </div>
      <a href="javascript:;">X</a>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  name: 'CartList',
  computed:{
      ...mapGetters(['cartData'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .CartList{
        padding-top:50px;
        padding-bottom: 50px
    }
    .cart-img { width: 60px;  height: 60px;}
    .cart-info { flex: 1; padding: 0 5px; overflow: hidden}
    .cart-item { display: flex} 
</style>
