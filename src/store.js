import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        applicationList: [],
        windowShown: [],

    },
    mutations: {
        showWindow(state, windowName) {
            state.windowShown.push(windowName);
        },
        hideWindow(state, windowName) {
            for (let i in state.windowShown) {
                if (state.windowShown[i] === windowName) {
                    state.windowShown.splice(i, 1);
                }
            }
        }
    }
})

export default store;