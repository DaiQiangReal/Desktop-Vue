<template>
    <div id="desktopContent">
        <div id="application" v-for="(object,name,index) in application" :key="name" 
        :style="windowPosition(name)">
            <div id="titleBar" v-if="isTitleBarShown(name)" 
            :style="titleBarSize(name)"
            @mousedown="(e)=>handleWindowDrag(e,name,'down')"
            @mouseup="(e)=>handleWindowDrag(e,name,'up')"
            >
                <div id="title" v-text="name" />
                <div id="controlButton">
                    <div id="minButton" @click="minButtonClicked(index)"></div>
                    <div id="maxButton" @click="maxButtonClicked(index)"></div>
                    <div id="closeButton" @click="closeButtonClicked(index)"></div>
                </div>
            </div>
            <span
                :is="name+'Window'"
                ref="applicationRefs"
                v-if="isWindowShown(name)"
                :style="{'z-index':object.zIndex}"
            />
        </div>
    </div>
</template>

<script>
import TodoListWindow from "../Application/TodoList/TodoListWindow";
export default {
    name: "DesktopContent",
    data() {
        return {
            dragData:{
                isMouseDown:false,
                originMouseX:0,
                originMouseY:0,
                mouseMoveFunc:null
            }
        };
    },
    components: {
        TodoListWindow
    },
    mounted() {},
    computed: {
        application() {
            return this.$store.state.application;
        }
        // watch: {},
    },
    methods: {
        isWindowShown(applicationName) {
            return this.application[applicationName].shown;
        },
        isTitleBarShown(applicationName) {
            return this.application[applicationName].titleBarShown;
        },
        titleBarSize(applicationName) {
            let width =this.$store.state.application[applicationName].w + "vw";
            return { width };
        },
        windowPosition(applicationName){
            let left=this.$store.state.application[applicationName].x+"px";
            let top=this.$store.state.application[applicationName].y+"px";
            return {left,top}
           
        },
        topWindow(applicationName) {
            this.$store.commit("showWindow", applicationName);
        },
        minButtonClicked(applicationIndex) {
            this.$refs.applicationRefs[applicationIndex].hideWindow();
        },
        maxButtonClicked(applicationIndex) {
            this.$refs.applicationRefs[applicationIndex].maxWindow();
        },
        closeButtonClicked(applicationIndex) {
            this.$refs.applicationRefs[applicationIndex].hideWindow();
        },
        handleWindowDrag(event,applicationName,action){
         
           if(action==="down"){
               this.dragData.isMouseDown=true;
                this.dragData.originMouseX=event.x;
                this.dragData.originMouseY=event.y;
                this.dragData.mouseMoveFunc=()=>this.handleWindowDrag(window.event,applicationName,"move")
                addEventListener("mousemove",this.dragData.mouseMoveFunc,false);
           }
           if(action==="up"){
               this.isMouseDown=false;
               removeEventListener("mousemove",this.dragData.mouseMoveFunc,false);
           }
           if(this.dragData.isMouseDown&&action==="move"){
               let windowX=this.$store.state.application[applicationName].x;
               let windowY=this.$store.state.application[applicationName].y;
               let deltaX=event.x-this.dragData.originMouseX;
               let deltaY=event.y-this.dragData.originMouseY;
               this.dragData.originMouseX=event.x;
               this.dragData.originMouseY=event.y;
               let x=windowX+deltaX;
               let y=windowY+deltaY;
               this.$store.commit("changeWindowPosition",{applicationName,x,y})
    
           }
        }
    }
};
</script>

<style lang="less" scoped>
#desktopContent {
    width: 100vw;
    height: 88vh;
    // border: 1px solid red;
    #application {
        position: relative;
        #titleBar {
            height: 1.2rem;
            width: 20em;
            display: flex;
            flex-direction: row;
            background-color: wheat;
  
            #title {
                flex: 1;
                text-align: center;
            }
            #controlButton {
                display: flex;
                #minButton {
                    height: 1rem;
                    width: 1rem;
                    background-color: orange;
                    border-radius: 50%;
                    margin: 0.1rem 0.2rem 0.1rem 0.2rem;
                }
                #maxButton {
                    height: 1rem;
                    width: 1rem;
                    background-color: greenyellow;
                    border-radius: 50%;
                    margin: 0.1rem 0.2rem 0.1rem 0.2rem;
                }
                #closeButton {
                    height: 1rem;
                    width: 1rem;
                    background-color: red;
                    border-radius: 50%;
                    margin: 0.1rem 0.2rem 0.1rem 0.2rem;
                }
            }
        }
    }
}
</style>>