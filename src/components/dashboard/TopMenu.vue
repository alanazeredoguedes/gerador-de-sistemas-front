<template>
  <div id="kt_header" class="header" style="background: rgb(51, 86, 119) !important;">
    <div class="container-fluid d-flex flex-stack">
      <div class="d-flex align-items-center me-5">

        <!-- BOTAO MENU ESQUERDA -->
        <btn-left-menu/>

        <!-- LOGO -->
        <Logo/>

        <!-- Select1 -->

      </div>

      <div class="d-flex align-items-center flex-shrink-0">

        <!-- PESQUISAR -->

        <!-- ACESSO RAPIDO -->
        <AcessoRapido/>

        <!-- TEMA MODO -->
        <TemaModo/>

        <!-- USUARIO -->
        <Usuario/>

        <!-- ATIVIDADES -->

        <!-- CHAT -->

      </div>
    </div>
  </div>
</template>

<script>
import BtnLeftMenu from "./top-menu/btnLeftMenu.vue";
import Logo from "./top-menu/Logo.vue";
import AcessoRapido from "./top-menu/AcessoRapido.vue";
import TemaModo from "./top-menu/TemaModo.vue";
import Usuario from "./top-menu/Usuario.vue";


export default {
  name: 'TopMenu',
  components: {Usuario, TemaModo, AcessoRapido, Logo, BtnLeftMenu },
}
</script>