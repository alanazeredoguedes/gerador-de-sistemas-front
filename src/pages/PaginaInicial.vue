<template>
  <div class="home">
    <h1>Pagina Home</h1>
  </div>
</template>


<script>
import { mapActions } from 'vuex'

export default {

  data() {
    return {
      data: null
    }
  },

  mounted() {
    //this.$store.dispatch('getCursos')
    this.getCursos()
  },
  methods: {
    ...mapActions([
        'getCursos',

    ])

  }

}
</script>