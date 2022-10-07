<template>
  <div class="row d-flex align-items-center" style="margin-bottom: 2px;">

    <!-- ###################################################################### -->
    <div class="col-1 ">
      <div class="row">

        <div class="col-6">
          <a class="handle" href="javascript:void(0)" style="color: white;">
            <Icon :name="'fas fa-arrows-alt'" :color="'white'" :size="'17px'"  />
          </a>
        </div>

        <div class="col-6">

          <span v-if="atributo.primaryKey === true">
            <Icon :name="'fa-solid fa-key'" :size="'13px'" :color="'#e0bc32'"
                  class="pov"
                  data-bs-toggle="popover"
                  data-bs-dismiss="true"
                  data-bs-placement="top"
                  data-bs-content="Chave Primaria"
            />
          </span>

          <span v-else-if="atributo.foreingKey === true">
            <Icon :name="'fas fa-key'" :size="'13px'" :color="'rgb(55, 232, 184)'"
                  class="pov"
                  data-bs-toggle="popover"
                  data-bs-dismiss="true"
                  data-bs-placement="top"
                  data-bs-content="Chave Estrangeira"
            />
          </span>

        </div>

      </div>
    </div>
    <!-- ###################################################################### -->



    <!-- ###################################################################### -->
    <div class="col-5 input-group-sm">
      <input type="text" class="form-control input pov" v-model="attributeName" @change="changeAttributeName" placeholder="Nome do Atributo"
             data-bs-toggle="popover"
             data-bs-placement="top"
             title="Nome do Atributo"
      >
    </div>


    <div class="col-4">
      <v-select placeholder="Tipo" :clearable="false" :options="fieldsTypes" v-model="type" @option:selected="changeType" class="vue-select pov"
                data-bs-toggle="popover"
                data-bs-placement="top"
                title="Tipo de dado"
      />
    </div>
    <!-- ###################################################################### -->



    <!-- ###################################################################### -->
    <div class="col-1">
      <div class="row d-flex align-items-center">

        <div class="col-6">
          <a href="javascript:void(0)" @click="changeNullable" v-bind:style="{ color: (atributo.nullable === true ? 'rgb(255,255,255)' : 'rgba(255,255,255,0.5)'), }" >
            <b class="pov" style="font-size: 17px;"
               data-bs-toggle="popover"
               data-bs-placement="top"
               title="Atributo pode ser nulo?"
            >N</b>
          </a>
        </div>

        <div class="col-6">
          <a href="javascript:void(0)" style="color: white;" @click="changeFieldOption">
            <i class="fa-solid fa-gear pov" style="font-size: 16px"
               data-bs-toggle="popover"
               data-bs-placement="top"
               title="Mais Opções"
            ></i>
          </a>
        </div>

      </div>

    </div>

    <div class="col-1 text-center">
      <a class="delete-field" href="javascript:void(0)" @click="removerAtributo">
        <i class="fa-solid fa-trash-can" style="color: red; font-size: 16px"></i>
      </a>
    </div>
    <!-- ###################################################################### -->





    <!-- ###################################################################### -->
    <div class="field-options" :id="'field-options-'+atributo.key" style="margin-top: 15px; display: none;" >
      <div class="row" style="color: white; ">


        <div class="col-12" style="margin-top: 10px; margin-left: 10px">
          <div class="row">

            <div v-if="!atributo.foreingKey &&( (existPkInClass && atributo.primaryKey) || !existPkInClass )" class="form-check form-check-custom form-check-solid form-check-sm text-left col-auto" >
              <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="primaryKey"
                  :id="'primaryKey' + atributo.key"
              />
