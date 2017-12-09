import axios from "axios"
import fetchJsonp from "fetch-jsonp"

export default {
    // 初始状态
    state:{
        cartData:[1,2,3,4]
    },
    // 负责修改数据
    getters:{
        total(state){
            let price = 0;
            let num = 0;
            state.cartData.forEach(ele=>{
                num+=ele.goods_num*1
                price+=ele.goods_num*(ele.goods_price || 99)
            });
            return {num,price}
        },
        cartData:state=>state.cartData
    },
    mutations:{
        CART_DATA(state,{cartData}){
            // cartData 是action传递的数据
            state.cartData = cartData
        }
    },
    actions:{
        getCartData(){
            // op:类型
            console.log("a")
            // https://www.taokubuy.com/mobile/index.php?act=member_cart&op=cart_list
            fetch("taokubuy/mobile/index.php?act=member_cart&op=cart_list",{
                method:"post",
                headers:{
                  "Content-Type":"application/x-www-form-urlencoded",
                },
                body:"key=0dfc2294c73e2a8e28faafba10df27bc",
                credentials: "include"
              }).then(res=>res.json()).then(data=>{
                ///console.log(data.datas.cart_list[0].goods) 购物车的商品数据
                //提交给mutation
                context.commit("CART_DATA",{cartData:data.datas.cart_list[0].goods})
              })
        }
    }
}