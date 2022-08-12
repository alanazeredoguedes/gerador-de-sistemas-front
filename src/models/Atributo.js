import {v4 as uuidv4} from "uuid";

class Atributo {

    constructor(name  = '', type = '', ico = '', nullable = false ) {

        /** Atributes Canvas */
        this.key = uuidv4();
        this.type = type;
        this.ico = ico;

        /** Atributes Model */
        this.name = name;
        this.nullable = nullable
    }

    name = ''
    type = ''
    unique = false
    index = false
    hidden = false
    fillable = false
    defaultValue = ''
    length = ''
    pk = ''
    fk = ''
    precision = ''
    scale = ''
    dontShow = false
}

export default Atributo