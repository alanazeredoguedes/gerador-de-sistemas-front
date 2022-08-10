<template>
  <div>
    <form class="form w-100" novalidate="novalidate" id="kt_sign_in_form" data-kt-redirect-url="javascript:void(0)" action="javascript:void(0)">

      <div class="text-center mb-11">
        <h1 class="text-dark fw-bolder mb-3">Logar</h1>
        <div class="text-gray-500 fw-semibold fs-6">Entrar com:</div>
      </div>

      <div class="row g-3 mb-9">

        <div class="col-md-6">
          <a href="javascript:void(0)" class="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
            <img alt="Logo" src="@/assets/media/svg/brand-logos/google-icon.svg" class="h-15px me-3" />Entrar com Google</a>
        </div>

        <div class="col-md-6">
          <a href="javascript:void(0)" class="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
            <img alt="Logo" src="@/assets/media/svg/brand-logos/apple-black.svg" class="theme-light-show h-15px me-3" />
            <img alt="Logo" src="@/assets/media/svg/brand-logos/apple-black-dark.svg" class="theme-dark-show h-15px me-3" />Entrar com Apple</a>
        </div>

      </div>

      <div class="separator separator-content my-14">
        <span class="w-125px text-gray-500 fw-semibold fs-7">Entrar com Email</span>
      </div>

      <div class="fv-plugins-message-container invalid-feedback" style="margin-bottom: 10px;">
          error mensage
      </div>

      <div class="fv-row mb-8">
        <input type="email" id="client_login_email" name="client_login[email]" required="required" placeholder="Email" class="form-control bg-transparent">
        <div class="fv-plugins-message-container invalid-feedback"></div>
      </div>

      <div class="fv-row mb-3">
        <input type="password" id="client_login_password" name="client_login[password]" required="required" placeholder="Senha" class="form-control bg-transparent">
        <div class="fv-plugins-message-container invalid-feedback"></div>
      </div>

      <div class="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
        <div></div>
        <RouterLink :to="{ name: 'resetPassword', params: {} }">Esqueceu a Senha ?</RouterLink>
      </div>


      <div class="d-grid mb-10">
        <button type="button" class="btn btn-primary form_send">
          <span class="indicator-label">Logar</span>
        </button>
      </div>

      <div class="text-gray-500 text-center fw-semibold fs-6">Ainda não é membro?
        <RouterLink :to="{ name: 'register', params: {} }">Inscrever-se</RouterLink>
      </div>


    </form>
  </div>
</template>