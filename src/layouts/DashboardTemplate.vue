<template>
  <div>

    DashBoard Template
    <ul>
      <li>
        <RouterLink :to="{ name: 'homePage', params: {} }">Home</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'sobre', params: {} }">About</RouterLink>
      </li>
    </ul>


    <RouterView />


  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

</script>

<style>

</style>
