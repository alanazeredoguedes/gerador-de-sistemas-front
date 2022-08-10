<template>

  <div>
    <a>Criar Classe </a>
  </div>

  <div id="canvas" class="CanvasComponent cavasDiagram">

  </div>
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


export default {
  name: 'Canvas',
  props: {  },
  data(){
    return {
      diagram: null,
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
        //console.log('Right Click')
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

    let attributeId = new Atributo('id', 'integer', 'pk')
    let attribute1 = new Atributo('nome', 'string', '')
    attributeId.pk = true;

    let model1 = new Classe('Autor', 'Cursos', 'curso', "-891.238576250846 -255.95561447143552", [attributeId, attribute1], [], []);
    model1.key = 1
    model1.addTimeStamp();

    this.diagram = new Diagrama()
    this.diagram.addClasse(model1)

    /** Redefinição dos Eventos do Diagrama */
    this.diagram.eventClick = this.eventClick();
    this.diagram.eventDoubleClick = this.eventDoubleClick();
    this.diagram.eventRightClick = this.eventRightClick();
    this.diagram.eventMouseEnter = this.eventMouseEnter();
    this.diagram.eventMouseLeave = this.eventMouseLeave();
    this.diagram.eventChangeLocation = this.eventChangeLocation();

    this.diagram.initEvents()
  },

}
</script>


<style scoped>


.cavasDiagram {
  width: 99vw;
  height: 90vh;
  /*margin-top: 1vh;*/
  /*background-color: black;*/
  background-image: url('@/assets/images/canvas/background/background-1.png');
}


</style>