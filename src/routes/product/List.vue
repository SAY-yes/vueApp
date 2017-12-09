<template>
  <div class="list-page">
    <v-header tit="商品列表"></v-header>
    <v-tab-bar></v-tab-bar>
    <v-content>
      <div class="wrap">
        <ul class="class-list">
          <li  @click="changeClass(0)" :class="{active:selectedIndex==0}">所有</li>
          <li v-for="(data,index) in classData" @click="changeClass(index+1)" 
          :class="{active:selectedIndex == index+1}" :key="index">{{data.className}}</li>
        </ul>
      </div>
      <v-product-list :list-data="listData"></v-product-list>
    </v-content>
  </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
export default {
  name: 'ListPage',
  data(){
    return {
      selectedIndex:0
    }
  },
  computed:{
    // 通过计算属性在store里获取数据
    ...mapGetters(["listData","classData"])
  },
  methods:{
    // 把store的action绑定到组件的方法里面
    ...mapActions(["getListData","getClassData"]),
    changeClass(classID){
     this.getListData({classID:classID})
      this.selectedIndex = classID
    }
  },
  mounted(){
    this.getListData({classID:0}),
    this.getClassData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  

  .wrap{
      height: 40px;
      overflow: hidden;
  }
  .class-list{
      overflow: auto;
      white-space: nowrap;
      font-size: 0;
      height: 55px;
      cursor: pointer;
      background: pink;
  }
  .class-list li{
      display: inline-block;
      padding:0 10px;
      font-size: 16px;
      line-height: 40px
  }
  .active{
      color: red
  }
</style>
