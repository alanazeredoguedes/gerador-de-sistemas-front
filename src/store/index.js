import { createStore } from "vuex";

import defaultStore from './modules/default'
import diagramaStore from './modules/diagramas'

const store = createStore({
    modules: {
        defaultStore: defaultStore,
        diagramaStore: diagramaStore,
    }
})

export default store
