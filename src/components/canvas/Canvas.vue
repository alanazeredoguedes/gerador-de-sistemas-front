<template>

  <div class="d-flex flex-column flex-root">
    <div class="page d-flex flex-row flex-column-fluid">
      <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">

        <TopMenu :diagrama="diagrama" :diagramaData="diagramaData" />

      </div>
    </div>
  </div>

  <div id="canvas" class="CanvasComponent cavasDiagram"></div>

  <ModalActionsCanvas ref="ModalActionsCanvas" :diagrama="diagrama" :diagramaData="diagramaData" />

  <ModalEditClass ref="ModalEditClass" :class-edit="classEdit" :diagrama="diagrama" />

</template>

<script>

/** ************************************************************ */
/** Dependencias CANVAS GO JS */

import '../../assets/plugins/goJs/go.js'
//import '../../assets/plugins/goJs/go-debug'

import '@/assets/plugins/goJs/extensions/Figures'
import '@/assets/plugins/goJs/extensions/Arrowheads'
import '@/assets/plugins/goJs/extensions/LightBoxContextMenu'


/** ************************************************************ */
/** Componetes VUE  */

import ModalAdicionarClasse from "./modal/ModalAdicionarClasse.vue";
import ModalAdicionarRelacionamento from "./modal/ModalAdicionarRelacionamento.vue";
import TopMenu from "./top-menu/TopMenu.vue";
import ModalEditClass from "./rigth-menu/EditClass.vue";
import ModalActionsCanvas from "./modal/ModalActionsCanvas.vue";


/** ************************************************************ */
/** Imports Geral  */

import { mapActions, mapState } from 'vuex'
import Diagrama from "../../models/schema/Diagrama";
import Relationship from "../../models/schema/Relationship";
import Method from "../../models/schema/Method";
import Attribute from "../../models/schema/Attribute";
import Class from "../../models/schema/Class";










