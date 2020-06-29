<template lang="pug">

  Button(
    :variant="knobData[1].selected"
    ) {{knobData[0].value}}

</template>


<script>

// Import Libraries
import { mapActions, mapGetters } from 'vuex';

// Components
import Button from '@/components/Button.vue';

export default {
  components: {
    Button,
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
  mounted() {
    this.$store.dispatch('updateKnobsData', [
      {
        prop: 'text',
        type: 'input',
        label: 'Button Text',
        value: 'Button',
      },
      {
        prop: 'variant',
        type: 'select',
        label: 'Button Variant',
        selected: 'default',
        options: ['default', 'cta', 'small', 'small-cta'],
      },
    ]);
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
