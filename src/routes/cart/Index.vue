<template id="CartPage">
  <div class="cartPage">
    <v-header tit="购物车"></v-header>
    <v-cart-list></v-cart-list>
    <v-cart-footer></v-cart-footer>
  </div>
</template>

<script>
import vCartList from "./CartList"
import vCartFooter from "./CartFooter"
export default {
  name: 'CartPage',
  components:{
    vCartList,
    vCartFooter
  },
  mounted(){
    this.$store.dispatch("getCartData")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
