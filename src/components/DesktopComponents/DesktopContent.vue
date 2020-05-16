<template>
    <div id="desktopContent">
        <div id="application" v-for="(object,name,index) in application" :key="name">
            <span :is="name+'Window'" v-if="isShown(name)" :style="{'z-index':object.zIndex}" />
        </div>
    </div>
</template>

<script>
import TodoListWindow from "../Application/TodoList/TodoListWindow";
export default {
    name: "DesktopContent",
    data() {
        return {};
    },
    components: {
        TodoListWindow
    },
    computed: {
        application() {
            return this.$store.state.application;
        },
        // watch: {},
        
    },methods: {
            isShown(applicationName) {
                return this.application[applicationName].shown;
            },
            topWindow(applicationName) {
                this.$store.commit("showWindow", applicationName);
            }
        }
};
</script>

<style lang="less" scoped>
#desktopContent {
    width: 100vw;
    height: 88vh;
    // border: 1px solid red;
}
</style>>