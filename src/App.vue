<template lang="pug">

  #app
    Sidebar
    Stage

</template>


<script>

// Components
import Sidebar from '@/.storyvue/native/Sidebar.vue';
import Stage from '@/.storyvue/native/Stage.vue';

export default {
  components: {
    Sidebar,
    Stage,
  },
  data() {
    return {
    };
  },
  methods: {
  },
};

</script>


<style lang="sass">

@import @/styles/base

#app
  display: flex

</style>
