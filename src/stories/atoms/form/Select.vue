<template lang="pug">

  Select(
    :label="knobData[0].value"
    :selected="knobData[1].select"
    :options="knobData[1].options"
    @emitSelectedValue="knobData[1].value = $event"
    )

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
  mounted() {
    this.$store.dispatch('updateKnobsData', [
      {
        prop: 'text',
        type: 'input',
        label: 'Select Text',
        value: 'Some fancy label',
      },
      {
        prop: 'text',
        type: 'input',
        label: 'Select Text',
        options: [{ name: 'Fancy item 1', value: 'Fancy item 1 selected' }, { name: 'Fancy item 2', value: 'Fancy item 2 selected' }],
        value: '',
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
