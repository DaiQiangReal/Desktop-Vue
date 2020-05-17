import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        application: {
            TodoList: {
                running: false,
                shown: false,
                max:false,
                zIndex: 0,
                titleBarShown:false,
                h:16*3,
                w:10*3,
                orginH:16*3,
                orginW:10*3,
            },
        },
    },
    mutations: {
        showWindow(state, applicationName) {
            state.application[applicationName].shown = true;
            let max = -Infinity;
            for (let name in state.application) {
                let item=state.application[name];
                if (item.zIndex > max) {
                    max = item.zIndex;
                }
            }
            state.application[applicationName].zIndex = max + 1;
            state.application[applicationName].titleBarShown=true;
        },
        hideWindow(state, applicationName) {
            state.application[applicationName].shown = false;
            state.application[applicationName].zIndex = -1;
            state.application[applicationName].titleBarShown=false;
        },
        maxWindow(state,applicationName){
            if(state.application[applicationName].max){
                state.application[applicationName].shown = true;
                let max = -Infinity;
                for (let name in state.application) {
                    let item=state.application[name];
                    if (item.zIndex > max) {
                        max = item.zIndex;
                    }
                }
                state.application[applicationName].zIndex = max + 1;
                
                state.application[applicationName].max=false;
                state.application[applicationName].h=state.application[applicationName].orginH;
                state.application[applicationName].w=state.application[applicationName].orginW;
            }else{

            
            state.application[applicationName].shown = true;
            let max = -Infinity;
            for (let name in state.application) {
                let item=state.application[name];
                if (item.zIndex > max) {
                    max = item.zIndex;
                }
            }
            state.application[applicationName].zIndex = max + 1;
            state.application[applicationName].max=true;
            state.application[applicationName].h=100;
            state.application[applicationName].w=100;
        }
        },
        showTitleBar(state,applicationName){
            state.application[applicationName].titleBarShown=true;
        },
        hideTitleBar(state,applicationName){
            state.application[applicationName].titleBarShown=false;
        },
        closeApplication(state, applicationName) {
            state.application[applicationName].running = false;
            state.application[applicationName].zIndex = -1;
            state.application[applicationName].titleBarShown=false;
        },
        runApplication(state, applicationName) {
            state.application[applicationName].running = true;
            state.application[applicationName].shown = true;
            let max = -Infinity;
            for (let name in state.application) {
                let item=state.application[name];
                if (item.zIndex > max) {
                    max = item.zIndex;
                }
            }
            state.application[applicationName].zIndex = max + 1;
            state.application[applicationName].titleBarShown=true;
        },
        changeWindowSize(state,applicationName,{h,w}){
            state.application[applicationName].h=h;
            state.application[applicationName].w=w;
        }
    }
})

export default store;