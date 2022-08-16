<template>
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content" >



      <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
        <div id="kt_toolbar_container" class="container-fluid d-flex flex-stack flex-wrap">
          <div class="page-title d-flex flex-column me-5 py-2">
            <h1 class="d-flex flex-column text-white fw-bold fs-1 mb-0">Meus Diagramas</h1>
          </div>


          <div class="d-flex align-items-center py-2">

            <div class="me-4">

              <a href="javascript:void(0)" class="btn btn-sm btn-flex btn-light btn-active-primary fw-bold" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                <span class="svg-icon svg-icon-5 svg-icon-gray-500 me-1">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z" fill="currentColor" />
											</svg>
										</span>
                Filtros
              </a>

            </div>

            <a href="javascript:void(0)" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app" id="kt_toolbar_primary_button">Novo</a>
          </div>
        </div>

      </div>


      <div class="post d-flex flex-column-fluid" id="kt_post">
        <div id="kt_content_container" class="container-xxl">

          <div class="d-flex flex-wrap flex-stack my-5">
            <h2 class="fs-2 fw-semibold my-2 text-white">Diagramas
              <span class="fs-6 text-gray-200 ms-1">por Status</span></h2>
            <div class="d-flex flex-wrap my-1">
              <div class="m-0">
                <select name="status" data-control="select2" data-hide-search="true" class="form-select form-select-sm form-select-solid fw-bold w-125px">
                  <option value="Active" selected="selected">Ativos</option>
                  <option value="Approved">Em Progresso</option>
                  <option value="Declined">A Fazer</option>
                  <option value="In Progress">Finalizado</option>
                </select>
              </div>
            </div>
          </div>

          <div class="row g-6 g-xl-9">



            <!-- v-for="index in 0" -->
            <div class="col-md-6 col-lg-6 col-xl-4" v-for="(diagrama, index) in diagramas['hydra:member']" :key="index">
              <router-link :to="{ name: 'diagrama' }" class="card border-hover-primary">
                <div class="card-header border-0 pt-9">
                  <div class="card-title m-0">
                    <div class="symbol symbol-50px w-50px bg-light">
                      <img src="@/assets/themes/10/media/svg/brand-logos/plurk.svg" alt="image" class="p-3" />
                    </div>
                  </div>
                  <div class="card-toolbar">
                    <span class="badge badge-light-primary fw-bold me-auto px-4 py-3">In Progressss</span>
                  </div>
                </div>
                <div class="card-body p-9">
                  <div class="fs-3 fw-bold text-dark">{{ diagrama.nome }}</div>
                  <p class="text-gray-400 fw-semibold fs-5 mt-1 mb-7">{{ diagrama.descricao }}</p>
                  <div class="d-flex flex-wrap mb-5">
                    <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                      <div class="fs-6 text-gray-800 fw-bold">May 05, 2022</div>
                      <div class="fw-semibold text-gray-400">Due Date</div>
                    </div>
                    <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                      <div class="fs-6 text-gray-800 fw-bold">$284,900.00</div>
                      <div class="fw-semibold text-gray-400">Budget</div>
                    </div>
                  </div>
                  <div class="h-4px w-100 bg-light mb-5" data-bs-toggle="tooltip" title="This project 50% completed">
                    <div class="bg-primary rounded h-4px" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div class="symbol-group symbol-hover">
                    <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Emma Smith">
                      <img alt="Pic" src="@/assets/themes/10/media/avatars/300-6.jpg" />
                    </div>
                    <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Rudy Stone">
                      <img alt="Pic" src="@/assets/themes/10/media/avatars/300-1.jpg" />
                    </div>
                    <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Susan Redwood">
                      <span class="symbol-label bg-primary text-inverse-primary fw-bold">S</span>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>






          </div>




          <div class="d-flex flex-stack flex-wrap pt-10" v-if="diagramas.length !== 0">
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
          </div>



        </div>
      </div>
    </div>

</template>


<script>
import { mapActions, mapState } from 'vuex'

export default {

  data() {
    return {
      data: null
    }
  },

  mounted() {
    //this.$store.dispatch('getDiagramas')
    //this.createDiagrama({nome: 'nome', descricao: 'descricao'})

    this.getDiagramas()
        .catch( response => this.$functions.alerts.notification(false, "Erro", 'Falha ao carregar Diagramas') )
  },
  computed:{
    ...mapState({
      diagramas: state => state.diagramaStore.items.diagramas
    })
  },
  methods: {
    ...mapActions([
        'getDiagramas',
        'createDiagrama'
    ])
  }

}
</script>