<template>
    <div id="window">
        <div>TodoList</div>
    </div>
</template>

<script>
export default {
    name: "TodoListWindow",
    props: [],
    data() {
        return {
            windowName: "TodoListWindow"
        };
    },
    computed: {
        applicationName() {
            return this.windowName.slice(0, -6);
        }
    },
    methods: {
        showWindow() {
            this.$store.commit("showWindow", this.applicationName);
        },
        hideWindow() {
            this.$store.commit("hideWindow", this.applicationName);
        },
        maxWindow(){
            this.$store.commit("maxWindow",this.applicationName);
        },
        closeApplication(){
            this.$store.commit("closeApplication", this.applicationName);
        }
    }
};
</script>

<style lang="less" scoped>
#window {
    background-color: honeydew;
    width: 20vw;
    height: 20vh;
    border: 1px solid gray;
    div {
    }
}
</style>