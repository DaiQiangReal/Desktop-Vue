<template>
  <div id="window">
      <div>
          TodoListWindow
      </div>
  </div>
</template>

<script>
export default {
    name:"TodoListWindow",
    props:[],
    data(){
        return{
            msg:"TodoListWindow"
        }
    }
}
</script>

<style lang="less" scoped>
    #window{
        div{
            width:20vw;
            height:20vh;
            border:2px solid pink;
        }
    }
</style>