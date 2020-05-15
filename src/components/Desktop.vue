<template>
  <div id="desktop">
      <DesktopContent/>
      <TaskBar/>
  </div>
</template>

<script>
import DesktopContent from "./DesktopComponents/DesktopContent"
import TaskBar from "./DesktopComponents/TaskBar"
export default {
    name:"Desktop",
    data(){
        return{
            
        }
    },
    components:{
        DesktopContent,
         TaskBar
    }
}
</script>

<style lang="less" scoped>
#desktop{
    background:no-repeat url("../assets/background.jpg");
    background-size: 100% 100% ;
  
}
</style>>

