import {v4 as uuidv4} from "uuid";

/**
 * Classe Responsavel por representar os {ATRIBUTOS} da classe e {CAMPOS} da tabela.
 */
class Attribute {

    constructor(attributeName = '', fieldName ='', type ='', primaryKey = false, foreingKey=false ) {

        /** Atributes Canvas */
        this.key = uuidv4()
        this.ico = ""

        /** Atributes Model */
        this.attributeName = attributeName
        this.fieldName = fieldName
        this.type = type

        this.primaryKey = primaryKey
        this.foreingKey = foreingKey
        this.autoGenerate = false
        this.nullable = false
        this.unique = false
        this.index = false
        this.defaultValue = ""
        this.precision = 0.0
        this.scale = 0.0
        this.size = 0
        this.setIco()
    }

    setIco(){
        this.ico = ""

        if(this.nullable === true)
            this.ico = "nulo"

        if(this.foreingKey === true)
            this.ico = "fk"

        if(this.primaryKey === true)
            this.ico = "pk"
    }

}



export default Attribute