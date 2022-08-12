<template>
  <div>

    <div class="d-flex flex-column flex-root">
      <div class="page launcher sidebar-enabled d-flex flex-row flex-column-fluid me-lg-5" id="kt_page">


        <div class="d-flex flex-column flex-root">

          <LogoTitle/>

          <router-view></router-view>

          <Footer/>
        </div>

        <MenuDireita/>


      </div>
    </div>


  </div>
</template>

<style>

@import url("@/assets/themes/10/css/style.bundle.css");
@import url("@/assets/themes/10/plugins/global/plugins.bundle.css");

/*.header-bg2{
  background-image: url('../@/assets/themes/themes/10/media/header-bg.png')
}
.body {
  background-image: url('../src/assets/themes/10/media/misc/page-bg.jpg');
}
*/

</style>

<script>

import { RouterLink, RouterView } from 'vue-router';
import MenuDireita from "../components/dashboard/MenuDireita.vue";
import Footer from "../components/dashboard/Footer.vue";
import LogoTitle from "../components/dashboard/LogoTitle.vue";






export default {

  components: {
    LogoTitle,
    Footer,
    MenuDireita

  },
  mounted() {
    $('body').addClass('page-bg');
    document.body.style.backgroundImage = 'url("../src/assets/themes/10/media/misc/page-bg.jpg")';
  }

}

</script>


