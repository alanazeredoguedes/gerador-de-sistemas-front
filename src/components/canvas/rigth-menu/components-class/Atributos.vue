<template>
  <div>

    <h5 style="margin-top: 10px; margin-bottom: 30px; color: white">
      <b>Atributos</b>
    </h5>



      <ul class="sortable sortable-attributes" :class="'sakey-'+classEdit.key" style="padding-left: 0;">
        <li :id="atributo.key" v-for="(atributo, index) in classEdit.attributes"  style="display: block; margin-bottom: 5px;">

          <Atributo :index="index" :atributo="atributo" :diagrama="diagrama" :classEdit="classEdit" />

        </li>
      </ul>


    <div style="padding-top: 10px;">
      <a class="text-white" @click="adicionarAtributo" href="javascript:void(0)" style="text-decoration: none;">
        <i class="fa-solid fa-circle-plus"></i>
        Adicionar Atributo
      </a>
    </div>



  </div>
</template>


<script>
import Attribute from "../../../../models/schema/Attribute";
import Atributo from "./Atributo.vue";

export default {
  name: 'Atributos',
  components: {Atributo},
  props: [
    'classEdit',
    'diagrama',
  ],
  methods: {
    adicionarAtributo(){
        let atributo = new Attribute();
        this.diagrama[0].addAttribute(this.classEdit, atributo)
    },
  }

}
</script>
