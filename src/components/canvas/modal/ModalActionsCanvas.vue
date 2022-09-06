<template>
  <div class="modal fade" tabindex="-1" id="kt_modal_3" >
    <div class="modal-dialog modal-dialog-centered" style="width: 40%;">
      <div class="modal-content position-absolute bg-modal">
        <div class="modal-body" style="color: white;" >

          <br>



          <div class="pb-5">
            <div class="d-flex flex-stack border rounded px-7 py-3">
              <a href="javascript:void(0)" class="fs-5 text-white text-hover-success fw-semibold w-375px text-center">Menu De Contexto</a>
            </div>
          </div>





          <div class="pb-5">



            <div class="d-flex flex-stack border rounded p-4 mb-5">
              <div class="d-flex align-items-center me-2">
                <i class="fa-solid fa-plus w-30px me-3" style="font-size: 25px"></i>
                <div class="d-flex flex-stack">
                  <div class="d-flex flex-column me-2">
                    <a href="javascript:void(0)" class="fs-7 text-white text-hover-success fw-bold">Adicionar Classe</a>
                    <div class="text-white opacity-75">Adicione novas classes ao diagrama</div>
                  </div>
                </div>
              </div>
              <a href="javascript:void(0)" @click="adicionarClasse" class="btn btn-sm btn-hover-rise text-white bg-white bg-opacity-10">Adicionar</a>
            </div>


            <div class="d-flex flex-stack border rounded p-4 mb-5">
              <div class="d-flex align-items-center me-2">
                <i class="fa-solid fa-link w-30px me-3" style="font-size: 25px"></i>
                <div class="d-flex flex-stack">
                  <div class="d-flex flex-column me-2">
                    <a href="javascript:void(0)" class="fs-7 text-white text-hover-success fw-bold">Adicionar Relacionamento</a>
                    <div class="text-white opacity-75">Gere relacionamentos entre as classes.</div>
                  </div>
                </div>
              </div>
              <a href="javascript:void(0)" @click="adicionarRelacionamento" class="btn btn-sm btn-hover-rise text-white bg-white bg-opacity-10">Adicionar</a>
            </div>


            <div class="d-flex flex-stack border rounded p-4 mb-5">
              <div class="d-flex align-items-center me-2">
                <i class="fa-solid fa-floppy-disk w-30px me-3" style="font-size: 25px"></i>
                <div class="d-flex flex-stack">
                  <div class="d-flex flex-column me-2">
                    <a href="javascript:void(0)" class="fs-7 text-white text-hover-success fw-bold">Salvar Diagrama</a>
                    <div class="text-white opacity-75">Salve as modificações realizadas no diagrama.</div>
                  </div>
                </div>
              </div>
              <a href="javascript:void(0)" @click="salvarDiagrama" class="btn btn-sm btn-hover-rise text-white bg-white bg-opacity-10">&nbsp;&nbsp;Salvar&nbsp;&nbsp;&nbsp;</a>
            </div>


            <div class="d-flex flex-stack border rounded p-4 mb-5">
              <div class="d-flex align-items-center me-2">
                <i class="fa-solid fa-file-export w-30px me-3" style="font-size: 25px"></i>
                <div class="d-flex flex-stack">
                  <div class="d-flex flex-column me-2">
                    <a href="javascript:void(0)" class="fs-7 text-white text-hover-success fw-bold">Exporta Metadados</a>
                    <div class="text-white opacity-75">Exporte os metadados das classes e relacionamentos do diagrama.</div>
                  </div>
                </div>
              </div>
              <a href="javascript:void(0)" @click="exportarDiagrama" class="btn btn-sm btn-hover-rise text-white bg-white bg-opacity-10">Exportar</a>
            </div>


          </div>


          <br>

        </div>
      </div>
    </div>
  </div>
</template>


<script>


function exportToJsonFile(jsonData) {
  let dataStr = JSON.stringify(jsonData);
  let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

  let exportFileDefaultName = 'data.json';

  let linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.click();
}

export default {
  name: 'ModalActionsCanvas',
  props: [ 'diagrama', 'diagramaData' ],
  components: {  },
  data(){
    return {

    }
  },
  methods: {
    show(){
      $(this.$el).modal('show')
    },
    close(){
      $(this.$el).modal('hide')
    },
    adicionarClasse(){
      this.close()
      $('.btnModalAdicionarClasse')[0].click()
    },
    adicionarRelacionamento(){
      this.close()
      $('.btnModalAdicionarRelacionamento')[0].click()
    },
    salvarDiagrama(){

      console.log(this.diagramaData)

      alert('Salvar Diagrama')
    },
    exportarDiagrama(){
      //alert('Exportar Diagrama')

      //console.log(this.diagrama[0].models)
      //console.log(this.diagrama[0].linksModels)

      let exportData = {
        'class': this.diagrama[0].models,
        'relationships': this.diagrama[0].linksModels,
      }

      exportToJsonFile(exportData)

    },

  },

  mounted() {
    var element = document.querySelector('#kt_modal_3');
    dragElement(element);

    function dragElement(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (elmnt.querySelector('.modal-content')) {
        // if present, the header is where you move the DIV from:
        elmnt.querySelector('.modal-content').onmousedown = dragMouseDown;
      } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
      }

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }

      function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }


  }
}
</script>

<style>
.bg-modal{
  background-image: url('@/assets/themes/10/media/header-bg.png');
  /*background-image: url('@/assets/themes/10/media/misc/page-bg.jpg');*/
}
.actions-btn-link{
  background-color: #D5D83D;
  margin-top: 20px;
}

</style>