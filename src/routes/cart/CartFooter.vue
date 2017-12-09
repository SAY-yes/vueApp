<template>
    <div class="cart-footer">
        <label for="">
            <input type="checkbox" />
            全选
        </label>
        <p>总金额：</p>
        <button>结算</button>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
    export default {
        name:"cartFooter",
        computed:{
            ...mapGetters(["total"])
        }
    }
</script>

<style scoped>
    .cart-footer{display: flex;height: 50px; line-height: 50px;position: fixed;bottom:0;width: 100%;background:#fff}
    .cart-footer p{ margin-left:30px}
    .cart-footer label{padding:0 10px}
    .cart-footer button{padding: 0 20px;text-align: center;font-size: 20px;line-height: 50px;background: #f44651;color:#fff;position: absolute;right: 0}
</style>