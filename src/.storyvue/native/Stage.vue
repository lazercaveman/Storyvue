<template lang="pug">

  #storyvue-stage
    .spotlight
      router-view
    Knobs

</template>


<script>

// Components
import Knobs from '@/.storyvue/native/Knobs.vue';

export default {
  components: {
    Knobs,
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

@import ../styles/base

#storyvue-stage
  display: flex
  flex-direction: column
  width: 100%
  height: 100vh
  max-height: 100vh
  .spotlight
    width: 100%
    height: 100%
    padding: gap(40)

</style>
