<template>
    <div id="desktopContent">
        <div id="application"  v-for="(object,name,index) in application" :key="name">
            <div id="titleBar" v-if="isTitleBarShown(name)">
                <div id="title" v-text="name"/>
                <div id="controlButton">
                    <div id="minButton" @click="minButtonClicked(index)">
                        
                    </div>
                    <div id="maxButton" @click="maxButtonClicked(index)">

                    </div>
                    <div id="closeButton" @click="closeButtonClicked(index)">

                    </div>
                </div>
            </div>
            <span :is="name+'Window'" ref="applicationRefs" v-if="isWindowShown(name)" :style="{'z-index':object.zIndex}" />
        </div>
    </div>
</template>

<script>
import TodoListWindow from "../Application/TodoList/TodoListWindow";
export default {
    name: "DesktopContent",
    data() {
        return {
            
        };
    },
    components: {
        TodoListWindow
    },
    mounted(){
        
    },
    computed: {
        application() {
            return this.$store.state.application;
        },
        // watch: {},
        
    },methods: {
            isWindowShown(applicationName) {
                return this.application[applicationName].shown;
            },
            isTitleBarShown(applicationName){
                return this.application[applicationName].titleBarShown;
            },
            topWindow(applicationName) {
                this.$store.commit("showWindow", applicationName);
            },
            minButtonClicked(applicationIndex){
                 this.$refs.applicationRefs[applicationIndex].hideWindow();
            },
            maxButtonClicked(applicationIndex){
                this.$refs.applicationRefs[applicationIndex].maxWindow();
            },
            closeButtonClicked(applicationIndex){
                this.$refs.applicationRefs[applicationIndex].hideWindow();
            }
        }
};
</script>

<style lang="less" scoped>
#desktopContent {
    width: 100vw;
    height: 88vh;
    // border: 1px solid red;
    #application{
        #titleBar{
            
            height: 1.2rem;
            width: 20em;
            display: flex;
            flex-direction: row;
            background-color: wheat;
            #title{
                flex: 1;
                text-align: center;
               
            }
            #controlButton{
                display: flex;
                #minButton{
                    height: 1rem;
                    width:1rem;
                    background-color: orange;
                    border-radius: 50%;
                    margin: 0.1rem 0.2rem 0.1rem 0.2rem;

                }
                #maxButton{
                    height: 1rem;
                    width:1rem;
                    background-color: greenyellow;
                    border-radius: 50%;
                    margin: 0.1rem 0.2rem 0.1rem 0.2rem;
                }
                #closeButton{
                    height: 1rem;
                    width:1rem;
                    background-color: red;
                    border-radius: 50%;
                    margin: 0.1rem 0.2rem 0.1rem 0.2rem;
                }
            }
        }
    }
}
</style>>