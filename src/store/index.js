import { createStore } from "vuex";

import defaultStore from './modules/default'
import diagramaStore from './modules/diagramas'
import userStore from  './modules/user'
const store = createStore({
    modules: {
        defaultStore: defaultStore,
        diagramaStore: diagramaStore,
        userStore: userStore,
    }
})

export default store
