import { createStore } from "vuex";

import defaultStore from './modules/default'
import diagramaStore from './modules/diagramas'
import userStore from  './modules/user'
import programmingLanguageStore from "./modules/programmingLanguage";
import frameworkStore from "./modules/framework";

const store = createStore({
    modules: {
        defaultStore: defaultStore,
        diagramaStore: diagramaStore,
        userStore: userStore,
        programmingLanguageStore: programmingLanguageStore,
        frameworkStore: frameworkStore,
    }
})

export default store
