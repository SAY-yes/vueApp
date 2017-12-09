<template>
  <div>
    <v-header tit="用户中心"></v-header>
    <v-content>
        用户头像
        <ul>
            <li>
                <router-link to="/user/info">用户信息</router-link>
            </li>
            <li>
                <router-link to="/user/address">管理收货地址</router-link>
            </li>
            <li>
                <router-link to="/user/history">历史记录</router-link>
            </li>
        </ul>
    </v-content>
  </div>
</template>


<script>
    export default {
        name:"UserHome",
    }
</script>


<style scoped>

</style>