<!--                           :disabled="atributo.nullable === true || atributo.foreingKey === true || existPkInClass"     -->
              <label class="form-check-label" :for="'primaryKey' + atributo.key">
                Chave Primaria
              </label>
            </div>


            <div v-if="atributo.primaryKey && !atributo.foreingKey &&( (existPkInClass && atributo.primaryKey) || !existPkInClass )" class="form-check form-check-custom form-check-solid  form-check-sm text-left col-auto">
              <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="atributo.autoGenerate"
                  :id="'autoGenerate' + atributo.key"
              />
              <label class="form-check-label" :for="'autoGenerate' + atributo.key">
                Geração Automatica
              </label>
            </div>

            <div class="form-check form-check-custom form-check-solid  form-check-sm text-left col-auto">
              <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="nullable"
                  @change="changeNullable"
                  :disabled="atributo.primaryKey === true"
                  :id="'nullable' + atributo.key"
              />
              <label class="form-check-label" :for="'nullable' + atributo.key">
                Nulo
              </label>
            </div>


            <div class="form-check form-check-custom form-check-solid  form-check-sm text-left col-auto">
              <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="atributo.unique"
                  :id="'unique' + atributo.key"
              />
              <label class="form-check-label" :for="'unique' + atributo.key">
                Unico
              </label>
            </div>

            <div class="form-check form-check-custom form-check-solid  form-check-sm text-left col-auto">
              <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="atributo.index"
                  :id="'index' + atributo.key"
              />
              <label class="form-check-label" :for="'index' + atributo.key">
                Index
              </label>
            </div>


            <!--            <div class="form-check form-check-custom form-check-solid form-check-sm text-left col-auto" >
                          <input
                              class="form-check-input"
                              type="checkbox"
                              v-model="foreingKey"
                              :disabled="true"
                              :id="'foreingKey' + atributo.key"
                          />
                          <label class="form-check-label" :for="'foreingKey' + atributo.key">
                            Chave Estrangeira
                          </label>
                        </div>-->

          </div>
        </div>








            <div class="col-6 input-group-sm" style="margin-top: 10px">
              <label class="form-check-label">Nome do Campo</label>
              <input type="text" class="form-control input" v-model="fieldName" @change="" placeholder="Nome do Campo">
            </div>

            <div v-if="!atributo.foreingKey" class="col-6 input-group-sm" style="margin-top: 10px">
              <label class="form-check-label">Valor Padrão</label>
              <input type="text" class="form-control input" v-model="atributo.defaultValue" placeholder="Valor Padrão">
            </div>


        <div class="col-12 input-group-sm" style="margin-top: 10px;" v-bind:style="showSize">
          <label class="form-check-label">Tamanho</label>
          <input type="number" min="0"  class="form-control input"
                 v-model="atributo.size"
                 @change=""
                 placeholder="Tamanho">
        </div>

        <div class="col-6 input-group-sm" style="margin-top: 10px;" v-bind:style="showPrecisionScale">
          <label class="form-check-label">Precisão</label>
          <input type="number" min="0"  class="form-control input "
                 v-model="atributo.precision"
                 @change=""
                 placeholder="Precisão">
        </div>

        <div class="col-6 input-group-sm" style="margin-top: 10px;" v-bind:style="showPrecisionScale">
          <label class="form-check-label">Scala</label>
          <input type="number" min="0" class="form-control input"
                 v-model="atributo.scale"
                 @change=""
                 placeholder="Scala">
        </div>

      </div>
      <hr style="margin-top: 20px;">
    </div>
    <!-- ###################################################################### -->




  </div>
</template>

<script>

import $ from "jquery";
import '../../../../assets/plugins/custom/jquery-ui/jquery-ui'
import Icon from "../../../global/icons/Icon.vue";



