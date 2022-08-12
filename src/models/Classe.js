import {v4 as uuidv4} from "uuid";
import Atributo from "./Atributo";

class Classe {

    constructor(name, collection, table, location, attributes = [], methods = [], relationships = []) {

        /** Atributes Canvas */
        this.key = uuidv4();
        this.location = location;

        /** Atributes Model */
        this.name = name
        this.collection = collection
        this.table = table

        this.attributes = attributes;
        this.methods = methods;
        this.relationship = relationships
    }

    name = '';
    collection = '';
    table = '';

    description = '';
    hasTimeStamp = false
    usesSoftDeletes = false
    attributes = []
    methods = []


    addTimeStamp(){
        let created_at = new Atributo('created_at', 'datetime','', true )
        let updated_at = new Atributo('updated_at', 'datetime','',true )

        created_at.dontShow = true;
        updated_at.dontShow = true;

        this.attributes.push(created_at)
        this.attributes.push(updated_at)
        this.hasTimeStamp = true;
    }

    removeTimeStamp = () => {

        this.attributes.map( (attribute, index) => {
            if( ( (attribute.name === 'updated_at' || attribute.name === 'created_at') && attribute.dontShow === true) ){
                this.attributes.splice(index, 1)
            }
        })

        this.hasTimeStamp = false;
    }

    removeAttributeByName = (name) => {
        this.attributes.map( (attribute, index) => {
            (attribute.name === name) ? this.attributes.splice(index, 1) : '';
        })
    }

    removeAttributeById = (id) => {
        this.attributes.map( (attribute, index) => {
            (attribute.key === id) ? this.attributes.splice(index, 1) : '';
        })
    }

    findAttributeById = (id) => {
        return this.attributes.findIndex( (attribute) => {  return attribute.key === id })
    }

    findAttributeByName = (name) => {
        return this.attributes.findIndex( (attribute) => {  return attribute.name === name })
    }

    findAttributesByName = (name) => {

        return this.attributes.reduce(function(list, attribute, index) {
            (attribute.name === name) ? list.push(index) : null

            return list;
        }, []);

    }
}

export default Classe