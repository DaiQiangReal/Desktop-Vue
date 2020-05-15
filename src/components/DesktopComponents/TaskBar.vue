<template>
    <div id="taskBar">
        <div id="taskBarContent" v-for="app in applicationList" :key="app.name">
                <!-- <TodoList :nameShow=false /> -->
               
        </div>
    </div>
</template>

<script>
import TodoList from "../Application/TodoList/TodoList"
export default {
    name: "TaskBar",
    data() {
        return {
            applicationList:[TodoList],
        };
    },
    components: {
        TodoList
    },
    // https://blog.csdn.net/SevenSongyun/article/details/103803627
   
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
        background-color: rgba(255,255,255,0.3);
        backdrop-filter: blur(25px);
        transition:  0.3s ease 0s;
        overflow: hidden;
        display: flex;
        padding: ;
        &:hover{
            background-color: rgba(255,255,255,0.5);
        
        }
        
    }
}
</style>>
