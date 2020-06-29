<template lang="pug">

  .story
    h1 Some description about stories
    p Just place your components within a storie component, within the stories folder.
    p You can use all the vue functionality, included dependencies, libraries and so on.
    p Storyvue will list your component stories within the sidebar and name it as like the related file.
    p In future it will also visualize the folder structure as well.

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
