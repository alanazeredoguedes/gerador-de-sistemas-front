import { createStore } from "vuex";

import defaultStore from './modules/default'

const store = createStore({
    modules: {
        defaultStore: defaultStore,
    }
})

export default store
