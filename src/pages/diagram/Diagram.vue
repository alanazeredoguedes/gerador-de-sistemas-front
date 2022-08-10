<template>
  <div>

    <Canvas/>

  </div>
</template>


<script>
import { mapActions } from 'vuex'


import Canvas from "../../components/canvas/Canvas.vue";





export default {
  components: {Canvas},
  data() {
    return {
      data: null
    }
  },

  mounted() {
    //this.$store.dispatch('getCursos')
    //this.getCursos()
  },
  methods: {
    /*...mapActions([
        'getCursos',
    ])*/

  }

}
</script>