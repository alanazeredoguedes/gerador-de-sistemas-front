<template>
  <div class="modal fade" id="modal_criar_aplicacao" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen modal-dialog-centered " style="padding: 2%">
      <div class="modal-content">

        <div class="modal-header header-bg">
          <h2 class="text-white">
            Nova Aplicação
            <small class="ms-2 fs-7 fw-normal text-white opacity-50">
                Crie aplicações e exporte um sistema!
            </small>
          </h2>


          <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
            <span class="svg-icon svg-icon-1">
								<i class="fa-solid fa-x text-white"></i>
							</span>
          </div>

        </div>

        <div class="modal-body py-lg-10 px-lg-10">

          <div class="stepper stepper-links d-flex flex-column" >

            <ul class="nav nav-tabs nav-line-tabs mb-5 fs-6 stepper-nav ">

              <li class="nav-item">
                <a class="nav-link active stepper-item me-5 me-md-15" data-bs-toggle="tab" href="#tab1">
                  <h3 class="stepper-title">Informações Gerais</h3>
                </a>
              </li>

              <li class="nav-item stepper-item me-5 me-md-15">
                <a class="nav-link" data-bs-toggle="tab" href="#tab2">
                  <h3 class="stepper-title">Tecnologias</h3>
                </a>
              </li>

              <li class="nav-item stepper-item me-5 me-md-15">
                <a class="nav-link" data-bs-toggle="tab" href="#tab3">
                  <h3 class="stepper-title">Diagrama</h3>
                </a>
              </li>

            </ul>


          </div>



          <div class="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid" id="kt_modal_create_app_stepper">
            <div class="mx-auto mw-600px w-100 py-10" >
              <div class="tab-content">


                <!-- ##################################################################### -->
                <div class="tab-pane fade show active" id="tab1" role="tabpanel">

                  <div class="pb-10 pb-lg-15">

                    <h2 class="fw-bold d-flex align-items-center text-dark">
                      Informações Gerais da Aplicação
                    </h2>

                    <div class="text-muted fw-semibold fs-6">Se precisar de mais informações, consulte a
                      <a href="javascript:void(0)" class="link-primary fw-bold">Página de Ajuda</a>.
                    </div>

                  </div>

                  <div class="fv-row mb-10">
                    <label class="d-flex align-items-center fs-5 fw-semibold mb-2 required">
                      Nome da Aplicação
                    </label>
                    <input type="text" v-model="application.name" class="form-control form-control-lg form-control-solid"  />
                  </div>

                  <div class="fv-row mb-10">
                    <label class="d-flex align-items-center fs-5 fw-semibold mb-2 required">
                      Breve Descrição
                    </label>
                    <textarea v-model="application.description" type="text" class="form-control form-control-lg form-control-solid" />
                  </div>


                </div>
                <!-- ##################################################################### -->


                <!-- ##################################################################### -->
                <div class="tab-pane fade" id="tab2" role="tabpanel">

                  <div class="pb-10 pb-lg-15">

                    <h2 class="fw-bold d-flex align-items-center text-dark">
                      Escolha as tecnologias a serem utilizadas
                    </h2>

                    <div class="text-muted fw-semibold fs-6">Se precisar de mais informações, consulte a
                      <a href="javascript:void(0)" class="link-primary fw-bold">Página de Ajuda</a>.
                    </div>

                  </div>


                  <div class="fv-row">

                      <label class="d-flex align-items-center fs-5 fw-semibold mb-4 required">
                         Linguagem de Programação {{ application.programmingLanguage }}
                      </label>

                      <div class="row row-cols-2 row-cols-md-4 g-5">

                        <div v-for="(pl, index) in programmingLanguage" class="col" >
                          <input type="radio" class="btn-check"
                                 :value="pl.id"
                                 v-model="application.programmingLanguage"
                                 :id="'programmingLanguage'+pl.id"

                          >
                          <!--:disabled="!pl.active"-->

                          <label :for="'programmingLanguage'+pl.id" class="btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex flex-column flex-center gap-5 h-100" >
                            <img
                                v-if="pl.logo"
                                :src="URI_BASE_API + pl.logo.url.reference"
                                alt=""
                                class="w-50px"
                            >
                            <div class="fs-5 fw-bold">{{ pl.name }}</div>
                          </label>

                        </div>

                      </div>
                  </div>


                  <div class="fv-row" style="margin-top: 50px">

                    <label class="d-flex align-items-center fs-5 fw-semibold mb-4 required">
                      Frameworks {{ application.framework }}
                    </label>

                    <div class="row row-cols-2 row-cols-md-4 g-5">

                      <div  v-for="(fm, index) in frameworksFilter" class="col" >

                        <input type="radio" class="btn-check"
                               :value="fm.id"
                               v-model="application.framework"
                               :id="'framework'+fm.id"
                               :disabled="!fm.active"
                        >

                        <label :for="'framework'+fm.id" class="btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex flex-column flex-center gap-5 h-100" >
                          <img
                              v-if="fm.logo"
                              :src="URI_BASE_API + fm.logo.url.reference"
                              alt=""
                              class="w-50px"
                          >
                          <div class="fs-5 fw-bold">{{ fm.name }}</div>
                        </label>


                      </div>

                    </div>
                  </div>






                </div>
                <!-- ##################################################################### -->



                <div class="tab-pane fade" id="tab3" role="tabpanel">
                  tab 3
                </div>
                <!-- ##################################################################### -->



                <!-- ##################################################################### -->
                <div class="tab-pane fade" id="tab4" role="tabpanel">
                  tab 4
                </div>
                <!-- ##################################################################### -->






              </div>
            </div>
          </div>


          </div>



        </div>


    </div>
  </div>
</template>


<script>
import { mapActions, mapState } from 'vuex'
import $ from 'jquery'
import { URI_BASE_API } from "../../../../configs/api";





export default {
  name: 'CriarAplicacaoModal',
  components: {  },
  data() {
    return {
      URI_BASE_API: URI_BASE_API,
      application: {
        name: '',
        description: '',
        programmingLanguage: '',
        framework: '',
        diagram: '',
      },

    }
  },
  computed:{
    ...mapState({
      programmingLanguage: state => state.programmingLanguageStore.items.programmingLanguage,
      frameworks: state => state.frameworkStore.items.framework
    }),
    /** Retorna frameworks conforme a linguagem de programacao selecionada */
    frameworksFilter() {
      if(!this.application.programmingLanguage)
        return null

      return this.frameworks.filter((value,index)=>{
        return value.programmingLanguage.id === this.application.programmingLanguage;

      })
    },


  },
  methods: {
    changeTab(tab){
      $('.d-tab').removeClass('current')
      $('.d-menu').removeClass('current')

      $(`.d-menu-${tab}`).addClass('current')
      $(`.d-tab-${tab}`).addClass('current')
    },





  },
  created() {



  }
}
</script>
<style>
.nav-link.active h3{
  color: #009ef7 !important;
}
</style>