/** Vue Script */
export default {
  name: 'Canvas',
  components: {ModalActionsCanvas, ModalEditClass, TopMenu, ModalAdicionarRelacionamento, ModalAdicionarClasse },
  props: {  },
  data(){
    return {
      diagrama: null,
      classEdit: null,
    }
  },
  computed:{
    ...mapState({
      diagramaData: state => state.diagramaStore.items.diagrama
    })

  },
  methods: {
    ...mapActions([
      'getDiagrama',
    ]),
    /** INICIO Criação de novos eventos para o diagrama. */
    eventClick(){
      return (e, obj) => {

        let menuRight = this.$refs.ModalEditClass

        if(!menuRight)
          return

        if(!menuRight.isOpen()){

          menuRight.show();
          this.classEdit = obj.part.data

        }else if( menuRight.isOpen() && this.classEdit.key !== obj.part.data.key){

          menuRight.close();

          setTimeout(()=>{
            this.classEdit = obj.part.data
            menuRight.show();

          }, 400)

        }else if( menuRight.isOpen() && this.classEdit.key === obj.part.data.key){
          menuRight.close();

        }

        //this.classEdit = null

      }
    },
    eventDoubleClick(){
      return (e, obj) => {
        //console.log('Double Click')
      }
    },
    eventRightClick(){
      return (e, obj) => {
        console.log('Right Click Class')
      }
    },
    eventMouseEnter(){
      return (e, obj) => {
        //console.log('Mouse Enter')
      }
    },
    eventMouseLeave(){
      return (e, obj) => {
          //console.log('Mouse Leave')
      }
    },
    eventClickDiagram(e, obj){
      return (e, obj) => {

        let menuRight = this.$refs.ModalEditClass

        if(menuRight.isOpen()){
          menuRight.close();
        }

        //console.log('Click Diagram')
        //let menuRight = this.$refs.ModalEditClass
        //menuRight.close()
      }
    },
    eventRightClickDiagram(e, obj){
      return (e, obj) => {
        let modalActionsCanvas = this.$refs.ModalActionsCanvas
        modalActionsCanvas.show();

        //console.log('Right Click Diagram')

      }
    },
    eventChangeLocation(){
      return (e, obj) => {
        //console.log(e)

        if (e.af === 'location'){
          //console.log(e.object.location)
          //console.log(e.object)
        }
        //console.log(this.diagrama.models)
      }
    },
    /** FIM Criação de novos eventos para o diagrama. */

    initDiagramData(){

      /**
       * @type {Method}
       */
      let validarCpf = new Method('validarCpf','metodo responsavel por validar cpf')

      /**
       * @type {Attribute}
       */
      let id1 = new Attribute('id','id','integer', true);
      let nome = new Attribute('nome','nome','string', false);
      let autor = new Class('Autor', 'autor', '...',[ id1, nome ], [],'-526 -94' )

      let id2 = new Attribute('id','id','integer', true);
      let titulo = new Attribute('titulo','titulo','string', false);
      let autorFk1 = new Attribute('autor ','autor_id','string', false, true);
      let documento = new Class('Documento', 'documetos', '...',[ id2, titulo, autorFk1, ], [],'-735 223' )

      let id3 = new Attribute('id','id','integer', true);
      let rua = new Attribute('rua ','rua','string', false);
      //let autorFk = new Attribute('autor ','autor_id','string', false, true);
      let endereco = new Class('Endereco', 'endereco', '...',[ id3, rua ], [ validarCpf ],'-758 -362' )


      let id4 = new Attribute('id','id','integer', true);
       let autorFk2 = new Attribute('autor ','autor_id','string', false, true);
       let enderecoFk = new Attribute('endereco ','endereco_id','string', false, true);
       let autorEndereco = new Class('', 'autor_endereco', '...',[ autorFk2, enderecoFk ], [  ],'' )
       autorEndereco.associativeModel = true


      /**
       * @type {Relationship}
       */
          //let oneToOne = new Relationship(autor.key, endereco.key, 'one-to-one', autorFk.key)
      let oneToMany = new Relationship(autor.key, documento.key, 'one-to-many', autorFk1.key)
      let ManyToMany1 = new Relationship(autor.key, autorEndereco.key, 'one-to-many', autorFk2.key)
      let ManyToMany2 = new Relationship(endereco.key, autorEndereco.key, 'one-to-maany', enderecoFk.key)

      const diagrama = new Diagrama()
      this.diagrama = Object.freeze([diagrama])


      //console.log(this.diagrama[0])

      /** ADICIONANDO CLASSES */
      this.diagrama[0].addClass(autor)
      this.diagrama[0].addClass(documento)
      this.diagrama[0].addClass(endereco)
      this.diagrama[0].addClass(autorEndereco)



      /** ADICIONANDO RELACIONAMENTOS */
      //this.diagrama[0].addRelationship(oneToOne)
      this.diagrama[0].addRelationship(oneToMany)
      this.diagrama[0].addRelationship(ManyToMany1)
      this.diagrama[0].addRelationship(ManyToMany2)


      //console.log(this.diagrama[0].models)
      //console.log(this.diagrama[0].linksModels)
      //console.log(this.diagrama[0].diagram.model.nodeDataArray)
      //console.log(this.diagrama[0].diagram.model.linkDataArray)


    },
    initDiagrama(models, relationships){
      const diagrama = new Diagrama(models, relationships)
      this.diagrama = Object.freeze([diagrama])
    },
    initEventos(){

      /** Redefinição dos Eventos do Diagrama */
      this.diagrama[0].eventClick = this.eventClick();
      this.diagrama[0].eventDoubleClick = this.eventDoubleClick();
      this.diagrama[0].eventRightClick = this.eventRightClick();
      this.diagrama[0].eventMouseEnter = this.eventMouseEnter();
      this.diagrama[0].eventMouseLeave = this.eventMouseLeave();
      this.diagrama[0].eventChangeLocation = this.eventChangeLocation();
      this.diagrama[0].eventClickDiagram = this.eventClickDiagram();
      this.diagrama[0].eventRightClickDiagram = this.eventRightClickDiagram();
      this.diagrama[0].initEvents()
    }

  },
  mounted() {


    //this.initDiagramData()
    this.initDiagrama()
    this.initEventos()

    /** ‘ID’ do diagrama Atual */
    let diagramaId = this.$route.params.id

    this.getDiagrama(diagramaId)
        .then( response => {

          let estrutura = JSON.parse(this.diagramaData.estrutura);

          /** Adiciona as classes ao canvas */
          estrutura.class.forEach((data)=>{

            this.diagrama[0].addClass( data )
            //this.diagrama[0].diagram.model.highlight( data )

            //highlight

          })

          /** Adiciona os relacionamentos ao canvas */
          estrutura.relationships.forEach((data)=>{ this.diagrama[0].addRelationship(data) })

          this.$functions.alerts.notification('success', "Sucesso", 'Sucesso ao carregar Diagrama')

        })
        .catch( response => this.$functions.alerts.notification('error', "Erro", 'Falha ao carregar Diagramas') )


  },


}
</script>


<style scoped>


.cavasDiagram {
  width: 100vw;
  height: 92vh;
  /*margin-top: -0.2vh;*/
/*  width: 200vw;
  height: 200vh;*/
  /*;*/
  /*background-color: black;*/
  background-image: url('@/assets/images/canvas/background/background-1.png');
}


</style>