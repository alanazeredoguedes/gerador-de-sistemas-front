import {v4 as uuidv4} from "uuid";

/**
 * Classe Responsavel por representar os {RELACIONAMENTOS}.
 */
class Relationship {

    constructor(from, to, typeRelationship, attributeFrom = '', attributeTo = '',   ) {
        /** Atributes Canvas */
        this.key = uuidv4();

        this.to = to;
        this.from = from;
        this.attributeTo = attributeTo
        this.attributeFrom = attributeFrom

        this.typeRelationship = typeRelationship
    }


}

export default Relationship