<template>

  <div id="canvas" class="CanvasComponent cavasDiagram"></div>

  <ModalAdicionarClasse :diagrama="diagrama" v-if="diagrama" />
  <ModalAdicionarRelacionamento :diagrama="diagrama" v-if="diagrama" />

</template>

<script>

import '@/assets/plugins/goJs/go'
import '@/assets/plugins/goJs/extensions/Figures'
import '@/assets/plugins/goJs/extensions/Arrowheads'
import '@/assets/plugins/goJs/extensions/LightBoxContextMenu'

import Diagrama from "@/models/Diagrama";
import Atributo from "@/models/Atributo";
import Classe from "@/models/Classe";
import Metodo from "@/models/Metodo";
import Relacionamento from "@/models/Relacionamento";



import ModalAdicionarClasse from "./modal/ModalAdicionarClasse.vue";
import ModalAdicionarRelacionamento from "./modal/ModalAdicionarRelacionamento.vue";


export default {
  name: 'Canvas',
  components: {ModalAdicionarRelacionamento, ModalAdicionarClasse },
  props: {  },
  data(){
    return {
      diagrama: null,
    }
  },
  methods: {

    /** INICIO Criação de novos eventos para o diagrama. */
    eventClick(){
      return (e, obj) => {
        //console.log('Click')
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
    eventRightClickDiagram(){
      return (e, obj) => {
        console.log('Right Click Diagram')
      }
    },
    eventChangeLocation(){
      return (e, obj) => {
        if (e.af === 'location'){
          //console.log(e.object.location)
          //console.log(e.object)
        }
      }
    },
    /** FIM Criação de novos eventos para o diagrama. */

  },
  mounted() {

   /* let attributeId = new Atributo('id', 'integer', 'pk')
    attributeId.pk = true;

    let model1 = new Classe('Autor', 'Cursos', 'curso', "-891.238576250846 -255.95561447143552", [attributeId], [], []);
    model1.key = 1
    model1.addTimeStamp();*/

    this.diagrama = new Diagrama()
    //this.diagrama.addClasse(model1)

    /** Redefinição dos Eventos do Diagrama */
    this.diagrama.eventClick = this.eventClick();
    this.diagrama.eventDoubleClick = this.eventDoubleClick();
    this.diagrama.eventRightClick = this.eventRightClick();
    this.diagrama.eventMouseEnter = this.eventMouseEnter();
    this.diagrama.eventMouseLeave = this.eventMouseLeave();
    this.diagrama.eventChangeLocation = this.eventChangeLocation();
    this.diagrama.eventRightClickDiagram = this.eventRightClickDiagram();

    this.diagrama.initEvents()
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