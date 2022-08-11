<template>
  <div>


    <div class="d-flex flex-column flex-root">
      <div class="page d-flex flex-row flex-column-fluid">
        <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">


          <div id="kt_header" class="header header-bg header-bg2">
            <div class="container-fluid">
              <div class="header-brand me-5">
                <div class="d-flex align-items-center d-lg-none ms-n2 me-2" title="Show aside menu">
                  <div class="btn btn-icon btn-color-white btn-active-color-primary w-30px h-30px" id="kt_aside_toggle">
                    <span class="svg-icon svg-icon-1">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="currentColor" />
												<path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="currentColor" />
											</svg>
										</span>
                  </div>
                </div>
                <a href="javascript:void(0)">
                  <img alt="Logo" src="@/assets/logo.svg" class="h-25px h-lg-30px d-none d-md-block" />
                </a>
              </div>


              <div class="topbar d-flex align-items-stretch">
                <div class="d-flex align-items-stretch me-2 me-lg-4">

                  <div id="kt_header_search" class="header-search d-flex align-items-center header-search w-lg-250px" data-kt-search-keypress="true" data-kt-search-min-length="2" data-kt-search-enter="enter" data-kt-search-layout="menu" data-kt-search-responsive="lg" data-kt-menu-trigger="auto" data-kt-menu-permanent="true" data-kt-menu-placement="bottom-end">
                    <div data-kt-search-element="toggle" class="d-flex d-lg-none align-items-center">
                      <div class="btn btn-icon btn-borderless btn-color-white btn-active-primary bg-white bg-opacity-10">
                        <span class="svg-icon svg-icon-1 svg-icon-white">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
														<path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor" />
													</svg>
												</span>
                      </div>
                    </div>

                    <form data-kt-search-element="form" class="d-none d-lg-block w-100 position-relative mb-2 mb-lg-0" autocomplete="off">
                      <input type="hidden" />
                      <span class="svg-icon svg-icon-3 position-absolute top-50 translate-middle-y ms-0 ms-lg-4">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M21.7 18.9L18.6 15.8C17.9 16.9 16.9 17.9 15.8 18.6L18.9 21.7C19.3 22.1 19.9 22.1 20.3 21.7L21.7 20.3C22.1 19.9 22.1 19.3 21.7 18.9Z" fill="currentColor" />
													<path opacity="0.3" d="M11 20C6 20 2 16 2 11C2 6 6 2 11 2C16 2 20 6 20 11C20 16 16 20 11 20ZM11 4C7.1 4 4 7.1 4 11C4 14.9 7.1 18 11 18C14.9 18 18 14.9 18 11C18 7.1 14.9 4 11 4ZM8 11C8 9.3 9.3 8 11 8C11.6 8 12 7.6 12 7C12 6.4 11.6 6 11 6C8.2 6 6 8.2 6 11C6 11.6 6.4 12 7 12C7.6 12 8 11.6 8 11Z" fill="currentColor" />
												</svg>
											</span>
                      <input type="text" class="form-control form-control-flush ps-8 ps-lg-12" name="search" value="" placeholder="Search" data-kt-search-element="input" />
                      <span class="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-lg-5" data-kt-search-element="spinner">
												<span class="spinner-border h-15px w-15px align-middle text-gray-400"></span>
											</span>
                      <span class="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-lg-4" data-kt-search-element="clear">
												<span class="svg-icon svg-icon-2 svg-icon-lg-1 me-0">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor" />
														<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor" />
													</svg>
												</span>
											</span>
                    </form>

                  </div>
                </div>



                <div class="d-flex align-items-center me-2 me-lg-4">
                  <a href="#" class="btn btn-icon btn-borderless btn-color-white btn-active-primary bg-white bg-opacity-10 position-relative" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                    <span class="svg-icon svg-icon-1 svg-icon-white">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path opacity="0.3" d="M12 22C13.6569 22 15 20.6569 15 19C15 17.3431 13.6569 16 12 16C10.3431 16 9 17.3431 9 19C9 20.6569 10.3431 22 12 22Z" fill="currentColor" />
												<path d="M19 15V18C19 18.6 18.6 19 18 19H6C5.4 19 5 18.6 5 18V15C6.1 15 7 14.1 7 13V10C7 7.6 8.7 5.6 11 5.1V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V5.1C15.3 5.6 17 7.6 17 10V13C17 14.1 17.9 15 19 15ZM11 10C11 9.4 11.4 9 12 9C12.6 9 13 8.6 13 8C13 7.4 12.6 7 12 7C10.3 7 9 8.3 9 10C9 10.6 9.4 11 10 11C10.6 11 11 10.6 11 10Z" fill="currentColor" />
											</svg>
										</span>
                    <span class="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink"></span>
                  </a>
                </div>


                <div class="d-flex align-items-center me-2 me-lg-4">
                  <a href="#" class="btn btn-success border-0 px-3 px-lg-6" data-bs-toggle="modal" data-bs-target="#kt_modal_create_campaign">New Goal</a>
                </div>

                <div class="d-flex align-items-center">
                  <a href="javascript:void(0)" class="btn btn-icon btn-color-white btn-active-color-primary border-0 me-n3" data-bs-toggle="tooltip" data-bs-placement="left" title="Return to launcher">
                    <span class="svg-icon svg-icon-2x">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
												<rect x="7" y="15.3137" width="12" height="2" rx="1" transform="rotate(-45 7 15.3137)" fill="currentColor" />
												<rect x="8.41422" y="7" width="12" height="2" rx="1" transform="rotate(45 8.41422 7)" fill="currentColor" />
											</svg>
										</span>
                  </a>
                </div>


              </div>
            </div>
          </div>



          <div class="content d-flex flex-column flex-column-fluid" id="kt_content">

            <RouterView />

          </div>




        </div>
      </div>
    </div>


  </div>
</template>

<style>

@import url("@/assets/themes/10/css/style.bundle.css");

.header-bg2{
  background-image: url('../assets/themes/10/media/header-bg.png')
}

/*@import url("../assets/plugins/global/plugins.bundle.css");*/

</style>

<script>
import { RouterLink, RouterView } from 'vue-router';


// import "../assets/plugins/global/plugins.bundle.js";
// import "../assets/js/scripts.bundle.js";



export default {

  components: {

  }

}

</script>


