<template>
  <div class="Section2" style="margin-top: 20px; color: white" >



    <div class="mb-3">
      <label class="form-label"  style="color: white">Nome da Tabela</label>
      <input type="text" v-model="tableName" class="form-control input" placeholder="Nome da Tabela">
    </div>

    <div class="row" align="left" style="">


<!--      <div class="custom-control custom-checkbox col-3">
          <input class="custom-control-input" type="checkbox" id="has-timestamp" @change="changeHasTimeStamp" v-model="classEdit.hasTimeStamp">
          <label for="has-timestamp" class="custom-control-label" style="margin-left: 5px;">Has TimeStamp</label>

      </div>-->

<!--      <div class="custom-control custom-checkbox col-5 text-left">
            <input class="custom-control-input" type="checkbox" id="use-soft-delete" @change="changeUsesSoftDeletes" v-model="classEdit.usesSoftDeletes">
            <label for="use-soft-delete" class="custom-control-label" style="float: start; text-align: left;">Uses Soft-Deletes</label>
      </div>-->

      <div class="mb-3 col-12 text-right" style="float: right; margin-top: 5px;">

        <a class="nav-link active text-white " aria-current="page" href="javascript:void(0)" @click="changeDivDisplay('other-options')" style="margin-top: -8px; text-align: right;">
          <b style="margin-right: 5px;">Mais Opções</b>
          <i class="ico-other-option fas fa-chevron-down" style="color: white"></i>
        </a>

      </div>

    </div>


    <div class="other-options" style="display: none;">

      <div class="row">

<!--        <div class="col-12">
          <label class="form-label"  style="color: white">Descrição</label>
          <textarea class="form-control" v-model="description" placeholder="Descrição" style="height: 100px;">
          </textarea>
        </div>-->

        <div class="alert alert-dismissible bg-light-danger d-flex flex-center flex-column py-10 px-10 px-lg-20 mb-10">
<!--          <button type="button" class="position-absolute top-0 end-0 m-2 btn btn-icon btn-icon-danger" data-bs-dismiss="alert">
            <span class="svg-icon svg-icon-1">...</span>
          </button>-->


          <div class="text-center">
            <h1 class="fw-bold mb-5">Converter Tabela</h1>

            <div class="separator separator-dashed border-danger opacity-25 mb-5"></div>

            <div class="mb-9 text-dark">
              Realize a conversão da tabela associativa para uma <strong>Classe</strong>.<br/>
              A coversão será realizada automaticamente, os <a href="javascript:void(0)" class="fw-bold me-1">Relacionamentos</a> serão mantidos.
            </div>

            <div class="d-flex flex-center flex-wrap">
              <a href="#" class="btn btn-outline btn-outline-danger btn-active-danger m-2">Cancelar</a>
              <a href="#" class="btn btn-danger m-2">Ok, Converter</a>
            </div>
          </div>
        </div>





      </div>

      <hr>

    </div>

  </div>
</template>

<script>
import $ from "jquery";
import {string_validation} from "../../../../functions/string_validation";

export default {
  name: 'TableSection2',
  props: [
    'classEdit',
    'diagrama',
  ],
  data(){
    return {
      className: this.classEdit.className,
      tableName: this.classEdit.tableName,
      description: this.classEdit.description
    }
  },
  watch: {
    className(val) {
      val = this.$functions.string_validation.normalizeString( val )
      val = this.$functions.string_validation.capitalize( val )
      val = this.$functions.string_validation.removeSpace( val )

      this.className = val
      this.tableName = this.$functions.string_validation.capitalizeLetterToUnderline( val ).toLowerCase()


      //this.className = this.$functions.string_validation.ucwords( this.className )
      this.classEdit.className = this.className
      this.classEdit.tableName = this.tableName

      this.diagrama[0].updateDiagram()
    },
    tableName(val){
      val = this.$functions.string_validation.capitalizeLetterToUnderline( val )
      val = this.$functions.string_validation.removeSpace(val).toLowerCase()
      this.tableName = val
      this.classEdit.tableName = this.tableName
      this.diagrama[0].updateDiagram()
    },
    description(val){

      this.description = val
      this.classEdit.description = this.description
      this.diagrama[0].updateDiagram()
    }

  },
  methods: {
    changeDivDisplay(divChange){
      divChange = $('.'+divChange);

      if( divChange.css('display') === 'block'){
        $('.ico-other-option').prop('class','ico-other-option fas fa-chevron-down')
        divChange.css("display", "none");
      }else{
        $('.ico-other-option').prop('class','ico-other-option fas fa-chevron-up')
        divChange.css("display", "block");
      }
    },
  },
  updated() {
    this.className = this.classEdit.className
    this.tableName = this.classEdit.tableName
    this.description = this.classEdit.description
  }
}
</script>

<style scoped>
.input{
  height: 40px;
}
</style>