<template>
  <div id="desktopContent">
      <button @click="tests">test</button>
      <span v-text="test"/>
  </div>
</template>

<script>
export default {
    name:"DesktopContent",
    data(){
        return{
            
        }
    },
    computed:{
        windowShown(){
            return this.$store.windowShown;
        }
    },
    watch:{
        windowShown(newd,old){
            
        }
    },
    methods:{
        showWindow(windowName){
            this.$store.commit("showWindow",windowName);
        },
        hideWindow(windowName){
            this.$store.commit("hideWindow",windowName);
        },
        isShown(windowName){
            if(this.windowShown.indexOf(windowName)===-1)
                return false;
            return true;
        }
    }
}
</script>

<style lang="less" scoped>
#desktopContent{
    width:100vw;
    height:88vh;
    // border: 1px solid red;
 
}
</style>>