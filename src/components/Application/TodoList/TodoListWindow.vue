<template>
  <div id="window">
      <div>
          <button @click="showWindow">show</button>
          <button @click="hideWindow">hide</button>
      </div>
  </div>
</template>

<script>
export default {
    name:"TodoListWindow",
    props:[],
    data(){
        return{
            windowName:"TodoListWindow"
        }
    },
    computed:{
        applicationName(){
            return this.windowName.slice(0,-6);
        }
    },
    methods:{
        showWindow(){
            this.$store.commit("showWindow",this.applicationName);
        },
        hideWindow(){
            this.$store.commit("hideWindow",this.applicationName);
        },
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