<template>
  <div id="app">
    <transition name="bounce">
       <router-view/>
    </transition>
  </div>
</template>

<script>
// 一个文件只能有一个组件
export default {
  name: 'app'
}
</script>

<style>

  *{margin:0;padding:0}
  ul,li{ list-style:none }
  a{text-decoration:none}
  body{background: #eee}

  .bounce-enter-active {  animation: bounceIn 1s}
  .bounce-leave-active { animation: bounceIn 1s reverse}
    
  @keyframes bounceIn {
    0%{ transform: scale(0) }
    40%{ transform: scale(1.2) }
    70%{ transform: scale(.8) }
    100%{ transform: scale(1) }
  }

</style>
