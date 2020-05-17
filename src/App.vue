<template>
  <div id="app">
    <Desktop/>
  </div>
</template>

<script>
import Desktop from "./components/Desktop"
export default {
    name:"App",
  data(){
      return{
          
      }
  },
  components: {
    Desktop
  }
}
</script>

<style>
#app {
    overflow: hidden;
}
body{
    margin:0;
}
</style>
