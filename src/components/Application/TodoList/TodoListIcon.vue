<template>
    <div id="icon">
        <div id="iconImg">
            <img :alt="iconName" :src="icon" />
        </div>
        <div id="iconName" v-show="nameShow" v-text="iconName" />
    </div>
</template>

<script>
import icon from "./icon.png";
export default {
    name: "TodoListIcon",
    props: ["nameShow"],
    data() {
        return {
            iconName: "todoList"
        };
    },
    beforeMount() {
        this.icon = icon;
    },
    mounted() {},
    methods:{
        clicked(){
            alert(this.$options._componentTag+" IconClicked")
            console.log(this);
        },
        
    }
};
</script>

<style lang="less" scoped>
#icon {
    width: 3rem;
    height: 3rem;
   
    #iconImg {
        
        img {
            width: 100%;
            height: 100%;
            border-radius: 5px;
            transition: 0.5s ease;
            &:hover {
                filter: brightness(120%);
            }
        }
    }
}
</style>