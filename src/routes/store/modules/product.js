import axios from "axios"
import fetchJsonp from "fetch-jsonp"

export default {
    // 初始状态
    state:{
        listData:[],
        classData:[],
        detailData:[],
    },
    getters:{
        listData:state=>state.listData,
        classData:state=>state.classData
    },
    // 负责修改数据
    mutations:{
        LIST_DATA(state,{listData}){
            // listData 是action传递的数据
            state.listData = listData
        },
        CLASS_DATA(state,{classData}){
            state.classData = classData
        },
        DETAIL_DATA(){

        }
    },
    actions:{
        getListData(context,{classID}){
            // 注意action参数的接受
            fetchJsonp("http://datainfo.duapp.com/shopdata/getGoods.php?classID="+classID).then(res=>res.json()).then(data=>{
                console.log(data)
                //console.log(context) //上下文对象，相当于store的代理
                context.commit("LIST_DATA",{listData:data})
            })
        },
        getClassData(context){
            axios.get("http://datainfo.duapp.com/shopdata/getclass.php").then(res=>{
                console.log(res.data)
                context.commit("CLASS_DATA",{classData:res.data})
            })
        },
        getDetailData(){
            fetchJsonp("http://datainfo.duapp.com/shopdata/getGoods.php").then(res=>res.json()).then(data=>{
                console.log(data)
            })
        }
    }
}