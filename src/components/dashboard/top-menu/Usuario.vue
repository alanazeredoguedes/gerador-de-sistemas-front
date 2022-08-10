<template>
  <div class="d-flex align-items-center ms-1" id="kt_header_user_menu_toggle">



    <div class="btn btn-flex align-items-center bg-hover-white bg-hover-opacity-10 py-2 px-2 px-md-3" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">

      <div class="d-none d-md-flex flex-column align-items-end justify-content-center me-2 me-md-4">
        <span class="text-white fs-8 fw-bold lh-1">Nome Cliente</span>
      </div>

      <div class="symbol symbol-30px symbol-md-40px">
        <img src="@/assets/media/avatars/blank.png" alt="Avatar" />
      </div>

    </div>

    <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-semibold py-4 fs-6 w-275px" data-kt-menu="true">

      <div class="menu-item px-3">
        <div class="menu-content d-flex align-items-center px-3">
          <div class="symbol symbol-50px me-5">
            {% if client.avatar is defined and client.avatar is not empty %}
            <img src="@/assets/media/avatars/blank.png" alt="Avatar" />
            {% else %}
            <img src="@/assets/media/avatars/blank.png" alt="Avatar" />
            {% endif %}
          </div>

          <div class="d-flex flex-column">
            <div class="fw-bold d-flex align-items-center fs-5">Cliente
              <span class="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Pro</span></div>
            <a href="javascript:void(0)" class="fw-semibold text-muted text-hover-primary fs-7">cliente@gmail.com</a>
          </div>
        </div>
      </div>

      <div class="separator my-2"></div>

      <div class="menu-item px-5">
        <a href="javascript:void(0)" class="menu-link px-5">Perfil</a>
      </div>

      <div class="menu-item px-5">
        <a href="javascript:void(0)" class="menu-link px-5">
          <span class="menu-text">Projetos</span>
          <span class="menu-badge">
                    <span class="badge badge-light-danger badge-circle fw-bold fs-7">12</span>
                </span>
        </a>
      </div>

      <div class="separator my-2"></div>

      <div class="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start">


        <a href="javascript:void(0)" class="menu-link px-5">
                <span class="menu-title position-relative">Idioma
                    <span class="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">
                        Português Brasil
                        <img class="w-15px h-15px rounded-1 ms-2" src="@/assets/media/flags/brazil.svg" alt="" />
                    </span>
                </span>
        </a>

        <div class="menu-sub menu-sub-dropdown w-175px py-4">


          <div class="menu-item px-3">
            <a href="javascript:void(0)" class="menu-link d-flex px-5 active">
                        <span class="symbol symbol-20px me-4">
                            <img class="rounded-1" src="@/assets/media/flags/brazil.svg" alt="" />
                        </span>
              Português Brasil
            </a>
          </div>

          <div class="menu-item px-3">
            <a href="javascript:void(0)" class="menu-link d-flex px-5">
                        <span class="symbol symbol-20px me-4">
                            <img class="rounded-1" src="@/assets/media/flags/united-states.svg" alt="" />
                        </span>
              English
            </a>
          </div>

          <div class="menu-item px-3">
            <a href="javascript:void(0)" class="menu-link d-flex px-5">
                        <span class="symbol symbol-20px me-4">
                            <img class="rounded-1" src="@/assets/media/flags/spain.svg" alt="" />
                        </span>
              Spanish
            </a>
          </div>

        </div>

      </div>


      <div class="menu-item px-5 my-1">
        <a href="javascript:void(0)" class="menu-link px-5">Definições da Conta</a>
      </div>

      <div class="menu-item px-5">
        <a href="javascript:void(0)" class="menu-link px-5">Deslogar</a>
      </div>


    </div>


  </div>
</template>


<script>
export default {
  name: 'Usuario',
}
</script>
