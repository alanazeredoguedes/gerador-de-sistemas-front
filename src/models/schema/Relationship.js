import {v4 as uuidv4} from "uuid";

/**
 * Classe Responsavel por representar os {RELACIONAMENTOS}.
 */
class Relationship {

    constructor(from, to, typeRelationship, attributeTo = '', attributeFromField = ''   ) {
        /** Atributes Canvas */
        this.key = uuidv4();

        /**
         * Este é o lado inverso.
         * ex: Autor um-para-muitos Documento
         * Autor
         */
        this.from = from;

        /**
         * Este é o lado proprietário.
         * ex: Autor um-para-muitos Documento
         * Documento
         */
        this.to = to;

        this.attributeTo = attributeTo
        this.attributeFromField = attributeFromField
        this.typeRelationship = typeRelationship



    }



}

export default Relationship