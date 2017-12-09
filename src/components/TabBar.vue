<template id="TabBar">
    <ul class="footer">
        <li v-for="(data,index) in tabData" :key="index">
            <router-link :to="data.path" >{{data.pathName}}</router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name:"TabBar",
        props:{
            tabData:{
                type:Array,
                default(){
                    return [
                        {path:"/",pathName:"首页"},
                        {path:"/list",pathName:"列表"},
                        {path:"/cart",pathName:"购物车"},
                        {path:"/user",pathName:"我的"},
                    ]
                }
            }
        }
    }
</script>

<style>
    .footer { position: fixed; bottom: 0; line-height: 50px; height: 50px; width: 100%;border-top: 1px solid #ccc;background: #fff}
    .footer li {float: left; text-align: center; width: 25%;}
    .footer li a{color:#000}
    .footer li .router-link-exact-active{color:#a00}
</style>
