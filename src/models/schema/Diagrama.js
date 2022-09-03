/** @var goStruct Responsável por armazenar o modelo da estrutura que será utilizado na biblioteca. */
import associativeModel from "../remove/AssociativeModel";
import Attribute from "./Attribute";

const goStruct = go.GraphObject.make;  // for conciseness in defining templates

class Diagrama
{
    constructor(models = [], linkModels = []) {
        this.nome = ""
        this.descricao = ""

        this.models = models;
        this.linksModels = linkModels;

        this.diagram = this.getStructure();

        this.diagram.nodeTemplate = this.getNodeTemplate();
        this.diagram.linkTemplate = this.getLinkTemplate();

        this.diagram.model = this.setData(this.models, this.linksModels)

        this.eventClick = (e, obj)=>{}
        this.eventDoubleClick = (e, obj)=>{}
        this.eventRightClick = (e, obj)=>{}
        this.eventMouseEnter = (e, obj)=>{}
        this.eventMouseLeave = (e, obj)=>{}
        this.eventChangeLocation = (e, obj)=>{}

        this.eventClickDiagram  = (e, obj)=>{}
        this.eventRightClickDiagram = (e, obj)=>{}

    }

    /** Inicializa Eventos Manualmente */
    initEvents = ()=> {
        this.diagram.model.addChangedListener(this.eventChangeLocation)
    }

    callBackClick = (e, obj)=>{
        this.eventClick(e,obj);
    }

    callBackDoubleClick = (e, obj)=>{
        this.eventDoubleClick(e,obj);
    }

    callBackRightClick = (e, obj)=>{
        this.eventRightClick(e,obj);
    }

    callBackMouseEnter = (e, obj)=>{
        this.eventMouseEnter(e,obj);
    }

    callBackMouseLeave = (e, obj)=>{
    this.eventMouseLeave(e,obj);
    }

    callBackClickDiagram = (e, obj)=>{
        this.eventClickDiagram(e,obj);
    }

    callBackRightClickDiagram = (e, obj)=>{
        this.eventRightClickDiagram(e,obj);
    }

    /** Adiciona Classe */
    addClass = (classs)=>{
        this.diagram.model.addNodeData(classs)
        this.updateDiagram()
    }

    /** Remove Classe by Key */
    removeClass = (classs)=>{
        this.removeRelationshipByClass(classs)
        this.diagram.model.removeNodeData(this.diagram.model.findNodeDataForKey(classs.key))
        this.updateDiagram()
    }

    /** Adiciona novo atributo */
    addAttribute = (classs, attribute)=>{
        this.diagram.model.addArrayItem(classs.attributes, attribute)
        this.updateDiagram();
    }

    /** Remove atributo */
    removeAttribute = (classs, attribute)=>{
        /** Se for Chave estrangeira remove o link do relationamento */
        if(attribute.foreingKey)
            this.removeRelationshipByForeingKey(attribute)

        /** Remove Atributo */
        this.diagram.model.removeArrayItem(classs.attributes, this.findIndexAttribute(classs, attribute));
        this.updateDiagram()
    }

    /** Adiciona Relacionamento */
    addRelationship = (relationship)=>{
        this.diagram.model.addLinkData(relationship)
        this.updateDiagram()
    }

    /** Remove Relacionamento */
    removeRelationship = (relacionamento)=>{
        this.diagram.model.removeLinkData(relacionamento)
        this.updateDiagram()
    }

    /** Remove Relacionamento pela chave estrangeira */
    removeRelationshipByForeingKey(attribute){
        this.diagram.model.linkDataArray.forEach((value, index)=>{
            if(value.attributeTo === attribute.key)
                this.removeRelationship(value)
        })
    };

    /** Remove todos os atributos da classe */
    removeRelationshipByClass = (classe)=>{

        classe = this.diagram.model.findNodeDataForKey(classe.key)

        let linksRemove = [];

        this.diagram.model.linkDataArray.forEach((link, index)=>{
            if(link.from === classe.key){
                linksRemove.push(link)
                this.diagram.model.nodeDataArray.forEach((model, index)=>{
                    if(model.key === link.to){
                        this.diagram.model.removeArrayItem(model.attributes, this.findIndexAttribute(model, this.findAttributeBy(link.attributeTo)))
                    }
                })
            }
        })

        linksRemove.forEach((link)=>{
            //console.log(link)
            this.diagram.model.removeLinkData(link)
        })

    }



















