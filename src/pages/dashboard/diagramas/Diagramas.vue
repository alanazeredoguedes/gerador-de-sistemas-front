<template>
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content" >

      <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
        <div id="kt_toolbar_container" class="container-fluid d-flex flex-stack flex-wrap">
          <div class="page-title d-flex flex-column me-5 py-2">
            <h1 class="d-flex flex-column text-white fw-bold fs-1 mb-0">Meus Diagramas</h1>
          </div>
        </div>
      </div>

      <div class="post d-flex flex-column-fluid" id="kt_post">
        <div id="kt_content_container" class="container-xxl" style="padding: 0">
          <div class="card card-flush">


            <div class="card-header align-items-center py-5 gap-2 gap-md-5">

              <div class="card-title">
                <div class="d-flex align-items-center position-relative my-1">
                  <span class="svg-icon svg-icon-1 position-absolute ms-4">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
														<path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor" />
													</svg>
												</span>
                  <input type="text" data-kt-ecommerce-product-filter="search" class="form-control form-control-solid w-250px ps-14" placeholder="Pesquisar Diagrama" />
                </div>
              </div>

              <div class="card-toolbar flex-row-fluid justify-content-end gap-5">
                <a href="javascript:void(0)" @click="$refs.ModalCriarDiagrama.show();" class="btn btn-primary">Novo Diagrama</a>
              </div>

            </div>


            <div class="card-body pt-0">
              <table class="table align-middle table-row-dashed fs-6 gy-5" id="kt_ecommerce_products_table">
                <thead>
                  <tr class="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                    <th class="w-10px pe-2">
                      <div class="form-check form-check-sm form-check-custom form-check-solid me-3">
                        <input class="form-check-input" type="checkbox" data-kt-check="true" data-kt-check-target="#kt_ecommerce_products_table .form-check-input" value="1" />
                      </div>
                    </th>
                    <th class="min-w-100px">Diagrama</th>
                    <th class="min-w-100px">Descricao</th>
                    <th class="text-end min-w-70px">Ações</th>
                  </tr>
                </thead>
                <tbody class="fw-semibold text-gray-600">


                  <ListDiagrama v-for="(diagrama, index) in diagramas" :key="diagrama.id" :diagrama="diagrama"/>


                </tbody>
              </table>


<!--              <div class="d-flex flex-stack flex-wrap pt-10" v-if="diagramas.length !== 0">
                <div class="fs-6 fw-semibold text-gray-300">Exibindo de 1 a 10 de 50 projetos</div>
                <ul class="pagination">
                  <li class="page-item previous">
                    <a href="javascript:void(0)" class="page-link">
                      <i class="previous"></i>
                    </a>
                  </li>
                  <li class="page-item active">
                    <a href="javascript:void(0)" class="page-link">1</a>
                  </li>
                  <li class="page-item">
                    <a href="javascript:void(0)" class="page-link">2</a>
                  </li>
                  <li class="page-item">
                    <a href="javascript:void(0)" class="page-link">3</a>
                  </li>
                  <li class="page-item">
                    <a href="javascript:void(0)" class="page-link">4</a>
                  </li>
                  <li class="page-item">
                    <a href="javascript:void(0)" class="page-link">5</a>
                  </li>
                  <li class="page-item">
                    <a href="javascript:void(0)" class="page-link">6</a>
                  </li>
                  <li class="page-item next">
                    <a href="javascript:void(0)" class="page-link">
                      <i class="next"></i>
                    </a>
                  </li>
                </ul>
              </div>-->

            </div>
          </div>
        </div>
      </div>


    </div>

  <ModalCriarDiagrama ref="ModalCriarDiagrama" />

</template>
<script>
import { mapActions, mapState } from 'vuex'
import ModalCriarDiagrama from "../../../components/dashboard/modal/ModalCriarDiagrama.vue";
import $ from "jquery";
import ListDiagrama from "../../../components/dashboard/diagramas/ListDiagrama.vue";

export default {
  components: { ListDiagrama, ModalCriarDiagrama },
  data() {
    return {
      data: null
    }
  },
  mounted() {
    this.updateListDiagramas()
  },
  updated() {
    //this.updateListDiagramas()
  },
  computed:{
    ...mapState({
      diagramas: state => state.diagramaStore.items.diagramas
    })

  },
  methods: {
    ...mapActions([
        'getDiagramas',
    ]),
    updateListDiagramas(){
      this.getDiagramas()
          .catch( (response)=>{
            console.log(response)
            if(response.response.status !== 403)
              this.$functions.alerts.notification('error', "Erro", 'Falha ao carregar Diagramas')

          })
    }

  }

}
</script>