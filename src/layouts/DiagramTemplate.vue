<template>
  <div>


    <div class="d-flex flex-column flex-root">
      <div class="page d-flex flex-row flex-column-fluid">
        <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">

        <TopMenu/>

        </div>
      </div>
    </div>

    <RouterView />


  </div>
</template>

<style>

@import url("@/assets/themes/10/css/style.bundle.css");

.header-bg2{
  background-image: url('../assets/themes/10/media/header-bg.png');
  height: 8vh;
}

/*@import url("../assets/plugins/global/plugins.bundle.css");*/

</style>

<script>
import { RouterLink, RouterView } from 'vue-router';
import TopMenu from "../components/canvas/top-menu/TopMenu.vue";


// import "../assets/plugins/global/plugins.bundle.js";
// import "../assets/js/scripts.bundle.js";


export default {

  components: {
    TopMenu
  },
  mounted() {
    $('body').removeClass('page-bg');
    $('body').css('background-image', 'none');
  },

}

</script>