    /** Localiza indice do atributo */
    findIndexAttribute = (classs, attribute)=>{
        let indexAttribute = -1;

        classs.attributes.forEach((value, index) => {
            if(value.key === attribute.key)
                indexAttribute = index
        })

        return indexAttribute
    }

    /** Localiza classe por key */
    findClassByKey = (key)=>{
        let classe = this.diagram.model.nodeDataArray.filter((value, index) => {
            if(value.key === key)
                return value
        })
        return classe[0];
    }

    /** Localiza atributo por key */
    findAttributeBy = (key)=>{
        let attribute = -1;
        this.diagram.model.nodeDataArray.forEach((model, index) => {
            model.attributes.forEach((attr, index) => {
                if(attr.key === key)
                    attribute = attr
            })
        })
        return attribute
    }

    /*/!** Remove todos os atributos da classe *!/
    removeRelationshipByClass = (classe)=>{

        this.diagram.model.linkDataArray.forEach((link, index)=>{
            if(link.from === classe.key){
                let classeAtributo = this.findClassByKey(link.to)
                let attribute = this.findAttributeBy(link.attributeTo)
                console.log(attribute)
                console.log(classeAtributo)
                this.removeAttribute(classeAtributo, attribute)
            }
        })

        classe.attributes.forEach((attribute, index)=>{
            this.removeAttribute(classe, attribute)
        })

    }

    removeRelationshipByForeingKey(attribute){
        this.diagram.model.linkDataArray.forEach((value, index)=>{
            if(value.attributeFrom === attribute.key || value.attributeTo === attribute.key)
                this.removeRelacionamento(value)
        })
    };



    /!** Localiza indice do atributo *!/
    findIndexAttribute = (classs, attribute)=>{
        let indexAttribute = -1;

        classs.attributes.forEach((value, index) => {
            if(value.key === attribute.key)
                indexAttribute = index
        })

        return indexAttribute
    }

    /!** Localiza classe por key *!/
    findClassByKey = (key)=>{

        let classe = this.diagram.model.nodeDataArray.filter((value, index) => {
            if(value.key === key)
                return value
        })
        return classe[0];
    }

    /!** Localiza classe por key *!/
    findAttributeBy = (key)=>{
        let attribute = -1;
        this.diagram.model.nodeDataArray.forEach((model, index) => {
            model.attributes.forEach((attr, index) => {
                if(attr.key === key)
                    attribute = attr
            })
        })
        return attribute
    }*/

    updateDiagram = ()=>{
        this.diagram.updateAllTargetBindings();
    }


    setData(models, linksModels){
        return goStruct(go.GraphLinksModel,
            {
                copiesArrays: false,
                copiesArrayObjects: false,
                nodeDataArray: models,
                linkDataArray: linksModels
            });
        /*return new go.GraphLinksModel(
            [],
            []);*/

    }

    arrayRemove(arr, value) {
        return arr.filter(function(ele){
            return ele.id !== value.id;
        });
    }

    convertIco(ico) {
        switch (ico) {
            //url('/img/background-1.png')
            case "pk": return "/img/pk.svg";
            case "fk": return "/img/fk.svg";
            case "nulo": return "/img/blank.png";
            default: return "/img/blank.png";
        }
    }

    convertIsTreeLink(r) {
        return r === "generalization";
    }

    /** http://localhost/outros/gojs/extensions/Arrowheads.js */
    /** LinePerson | LineBackwardPerson | LineCirclePerson | CircleLinePerson */
    /** one-to-one | one-to-many | many-to-many */
    /** one | many | one-and-only-one | zero-or-one | one-or-many | zero-or-many */
    convertFromArrow(r) {
        switch (r) {
            case "one-to-one": return "LinePerson";
            case "one-to-many": return "LinePerson";
            case "many-to-many": return "LinePerson";

            case "one": return "Line";
            case "many": return "BackwardFork";
            case "one-and-only-one": return "DoubleLine";
            case "zero-or-one": return "LineCircle";
            case "one-or-many": return "BackwardLineFork";
            case "zero-or-many": return "BackwardCircleFork";

            case "teste": return "LineCirclePerson";

            default: return "";
        }
    }