export default {
  name: 'Atributo',
  components: {Icon  },
  props: [ 'index', 'atributo', 'classEdit', 'diagrama', ],
  data(){
    return {
      attributeName: this.atributo.attributeName,
      fieldName: this.atributo.fieldName,
      type: this.atributo.type,
      primaryKey: this.atributo.primaryKey,
      foreingKey: this.atributo.foreingKey,
      nullable: this.atributo.nullable,
      unique: this.atributo.unique,
      indexx: this.atributo.indexx,
      defaultValue: this.atributo.defaultValue,
      precision: this.atributo.precision,
      scale: this.atributo.scale,
      size: this.atributo.size,

      fieldsTypes: [
        'smallint',
        'integer',
        'bigint',
        'decimal',
        'float',
        'string',
        'ascii_string',
        'text',
        'guid',
        'binary',
        'blob',
        'boolean',
        'date',
        'datetime',
        'datetimetz',
        'time',
        'array',
        'simple_array',
        'json',
        'object',
      ],
    }
  },
  watch: {
    attributeName(val){
      val = this.$functions.string_validation.normalizeString( val )
      val = this.$functions.string_validation.capitalize( val )
      val = this.$functions.string_validation.removeSpace( val )
      //
      this.attributeName = val.charAt(0).toLowerCase() + val.slice(1);
      this.atributo.attributeName = this.attributeName
      this.atributo.fieldName = this.$functions.string_validation.capitalizeLetterToUnderline( val ).toLowerCase()

      this.diagrama[0].updateDiagram()
    },
    fieldName(val){
      /*val = this.$functions.string_validation.normalizeString( val )
      val = this.$functions.string_validation.capitalize( val )
      val = this.$functions.string_validation.removeSpace( val )
      val = this.$functions.string_validation.capitalizeLetterToUnderline( val ).toLowerCase()
*/
      this.fieldName = val
      this.atributo.fieldName = this.fieldName
      this.diagrama[0].updateDiagram();
    },
    type(){},
    primaryKey(val){
      this.primaryKey = val
      this.atributo.primaryKey = this.primaryKey
      this.setIco()

      if(this.primaryKey){
        this.atributo.nullable = false
      }else{
        this.atributo.autoGenerate = false
      }

      this.diagrama[0].updateDiagram();
    },
    foreingKey(val){
      this.foreingKey = val
      this.atributo.foreingKey = this.foreingKey
      this.setIco()
      this.diagrama[0].updateDiagram();
    },
    nullable(val){},
    unique(){},
    indexx(){},
    defaultValue(){},
    precision(){},
    scale(){},
    size(){},
  },
  type(val){
    this.type = val
    this.atributo.type = this.type
    this.diagrama[0].updateDiagram()
  },
  methods: {
    updateDiagramAtrribute(){
      this.diagrama[0].updateDiagram()
      //this.diagrama.diagram.model.updateTargetBindings(this.classEdit.attributes[this.index]);
    },
    changeAttributeName(){
      //this.diagrama.updateDiagram()
    },
    setIco(){
      this.atributo.ico = ""

      if(this.atributo.nullable === true)
        this.atributo.ico = "nulo"

      if(this.atributo.foreingKey === true)
        this.atributo.ico = "fk"

      if(this.atributo.primaryKey === true)
        this.atributo.ico = "pk"

    },
    changeType(){
      this.atributo.type = this.type
      this.diagrama[0].updateDiagram()
    },
    changeNullable(){
      if(this.atributo.primaryKey === true){
        this.atributo.nullable = false;
        this.$functions.alerts.notification('error','Erro',`A <b>Chave Primaria</b> não pode ser nulo!`)
      }else{
        this.atributo.nullable = !this.nullable;
        this.diagrama[0].updateDiagram()
      }
    },
    changeForeingKey(){
      //this.atributo.foreingKey
      this.atributo.setIco()
      this.diagrama[0].updateDiagram()
    },
    removerAtributo(){

      if(this.atributo.foreingKey){
        this.$functions.alerts.modalConfirm('Remover Chave Estrangeira?',
            `O <b>relacionamento</b> vinculado será removido!`,
            ()=>{
              this.diagrama[0].removeAttribute(this.classEdit, this.atributo)
              this.$functions.alerts.notification('success','Sucesso',`<b>Atributo</b> removido com sucesso!`)
            })
      }else{
        this.diagrama[0].removeAttribute(this.classEdit, this.atributo)
        this.$functions.alerts.notification('success','Sucesso',`<b>Atributo</b> removido com sucesso!`)
      }

    },
    changeFieldOption(){

      let actualFieldOption = $(`#field-options-` + this.atributo.key);

      if(actualFieldOption.css('display') === 'none'){
        $('.field-options').css('display', 'none')
        actualFieldOption.css('display', 'block')
      }else{
        $('.field-options').css('display', 'none')
        //actualFieldOption.css('display', 'block')
      }
    },

  },
  computed: {
    showSize: function () {
      let typesShow = ['ascii_string', 'string'];
      return {
        display: ( typesShow.includes(this.atributo.type) ? 'block' : 'none' )
      }
    },
    showPrecisionScale: function () {
      let typesShow = ['decimal', 'double'];
      return {
        display: ( typesShow.includes(this.atributo.type) ? 'block' : 'none' )
      }
    },
    existPkInClass(){
      let atrributes = this.classEdit.attributes;

      for(let i=0; i < atrributes.length; i++){
        if(i !== this.index){ }
          if(atrributes[i].primaryKey === true){
            return true;
          }
      }

    },

  },
  updated() {
    this.attributeName = this.atributo.attributeName
    this.fieldName = this.atributo.fieldName
    this.type = this.atributo.type
    this.primaryKey = this.atributo.primaryKey
    this.foreingKey = this.atributo.foreingKey
    this.nullable = this.atributo.nullable
    this.unique = this.atributo.unique
    this.indexx = this.atributo.index
    this.defaultValue = this.atributo.defaultValue
    this.precision = this.atributo.precision
    this.scale = this.atributo.scale
    this.size = this.atributo.size

    //console.log(this.atributo)
    //console.log(this.atributo.primaryKey)


    /** Inicializa o Jquery Sortable */
    $(".sortable").sortable({
      scroll: false,
      handle: ".handle",
      opacity: 0.7,
      scrollSensitivity: 2,
      scrollSpeed: 5,
    });

    $(function () {
      $('.pov').popover({
        container: 'body',
        trigger: 'hover'
      })
    })

  }
}
</script>

<style scoped>
input[type="checkbox"]:disabled{
  background: rgba(255, 255, 255, 0.66);
}
.input{
  height: 40px;
}
.vue-select {
  border-radius: 3px;
  white-space: normal;
  background-color: white;
  color: black;
  height: 40px;
  width: 100%;
}

</style>