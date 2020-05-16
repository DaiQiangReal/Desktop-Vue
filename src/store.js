import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        application: {
            TodoList: {
                running: false,
                shown: false,
                zIndex: 0
            }
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
        },
        hideWindow(state, applicationName) {
            state.application[applicationName].shown = false;
            state.application[applicationName].zIndex = -1;
        },
        closeApplication(state, applicationName) {
            state.application[applicationName].running = false;
            state.application[applicationName].zIndex = -1;
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
        }
    }
})

export default store;