    /** http://localhost/outros/gojs/extensions/Arrowheads.js */
    /** one-to-one | one-to-many | many-to-many */
    /** one | many | one-and-only-one | zero-or-one | one-or-many | zero-or-many */
    convertToArrow(r) {
        switch (r) {

            case "one-to-one": return "LineBackwardPerson";
            case "one-to-many": return "Fork";
            case "many-to-many": return "Fork";

            case "one": return "Line";
            case "many": return "Fork";
            case "one-and-only-one": return "DoubleLine";
            case "zero-or-one": return "CircleLine";
            case "one-or-many": return "LineFork";
            case "zero-or-many": return "CircleFork";

            case "teste": return "CircleLinePerson";

            default: return "";
        }
    }
    getFkAttributes = (attributes)=>{
        //console.log(attributes)
        //console.log(this.models)

        /*return attributes.filter((attribute)=>{
            return attribute.foreingKey === true
        });*/

        return attributes;
    }



    /** ############################################################################################################################ */


    /** @var Diagram Responsável por armazenar a estrutura com as novas declarações. */
    getStructure(){
        return goStruct(go.Diagram, "canvas", {
            allowDelete: false,
            allowCopy: false,
            "undoManager.isEnabled": true,
            initialScale: 1.0,
            minScale: 0.2,
            click: this.callBackClickDiagram,
            contextClick: this.callBackRightClickDiagram,
        })
    }
    getColorClass(isAssociativeModel){
        return isAssociativeModel ? "rgb(124,12,12)" : "rgb(3,83,171)";
    }

