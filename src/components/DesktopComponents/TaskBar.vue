<template>
    <div id="taskBar">
        <div id="taskBarContent" >
            <div id="application" v-for="app in applicationList" :key="app.name">
                <span :is="app.name" ref="applicationIcon" 
                @click.native="e=>applicationIconClicked(e,app.name)"/>
            </div>
        </div>
    </div>
</template>

<script>
import TodoListIcon from "../Application/TodoList/TodoListIcon";

export default {
    name: "TaskBar",
    data() {

        return {
            applicationList: [TodoListIcon,]
        };
    },
    components: {
        TodoListIcon
    },
    computed:{
        application(){return this.$store.state.application;}
    },
    methods:{
        applicationIconClicked(event,applicationIconName){
            let applicationName=applicationIconName.slice(0,-4)
            console.log(applicationName);
            if(this.application[applicationName].running){
                this.$store.commit("runApplication",applicationName);
            }else{
                this.$store.commit("showWindow",applicationName);
            }
        },
    }
    // https://blog.csdn.net/SevenSongyun/article/details/103803627
    //https://www.jb51.net/article/134664.htm
};
</script>

<style lang="less" scoped>
#taskBar {
    width: 100vw;
    height: 12vh;
    #taskBarContent {
        margin-left: auto;
        margin-right: auto;
        width: 50vw;
        min-height: 8vh;
        border-radius: 15px;
        background-color: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(25px);
        transition: 0.3s ease 0s;
        overflow: hidden;
        display: flex;
        padding: 0.5em 0.5em 0.5em 0.5em;
        &:hover {
            // background-color: rgba(255,255,255,0.5);
        }
        #application {
            margin: 0 0.5em 0 0.5em;
        }
    }
}
</style>>
