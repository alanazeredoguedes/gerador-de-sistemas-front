<template>
  <div class="d-flex flex-column flex-row-fluid align-items-center">


    <div class="d-flex flex-column flex-column-fluid mb-5 mb-lg-10">

        <div class="row g-7 w-xxl-850px">

          <div class="col-xxl-5">
            <div class="card border-0 shadow-none h-lg-100" style="background-color: #A838FF">
              <div class="card-body d-flex flex-column flex-center pb-0 pt-15">
                <div class="px-10 mb-10">
                  <h3 class="text-white mb-2 fw-bolder ttext-center text-uppercase mb-6">Iniciar No Sistema</h3>

                  <div class="mb-7">

                    <div class="d-flex align-items-center mb-2">
                            <span class="svg-icon svg-icon-4 svg-icon-white opacity-75 me-3">
															<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
																<path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
															</svg>
														</span>
                      <span class="text-white opacity-75">Construa Diagramas</span>
                    </div>

                    <div class="d-flex align-items-center mb-2">
                            <span class="svg-icon svg-icon-4 svg-icon-white opacity-75 me-3">
															<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
																<path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
															</svg>
														</span>
                      <span class="text-white opacity-75">Crie Novos Projetos</span>
                    </div>

                    <div class="d-flex align-items-center mb-2">
                            <span class="svg-icon svg-icon-4 svg-icon-white opacity-75 me-3">
															<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
																<path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
															</svg>
														</span>
                      <span class="text-white opacity-75">Exporte sua Aplicação</span>
                    </div>

                  </div>

                  <a href="#" class="btn btn-hover-rise text-white bg-white bg-opacity-10 text-uppercase fs-7 fw-bold">Começar</a>
                </div>
                <img class="mw-100 h-225px mx-auto mb-lg-n18" src="@/assets/themes/10/media/illustrations/sigma-1/12.png" />
              </div>
            </div>
          </div>




          <div class="col-xxl-7">
            <div class="row g-lg-7">
              <div class="col-sm-6">
                <a href="#" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project" class="card border-0 shadow-none min-h-200px mb-7" style="background-color: #F9666E">
                  <div class="card-body d-flex flex-column flex-center text-center">
                    <img class="mw-100 h-100px mb-7 mx-auto" src="@/assets/themes/10/media/illustrations/sigma-1/4.png" />
                    <h4 class="text-white fw-bold text-uppercase">Criar Projeto</h4>
                  </div>
                </a>
              </div>
              <div class="col-sm-6">
                <a href="#" data-bs-toggle="modal" data-bs-target="#kt_modal_create_account" class="card border-0 shadow-none min-h-200px mb-7" style="background-color: #35D29A">
                  <div class="card-body d-flex flex-column flex-center text-center">
                    <img class="mw-100 h-100px mb-7 mx-auto" src="@/assets/themes/10/media/illustrations/sigma-1/5.png" />
                    <h4 class="text-white fw-bold text-uppercase">Criar Diagrama</h4>
                  </div>
                </a>
              </div>
            </div>
            <div class="card border-0 shadow-none min-h-200px" style="background-color: #D5D83D">
              <div class="card-body d-flex flex-center flex-wrap">
                <img class="mw-100 h-200px me-4 mb-5 mb-lg-0" src="@/assets/themes/10/media/illustrations/sigma-1/11.png" />
                <div class="d-flex flex-column align-items-center align-items-md-start flex-grow-1" data-theme="light">
                  <h3 class="text-gray-900 fw-bolder text-uppercase mb-5">Guia Rapido</h3>
                  <div class="text-gray-800 mb-5 text-center text-md-start">Explore our powerful
                    <br />documentation</div>
                  <a href="#" class="btn btn-hover-rise text-gray-900 text-uppercase fs-7 fw-bold" style="background-color: #EBEE51">Aprenda Mais</a>
                </div>
              </div>
            </div>
          </div>




        </div>


  </div>
</div>
</template>


<script>
import { mapActions } from 'vuex'

export default {

  data() {
    return {
      data: null
    }
  },

  mounted() {
    //this.$store.dispatch('getCursos')
    //this.getCursos()
  },
  methods: {
    /*...mapActions([
        'getCursos',
    ])*/

  }

}
</script>