    getNodeTemplate()
    {
        return goStruct(go.Node, "Auto",
            {
                locationSpot: go.Spot.Center,
                fromSpot: go.Spot.AllSides,
                toSpot: go.Spot.AllSides,
                shadowOffset: new go.Point(10, 10),
                shadowColor: "rgba(0,0,0,.15)",
                isShadowed: true,

                selectionAdorned: false,
                /* Borda ao clicar na classe
                selectionAdornmentTemplate: new go.Adornment("Auto", {
                    margin: 10,
                    background: "red"
                })*/

            },
            new go.Binding("location", "location", go.Point.parse).makeTwoWay(go.Point.stringify),

            goStruct(go.Shape, 'RoundedRectangle',
                {
                    //fill: "rgb(3,83,171)",
                    //stroke: "rgb(3,83,171)",
                    strokeWidth: 1,
                    doubleClick: this.callBackDoubleClick,
                    click: this.callBackClick,
                    contextClick: this.callBackRightClick,
                    // mouseEnter: this.callBackMouseEnter,
                    // mouseLeave: this.callBackMouseLeave,
                    //background: "rgb(3,83,171)",
                },
                new go.Binding("fill", "associativeModel", this.getColorClass ),
                new go.Binding("stroke", "associativeModel",this.getColorClass ),
            ),
            goStruct(go.Panel, "Table",

                {
                    stretch: go.GraphObject.Fill,
                    //defaultRowSeparatorStroke: "rgb(3,83,171)",
                    doubleClick: this.callBackDoubleClick,
                    click: this.callBackClick,
                    contextClick: this.callBackRightClick,
                    mouseEnter: this.callBackMouseEnter,
                    mouseLeave: this.callBackMouseLeave,
                    //background: "rgb(3,83,171)",
                },
                new go.Binding("background", "associativeModel",this.getColorClass ),
                new go.Binding("defaultRowSeparatorStroke", "associativeModel",this.getColorClass ),

                goStruct(go.RowColumnDefinition, {
                    row: 0,
                    //background: "rgb(3,83,171)",
                    separatorStrokeWidth: 0,
                }),
                new go.Binding("background", "associativeModel",this.getColorClass ),

                goStruct(go.RowColumnDefinition, {
                    row: 1,
                    background: 'rgb(255,255,255)',
                    separatorStrokeWidth: 0,
                }),

                goStruct(go.RowColumnDefinition, {
                    row: 2,
                    background: 'rgb(255,255,255)',
                    separatorStrokeWidth: 0,
                }),
                goStruct(go.RowColumnDefinition, {
                    row: 3,
                    background: 'rgb(255,255,255)',
                    separatorStrokeWidth: 0,
                }),

                // header
                goStruct(go.TextBlock,
                    {
                        row: 0,
                        /** TOP - RIGHT - BOTTON - LEFT   */
                        margin: new go.Margin(7, 0, 7, 10),
                        alignment: go.Spot.LeftCenter,
                        font: "bold 11pt system-ui",
                        width: 250,
                        //minWidth: 100,
                        isMultiline: false,
                        editable: false,
                        stroke: "white",
                    },
                    //new go.Binding("text", "className").makeTwoWay(),
                    new go.Binding("text", (cl)=>{
                        return ( (!cl.associativeModel) ? cl.className : cl.tableName )
                    }).makeTwoWay(),

                ),


                /***********************************
                 * Atributos
                 **********************************/
                goStruct(go.TextBlock, "Atributos",
                    {
                        row: 1,
                        //  alignment: go.Spot.LeftCenter,
                        font: "bold 12pt system-ui",
                        /** TOP - RIGHT - BOTTON - LEFT   */
                        margin: new go.Margin(5, 5, 5, 5),  // leave room for Button
                    },
                    new go.Binding("visible", "visible", function (v) { return !v; }).ofObject("ATTRIBUTES"),
                    new go.Binding("text", "associativeModel", function (v) { return !v ? 'Atributos': 'Campos' ; } ),


                ),

                goStruct(go.Panel, "Vertical",
                    {
                        name: "ATTRIBUTES"
                    },
                    new go.Binding("itemArray", "attributes"),
                    {
                        row: 1,
                        /** TOP - RIGHT - BOTTON - LEFT   */
                        margin: new go.Margin(20, 0, 10, 10),
                        stretch: go.GraphObject.Fill,
                        defaultAlignment: go.Spot.Left,
                        itemTemplate: this.getAtrributeTemplate(),
                    },
                    new go.Binding("itemArray", "attributes", this.getFkAttributes)

                ),
                goStruct("PanelExpanderButton", "ATTRIBUTES",
                    {
                        row: 1,
                        column: 1,
                        alignment: go.Spot.TopRight,
                        visible: false,
                    },
                    new go.Binding("visible", "attributes", function (arr) { return arr.length > 0; })
                ),


                /***********************************
                 * Methods
                 **********************************/
                goStruct(go.TextBlock, "Métodos",
                    {
                        row: 2,
                        //alignment: go.Spot.Center,
                        font: "bold 12pt system-ui",
                        /** TOP - RIGHT - BOTTON - LEFT   */
                        margin: new go.Margin(5, 5, 5, 5),  // leave room for Button

                    },
                    //new go.Binding("visible", "methods", function (arr) { return arr.length <= 0; })
                    new go.Binding("visible", "visible", function (v) { return !v; }).ofObject("METHODS"),
                    new go.Binding("visible", "associativeModel", function (v) { return !v; } ),

                ),

                goStruct(go.Panel, "Vertical",
                    {
                        name: "METHODS",
                    },
                    new go.Binding("itemArray", "methods"),
                    {
                        row: 2,

                        /** TOP - RIGHT - BOTTON - LEFT   */
                        margin: new go.Margin(20, 0, 10, 10),
                        stretch: go.GraphObject.Fill,
                        defaultAlignment: go.Spot.Left,
                        itemTemplate: this.getMethodTemplate(),
                        visible: false,
                    },
                    //new go.Binding("visible", "methods", function (arr) { return arr.length >= 0; })
                ),

                goStruct("PanelExpanderButton", "METHODS",
                    {
                        row: 2,
                        column: 1,
                        alignment: go.Spot.TopRight,
                        visible: true,
                    },
                    new go.Binding("visible", "associativeModel", function (v) { return !v; } ),
                ),

            ));


    }

    /** ********************************************************************* */
    /** ********************************************************************* */

