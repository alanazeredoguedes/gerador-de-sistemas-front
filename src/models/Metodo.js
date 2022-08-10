import {v4 as uuidv4} from "uuid";
import Atributo from "./Atributo";

class Metodo {

    constructor(name, description ='') {
        /** Atributes Canvas */
        this.key = uuidv4();

        /** Atributes Model */
        this.name = name
        this.description = description
    }


}

export default Metodo