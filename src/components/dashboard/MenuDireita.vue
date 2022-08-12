<template>
  <div>
    <div class="scroll h-400px px-5">
      ...
    </div>
    <div id="kt_sidebar" class="sidebar px-5 py-5 py-lg-8 px-lg-11" data-kt-drawer="true" data-kt-drawer-name="sidebar"
      data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="375px"
      data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_sidebar_toggle">


      <div class="d-flex flex-stack mb-5 mb-lg-8" id="kt_sidebar_header">
        <h2 class="text-white">Começar</h2>
        <div class="ms-1">

          <button class="btn btn-icon btn-sm btn-color-white btn-active-color-primary me-n5"
            data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
            <span class="svg-icon svg-icon-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="4" fill="currentColor" />
                <rect x="11" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                <rect x="15" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                <rect x="7" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor" />
              </svg>
            </span>
          </button>

        </div>
      </div>


      <div class="mb-5 mb-lg-8 " id="kt_sidebar_body">

        <div class="hover-scroll-overlay-y h-lg-700px h-md-350px h-sm-200px  px-5" id="kt_sidebar_body">



          <div class="timeline">


            <!-- DIAGRAMAS MENU -->
            <router-link :to="{ name: 'homePage' }">
              <div class="timeline-item">

                  <div class="timeline-line w-40px"></div>

                  <div class="timeline-icon symbol symbol-circle symbol-40px">
                    <div class="symbol-label">
                      <span class="svg-icon svg-icon-2 svg-icon-white">
                        <i class="fa-solid fa-house-chimney"></i>
                      </span>
                    </div>
                  </div>

                  <div class="timeline-content mt-n1" style="margin-bottom: 3rem">
                    <div class="pe-3">

                      <div class="fs-5 text-white fw-semibold mb-2">Inicio</div>

                      <div class="d-flex align-items-center mt-1 fs-6" style="display: none">
                        <div class="text-white opacity-50 me-2 fs-7">Ir a página</div>
                        <a href="#" class="text-success fs-7 fw-bold">Inicial</a>
                      </div>

                    </div>
                  </div>

              </div>
            </router-link>






            <!-- DIAGRAMAS MENU -->
            <router-link :to="{ name: 'diagramas_list' }">
            <div class="timeline-item">

                <div class="timeline-line w-40px"></div>

                <div class="timeline-icon symbol symbol-circle symbol-40px">
                  <div class="symbol-label">
                    <span class="svg-icon svg-icon-2 svg-icon-white">
                      <i class="fa-solid fa-diagram-project"></i>
                    </span>
                  </div>
                </div>

                <div class="timeline-content mt-n1" style="margin-bottom: 3rem">
                  <div class="pe-3">

                    <div class="fs-5 text-white fw-semibold mb-2">Diagramas</div>

                    <div class="d-flex align-items-center mt-1 fs-6" style="display: none">
                      <div class="text-white opacity-50 me-2 fs-7">Acesse os seus</div>
                      <a href="#" class="text-success fs-7 fw-bold">Diagramas</a>
                    </div>

                  </div>
                </div>

            </div>
            </router-link>


            <!-- PROJETOS MENU -->
            <router-link :to="{ name: 'projetos_list' }">
              <div class="timeline-item">

                  <div class="timeline-line w-40px"></div>

                  <div class="timeline-icon symbol symbol-circle symbol-40px">
                    <div class="symbol-label">
                      <span class="svg-icon svg-icon-2 svg-icon-white">
                        <i class="fa-brands fa-buffer"></i>
                      </span>
                    </div>
                  </div>

                  <div class="timeline-content mt-n1" style="margin-bottom: 3rem">
                    <div class="pe-3">

                      <div class="fs-5 text-white fw-semibold mb-2">Projetos</div>

                      <div class="d-flex align-items-center mt-1 fs-6" style="display: none">
                        <div class="text-white opacity-50 me-2 fs-7">Acesse os seus</div>
                        <a href="#" class="text-success fs-7 fw-bold">Projetos</a>
                      </div>

                    </div>
                  </div>

              </div>
            </router-link>



            <!-- APLICAÇOES MENU -->
            <div class="timeline-item">
              <a href="javascript:void(0)">

                <div class="timeline-line w-40px"></div>

                <div class="timeline-icon symbol symbol-circle symbol-40px">
                  <div class="symbol-label">
                    <span class="svg-icon svg-icon-2 svg-icon-white">
                      <i class="fa-solid fa-server"></i>
                    </span>
                  </div>
                </div>

                <div class="timeline-content mb-20 mt-n1" style="margin-bottom: 3rem">
                  <div class="pe-3">

                    <div class="fs-5 text-white fw-semibold mb-2">App</div>

                    <div class="d-flex align-items-center mt-1 fs-6" style="display: none">
                      <div class="text-white opacity-50 me-2 fs-7">Acesse as suas</div>
                      <a href="#" class="text-success fs-7 fw-bold">Aplicações</a>
                    </div>

                  </div>
                </div>

              </a>
            </div>

            <!-- GUIA RAPIDO MENU -->
            <div class="timeline-item">
              <a href="javascript:void(0)">

                <div class="timeline-line w-40px"></div>

                <div class="timeline-icon symbol symbol-circle symbol-40px">
                  <div class="symbol-label">
                    <span class="svg-icon svg-icon-2 svg-icon-white">
                      <i class="fa-brands fa-readme"></i>
                    </span>
                  </div>
                </div>

                <div class="timeline-content mt-n1" style="margin-bottom: 3rem">
                  <div class="pe-3">

                    <div class="fs-5 text-white fw-semibold mb-2">Guia Rápido</div>

                    <div class="d-flex align-items-center mt-1 fs-6" style="display: none">
                      <div class="text-white opacity-50 me-2 fs-7">Aprenda sobre o</div>
                      <a href="#" class="text-success fs-7 fw-bold">Gerador de Sistemas</a>
                    </div>

                  </div>
                </div>

              </a>
            </div>





          </div>
        </div>
      </div>

      <div class="text-center" id="kt_sidebar_footer">
        <a href="#" class="btn btn-hover-rise text-white bg-white bg-opacity-10 text-uppercase fs-7 fw-bold">View
          Updates</a>
      </div>

    </div>

  </div>
</template>


<script>
export default {
  name: 'MenuDireita',
}
</script>
