<template>
  <div class="text-center mb-11">
    <h1 class="text-dark fw-bolder mb-3">Inscrever-se</h1>
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


  <div class="fv-plugins-message-container invalid-feedback text-center">
    <div data-field="confirm-password" data-validator="identical"></div>
  </div>

  <div class="row">
    <div class="fv-row mb-6 col-6">
      <input type="text" id="client_register_name" name="client_register[name]" required="required" placeholder="Nome" class="form-control bg-transparent">
      <div class="fv-plugins-message-container invalid-feedback"></div>
    </div>

    <div class="fv-row mb-6 col-6">
      <input type="text" id="client_register_lastName" name="client_register[lastName]" required="required" placeholder="Sobrenome" class="form-control bg-transparent">
      <div class="fv-plugins-message-container invalid-feedback"></div>
    </div>
  </div>


  <div class="fv-row mb-8">
    <input type="email" id="client_register_email" name="client_register[email]" required="required" placeholder="Email" class="form-control bg-transparent">
    <div class="fv-plugins-message-container invalid-feedback"></div>
  </div>

  <div class="fv-row mb-8" data-kt-password-meter="true">
    <input type="password" id="client_register_password" name="client_register[password]" required="required" placeholder="Senha" class="form-control bg-transparent">

    <div class="fv-plugins-message-container invalid-feedback"></div>

  </div>

  <div class="fv-row mb-8">
    <label class="form-check form-check-inline">
      <input type="checkbox" id="client_register_terms" name="client_register[terms]" required="required" placeholder="Termos" class="form-check-input" value="1">
      <span class="form-check-label fw-semibold text-gray-700 fs-base ms-1">Eu li e aceito os
            <RouterLink :to="{ name: 'terms', params: {} }" target="_blank" class="link-primary fw-semibold">Termos de Uso</RouterLink>
        </span>
    </label>
    <div class="fv-plugins-message-container invalid-feedback"></div>

  </div>

  <input type="hidden" name="codeActivate" value="">


  <div class="d-grid mb-10">
    <button type="button" class="btn btn-primary form_send">
      <span class="indicator-label">Inscrever-se</span>
    </button>
    <button type="submit" class="btn btn-primary form_submit" style="display: none"></button>
  </div>



  <div class="text-gray-500 text-center fw-semibold fs-6">Já possui uma conta?
    <RouterLink :to="{ name: 'login', params: {} }" class="link-primary fw-semibold">Entrar</RouterLink>

  </div>
</template>