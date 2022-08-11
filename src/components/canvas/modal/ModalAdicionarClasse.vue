<template>

  <Modal ref="modal" id="modalAdicionarClasse">

    <template v-slot:title>
      Adicionar Classe
    </template>

    <template v-slot:body>

      <div class="row">

        <div class="mb-7 col-6">
          <label>Nome da Classe</label>
          <input type="text" class="form-control" v-model="nome" placeholder="Nome da Classe" />
        </div>

        <div class="mb-7 col-6">
          <label>Nome da Tabela</label>
          <input type="text" class="form-control" v-model="tabela" placeholder="Nome da Tabela" />
        </div>

        <div class="col-12">
          <label>Anotações</label>
          <textarea class="form-control" placeholder="Anotações" v-model="anotacoes" style="height: 100px"></textarea>
        </div>

      </div>

    </template>


    <template v-slot:footer>

<!--      <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancelar</button>-->
      <button type="button" class="btn btn-primary" @click="createModel" style="background-color: rgb(3,83,171);">Adicionar</button>

    </template>


  </Modal>

</template>


<script>
import Classe from "@/models/Classe";
import Atributo from "@/models/Atributo";

import Modal from "../../global/Modal.vue";


export default {
  name: 'ModalAdicionarClasse',
  components: { Modal },
  props: [ 'diagrama', ],
  data(){
    return {
      type: 'class',
      nome: '',
      tabela: '',
      anotacoes: '',
    }
  },
  watch: {
    nome(val){
      val = this.$functions.string_validation.normalizeString( val )
      val = this.$functions.string_validation.capitalize( val )
      val = this.$functions.string_validation.removeSpace( val )

      this.nome = val
      this.tabela = this.$functions.string_validation.capitalizeLetterToUnderline( val ).toLowerCase()
    },
    tabela(val){
      val = this.$functions.string_validation.normalizeStringExceptUnderscore( val )
      val = val.toLowerCase();
      val = this.$functions.string_validation.changeSpaceTo(val, '_')

      this.tabela = val
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
    createModel(){
      if(!this.nome || !this.tabela){
        this.$functions.alerts.notification(false, 'Preencha os campos corretamente antes de continuar!')
        return
      }

      let attributeId = new Atributo('id', 'integer', 'pk')
      attributeId.pk = true;

      let novaClasse = new Classe(this.nome, this.nome, this.tabela, "-891.238576250846 -255.95561447143552", [attributeId], [], []);
      novaClasse.key = 1
      novaClasse.addTimeStamp();

      //this.diagrama.models.push(novaClasse)
      this.diagrama.addClasse(novaClasse)

      this.diagrama.updateDiagram()
      this.nome = this.tabela = this.anotacoes = ''

      this.close()

      console.log(this.diagrama.models)
      console.log(this.diagrama.model)

    },
  }
}
</script>



