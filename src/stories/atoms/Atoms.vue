<template lang="pug">

  .stories
    h1 Some description about atoms
    p If atoms are the basic building blocks of matter, then the atoms of our interfaces serve as the foundational
    p building blocks that comprise all our user interfaces. These atoms include basic HTML elements like form labels,
    p inputs, buttons, and others that can’t be broken down any further without ceasing to be functional.
    a(href="https://atomicdesign.bradfrost.com/chapter-2/" target="_blank" rel="noopener") atomicdesign by bradfrost.

</template>


<script>

// Import Libraries
import { mapActions, mapGetters } from 'vuex';

// Components
import Select from '@/components/Select.vue';

export default {
  components: {
    Select,
  },
  computed: {
    ...mapGetters([
      'knobData',
    ]),
  },
  data() {
    return {
    };
  },
  methods: {
    ...mapActions([
      'updateKnobsData',
    ]),
  },
};

</script>


<style lang="sass" scoped>

@import @/styles/base

#signup
  display: grid
  grid-gap: gap(20)
  padding: gap(20)

</style>
