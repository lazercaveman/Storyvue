<template lang="pug">

  Input(
    :label="knobData[0].value"
    :value="knobData[1].value"
    :placeholder="knobData[2].value"
    :type="knobData[3].selected"
    @emitInputValue="knobData[1].value = $event"
    )

</template>


<script>

// Import Libraries
import { mapActions, mapGetters } from 'vuex';

// Components
import Input from '@/components/Input.vue';

export default {
  components: {
    Input,
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
        label: 'Input label',
        value: 'Fancy label',
      },
      {
        prop: 'text',
        type: 'input',
        label: 'Input value',
        value: 'Here is some input text...',
      },
      {
        prop: 'text',
        type: 'input',
        label: 'Input placeholder',
        value: 'Let\'s type something...',
      },
      {
        prop: 'variant',
        type: 'select',
        label: 'Button Variant',
        selected: 'text',
        options: ['text', 'password', 'number', 'search', 'range', 'date', 'file'],
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
