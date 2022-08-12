<template>

  <Modal ref="modal" id="modalAdicionarRelacionamento">

    <template v-slot:title>
      Adicionar Relacionamento
    </template>

    <template v-slot:body>

      <div class="row">


        <div class="mb-7 col-4">
          <label>Classe 1</label>
          <v-select
              placeholder="Classes"
              class="vue-select"
              :clearable="false"
              :options="listaOpcoesClassesSelect"
              v-model="classe1"
              @option:selected="changeSelect"
              :selectable="(option) => !option.label.includes('Classes')"
          ></v-select>
        </div>

        <div class="mb-7 col-4">
          <label>Tipo de Relacionamento</label>
          <v-select
              placeholder="Relacionamentos"
              class="vue-select"
              :clearable="false"
              :options="opcoesRelacionamento"
              v-model="relacionamento"
              @option:selected="changeSelect"
              :selectable="(option) => (option.code !== null)"
          ></v-select>
        </div>

        <div class="mb-7 col-4">
          <label>Classe 2</label>
          <v-select
              placeholder="Classes"
              class="vue-select"
              :clearable="false"
              :options="listaOpcoesClassesSelect"
              v-model="classe2"
              @option:selected="changeSelect"
              :selectable="(option) => !option.label.includes('Classes')"
          ></v-select>
        </div>


      </div>

    </template>


    <template v-slot:footer>

      <!--      <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancelar</button>-->
      <button type="button" class="btn btn-primary" @click="create" style="background-color: rgb(3,83,171);">Adicionar Relacionamento</button>

    </template>


  </Modal>

</template>


<script>
import Classe from "@/models/Classe";
import Atributo from "@/models/Atributo";
import Swal from 'sweetalert2'

import Modal from "../../global/Modal.vue";




export default {
  name: 'ModalAdicionarRelacionamento',

  components: { Modal },

  props: [ 'diagrama', ],

  data(){
    return {
      classe1: null,
      classe2: null,
      relacionamento: null,

      tabelaAssociativaNome: null,

      opcoesRelacionamento: [
        { label: 'Um-Para-Um', code: 'one-to-one'},
        { label: 'Um-Para-Muitos', code: 'one-to-many'},
        { label: 'Muitos-Para-Um', code: 'Many-To-One'},
        { label: 'Muitos-Para-Muitos', code: 'many-to-many'},
      ],

    }
  },

  watch: {
    nome(){
    },
    tabela(){

    },
    anotacoes(){

    },
  },

  methods:{
    show(){
      this.$refs.modal.show()
      //$(this.$el).modal('show')
    },
    close(){
      this.$refs.modal.close()
      //$(this.$el).modal('hide')
    },
    changeSelect(){

    },
    create(){
      if(!this.classe1 || !this.classe2 || !this.relacionamento ){
        this.$functions.alerts.notification(false, 'Preencha todos os campos antes de continuar!')
        return
      }




    },

  },
  computed: {
    listaOpcoesClassesSelect(){
      if(!this.diagrama.models)
        return

      let values = this.diagrama.models.map( (value,index)=>{
        return {
          label: value.name,
          code: value.key,
          obj: value,
          owner: false,
        }
      })

      console.log(values)
      return values;
    },


  }
}
</script>

<style>
.vue-select {
  border-radius: var(--vs-border-radius);
  white-space: normal;
  background-color: white;
  color: black;
  height: 90%;
}
</style>

