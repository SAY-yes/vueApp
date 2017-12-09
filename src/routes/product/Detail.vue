<template>
  <div class="DetailPage">
    <v-header tit="详情页">
      <router-link to="/cart" slot="right">购物车</router-link>
    </v-header>
    <v-content>
       <!--<div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../../assets/1.jpg"></div>
            <div class="swiper-slide"><img src="../../assets/2.jpg"></div>
            <div class="swiper-slide"><img src="../../assets/3.jpg"></div>
        </div>
         
        <div class="swiper-pagination"></div>
      </div>-->
    </v-content>
  </div>
</template>

<script>
export default {
  name: 'DetailPage',
 
  methods:{
    // setSwiper(){
    //   var mySwiper = new Swiper ('.swiper-container', {
    //       loop: true,
    //       pagination: '.swiper-pagination',
    //   })       
    // }
  },
  mounted(){
    // this.setSwiper()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* .swiper-container {
    height: 300px;
  } 
  .swiper-slide{
    position:relative;
  }
  .swiper-slide img{
    position:absolute;
    top:15%;
    left:15%;
    max-width:100%;
   
  } */
</style>
