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
<!--                <div class="w-100 mw-150px">
                  <select class="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Status" data-kt-ecommerce-product-filter="status">
                    <option value="all">Todos</option>
                    <option value="published">Andamento</option>
                    <option value="scheduled">Concluido</option>
                    <option value="inactive">Inativo</option>
                  </select>
                </div>
                <a href="javascript:void(0)" class="btn btn-sm btn-flex btn-light btn-active-primary fw-bold" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                <span class="svg-icon svg-icon-5 svg-icon-gray-500 me-1">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z" fill="currentColor" />
											</svg>
										</span>
                  Filtros
                </a>-->
                <a href="javascript:void(0)" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal_criar_diagrama">Novo Diagrama</a>
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
<!--                    <th class="min-w-50px">Status</th>-->
                    <th class="min-w-100px">Descricao</th>
                    <th class="text-end min-w-70px">Ações</th>
                  </tr>
                </thead>
                <tbody class="fw-semibold text-gray-600">


                <tr v-for="(diagrama, index) in diagramas['hydra:member']" :key="diagrama.id">

                  <td>
                    <div class="form-check form-check-sm form-check-custom form-check-solid">
                      <input class="form-check-input" type="checkbox" value="1" />
                    </div>
                  </td>

                  <td>
                    <div class="d-flex align-items-center">
                      <div class="">
                        <router-link :to="{ name: 'diagrama', params: { id: diagrama.id } }" class="text-gray-800 text-hover-primary fs-5 fw-bold">
                          {{ diagrama.nome }}
                        </router-link>
                      </div>
                    </div>
                  </td>


<!--                  <td class="pe-0" data-order="Scheduled">
                    <div class="badge badge-light-primary">Ativo</div>
                  </td>-->

                  <td class="pe-0">
                    <span class="fw-bold">{{ diagrama.descricao }}</span>
                  </td>


                  <td class="text-end">

                    <a href="javascript:void(0)" class="btn btn-sm btn-flex btn-light btn-active-primary fw-bold">
                      <span class="svg-icon svg-icon-5 svg-icon-gray-500 me-1">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z" fill="currentColor"></path></svg>
                      </span>
                      Editar
                    </a>

                    <a href="javascript:void(0)" @click="remove(diagrama.id)" class="btn btn-sm btn-flex btn-light btn-active-danger fw-bold" style="margin-left: 10px;">
                      <span class="svg-icon svg-icon-5 svg-icon-gray-500 me-1">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z" fill="currentColor"></path></svg>
                      </span>
                      Excluir
                    </a>

                  </td>


                </tr>





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

  <ModalCriarDiagrama/>

</template>
<script>
import { mapActions, mapState } from 'vuex'
import ModalCriarDiagrama from "../../../components/dashboard/modal/ModalCriarDiagrama.vue";

export default {
  components: {ModalCriarDiagrama},
  data() {
    return {
      data: null
    }
  },

  mounted() {

    this.getDiagramas()
        .catch( response => this.$functions.alerts.notification('error', "Erro", 'Falha ao carregar Diagramas') )

  },
  computed:{

    ...mapState({
      diagramas: state => state.diagramaStore.items.diagramas
    })

  },
  methods: {
    ...mapActions([
        'getDiagramas',
        'createDiagrama',
        'removeDiagrama'
    ]),
    remove(id) {

      this.$functions.alerts.modalConfirm('Remover Diagrama', "Deseja realmente remover o diagrama ?",
          ()=>{
            this.removeDiagrama(id)
                .then( ()=>{
                  this.$functions.alerts.notification('success', "Successo", 'Succeso ao remover Diagrama!')
                  this.getDiagramas()
                })
                .catch( response => this.$functions.alerts.notification('error', "Erro", 'Falha ao remover Diagrama!') )
        }
      )


      //alert('remove: '+ id );



    },

  }

}
</script>