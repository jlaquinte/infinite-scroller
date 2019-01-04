<!--
  --@desc View that houses the two main components of our app
  --the 'navigation' and also the 'message container'
-->

<template>
  <div id="app">
    <app-nav></app-nav>
    <message-container></message-container>
  </div>
</template>

<script>
  import appNav from './components/Nav.vue'
  import MessageContainer from './components/MessageContainer.vue'
  
  export default{
    components:{
      appNav,
      MessageContainer
    }
  }
</script>

<style lang="scss">
  #app{
    display: block;
    height: 100%;
    width: 100%;
  }
</style>
