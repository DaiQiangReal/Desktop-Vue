<template>
  <div id="icon">
      <div id="iconImg">
          <img :alt="iconName" :src="icon"/>
      </div>
      <div id="iconName" v-show="nameShow" v-text="iconName"/>

      
  </div>
</template>

<script>
import icon from "./icon.png"
export default {
    name:"TodoList",
    props: ["nameShow"],
    data(){
        return{
            iconName:"todoList"
        }
    },
     beforeMount(){
        this.icon=icon
    },
    mounted(){
    
    }
}
</script>

<style lang="less" scoped>
    #iconImg{
     
        img{
            width: 3rem;
            height: 3rem;
        }
    }
</style>