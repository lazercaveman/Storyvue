<template lang="pug">

  #storyvue-tool-bar
    ul
      li(
        v-for="knob in knobData"
        )
        Input(
          v-if="knob.type == 'input'"
          :label="knob.label"
          :value="knob.value"
          @emitInputValue="knob.value = $event"
          )
        Select(
          v-if="knob.type == 'select'"
          :label="knob.label"
          :options="knob.options"
          @emitSelectedValue="knob.selected = $event"
          )

</template>


<script>

// Import Libraries
import { mapGetters } from 'vuex';

// Components
import Input from '@/.storyvue/native/form/Input.vue';
import Select from '@/.storyvue/native/form/Select.vue';

export default {
  components: {
    Input,
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
  },
  methods: {
  },
};

</script>


<style lang="sass" scoped>

@import ../styles/base

#storyvue-tool-bar
  display: flex
  flex-direction: column
  padding: gap(40) gap(20)
  width: 100%
  height: gridColumns(6)
  max-height: gridColumns(6)
  background-color: color(white)
  border-top: 1px solid color(gray-1)
  +fontset(regular-16)
  overflow-y: scroll

ul
  li
    margin-bottom: gap(10)
  a
    font-weight: bold
    color: #2c3e50
    &.router-link-exact-active
      color: #42b983

</style>
