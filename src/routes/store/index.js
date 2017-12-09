import Vuex from "vuex"
import Vue from "vue"

import product from "./modules/product"
import cart from "./modules/cart"

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        product,
        cart
    }
})

export default store
