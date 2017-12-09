<template id="product-list">
  <ul class="product-list">
      <li class="list-item" v-for="(data,index) in listData" :key="index">
        <router-link :to='/detail/+data.goodsID'>
          <img :src=data.goodsListImg alt="">
          <div class="item-info">
              <p v-text="data.goodsName"></p>
              <p v-text="data.price"></p>
          </div>
        </router-link>
      </li>
    </ul>
</template>

<script>
export default {
  name: 'product-list',
  props:{
      listData:{
          type:Array,
          default(){
              return []
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .list-item{
      width:49%;
      display: inline-block;
      margin-bottom: 5px;
      cursor: pointer;
      background: #fff
  }
  
  .list-item img{
      width:100%;
      height:180px;
  }
  .list-item p:first-child{
      font-size: 16px;
      height:40px;
      line-height: 20px;
      overflow: hidden
  }
  .list-item:nth-child(even){
      float:right
  }
</style>
