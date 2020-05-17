<template>
    <div id="window" :style="applicationWindowSize">
        <div >TodoList</div>
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
        },
        applicationWindowSize(){
            let height=this.$store.state.application[this.applicationName].h+"vh";
            let width=this.$store.state.application[this.applicationName].w+"vw";
            
            return {height,width}
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
        },
        changeWindowSize(h,w){
            this.$stroe.commit("changeWindowSize",{applicationName:this.applicationName,h,w})
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
    box-sizing: border-box;
    div {
    }
}
</style>