    /** Template Atributos da Classe */
    getAtrributeTemplate(){
        return goStruct(go.Panel, "Table",
            // property ico/access
            goStruct(go.RowColumnDefinition, {
                row: 0,
            }),
            goStruct(go.RowColumnDefinition, {
                column: 0,
            }),
            goStruct(go.RowColumnDefinition, {
                column: 1,
            }),
            goStruct(go.RowColumnDefinition, {
                column: 2,
            }),
            goStruct(go.Picture,
                {
                    /** TOP - RIGHT - BOTTON - LEFT   */
                    margin: new go.Margin(0, 5, 5, 0),
                    column: 0,
                    width: 12,
                    height: 12,

                },
                new go.Binding("source", "ico", this.convertIco, ),
            ),


            goStruct(go.TextBlock,
                {
                    column: 1,
                    wrap: go.TextBlock.None,

                    /** TOP - RIGHT - BOTTON - LEFT   */
                    margin: new go.Margin(0, 20, 5, 0),
                    width: 120,
                    isMultiline: false,
                    editable: false,
                    //textAlign: 'leftCenter',
                    font: " 11pt system-ui",
                    stroke: '#212529'
                },
                new go.Binding("text", "attributeName").makeTwoWay(),
                new go.Binding("isUnderline", "scope", function (s) { return s[0] === 'c' })
            ),

            goStruct(go.TextBlock,
                {
                    column: 2,
                    wrap: go.TextBlock.None,

                    /** TOP - RIGHT - BOTTON - LEFT   */
                    margin: new go.Margin(0, 0, 5, 0),
                    width: 100,
                    isMultiline: false,
                    editable: false,
                    textAlign: 'right',
                    font: " 11pt system-ui",
                    stroke: '#212529'
                },
                new go.Binding("text", "type").makeTwoWay(),
            ),

        );
    }

    /** Template Metodos da Classe */
    getMethodTemplate(){
        return goStruct(go.Panel, "Table",
            goStruct(go.RowColumnDefinition, {
                row: 0,
            }),
            goStruct(go.RowColumnDefinition, {
                column: 0,
            }),
            goStruct(go.TextBlock,
                {
                    column: 0,
                    wrap: go.TextBlock.None,
                    /** TOP - RIGHT - BOTTON - LEFT   */
                    margin: new go.Margin(0, 20, 5, 0),
                    isMultiline: false,
                    width: 240,
                    editable: false,
                    //textAlign: 'leftCenter',
                    font: "bold 11pt system-ui",
                    stroke: 'rgb(3,83,171)'
                },
                new go.Binding("text", "name", function (item) { return item + '()'; }).makeTwoWay(),
            ),

        );
    }


    /** Template Linhas dos Relacionamentos */
    getLinkTemplate(){
        return goStruct(go.Link,
            {
                // routing: go.Link.Orthogonal,
                selectionAdorned: true,
                layerName: "Foreground",
                reshapable: true,
                routing: go.Link.AvoidsNodes,
                corner: 5,
                curve: go.Link.JumpOver,
            },

            new go.Binding("isLayoutPositioned", "typeRelationship", this.convertIsTreeLink),

            //.add(new go.Shape.defineArrowheadGeometry("xx", "m 0,4 l 8,0 m -8,0 l 8,-4 m -8,4 l 8,4")),
            //new go.Shape.defineArrowheadGeometry("xx", "m 0,4 l 8,0 m -8,0 l 8,-4 m -8,4 l 8,4"),

            goStruct(go.Shape,{
                stroke: "rgba(0,0,0,0.5)",
                strokeWidth: 2.5,
            }),

            goStruct(go.Shape,
                {
                    scale: 2.0,
                    fill: "white",
                    stroke: "rgba(0,0,0,0.5)",
                    segmentOffset: new go.Point(-2, 0),

                },
                new go.Binding("fromArrow", "typeRelationship", this.convertFromArrow)
            ),

            goStruct(
                go.TextBlock, // Linha Label
                {
                    //textAlign: "centter",
                    font: "bold 14px sans-serif",
                    stroke: "rgba(0,0,0,0.5)",
                    segmentIndex: 0,
                    segmentOffset: new go.Point(30, -30),
                    segmentOrientation: go.Link.OrientUpright45,

                },
                new go.Binding("text", "text")
            ),


            goStruct(go.Shape,
                {
                    scale: 2.0,
                    fill: "white",
                    stroke: "rgba(0,0,0,0.5)",
                    segmentOffset: new go.Point(2, 0),
                },
                new go.Binding("toArrow", "typeRelationship", this.convertToArrow),
            ),

            goStruct(
                go.TextBlock, // Linha To Label
                {
                    //textAlign: "center",
                    font: "bold 14px sans-serif",
                    stroke: "rgba(0,0,0,0.5)",
                    segmentIndex: -1,
                    segmentOffset: new go.Point(-30, -20),
                    segmentOrientation: go.Link.OrientUpright45,
                },
                new go.Binding("text", "toText")
            )



        );
    }

    /** ********************************************************************* */
    /** ********************************************************************* */


}

export default Diagrama