<template>
  <div class="d-flex flex-column flex-root">

    <TopMenu/>

    <div class="page d-flex flex-row flex-column-fluid">
      <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
        <div class="d-flex flex-column-fluid">

            <LeftMenu/>

            <div class="d-flex flex-column flex-column-fluid container-fluid">

              <RouterView />

            </div>


        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700");
@import url("../assets/plugins/custom/datatables/datatables.bundle.css");
@import url("../assets/plugins/global/plugins.bundle.css");
@import url("../assets/css/style.bundle.css");

</style>

<script>
import { RouterLink, RouterView } from 'vue-router';


import LeftMenu from "../components/dashboard/LeftMenu.vue";
import TopMenu from "../components/dashboard/TopMenu.vue";


// import "../assets/plugins/global/plugins.bundle.js";
// import "../assets/js/scripts.bundle.js";

//import "../assets/plugins/custom/datatables/datatables.bundle.js";


export default {

  components: {
    TopMenu,
    LeftMenu
  }

}

</script>


