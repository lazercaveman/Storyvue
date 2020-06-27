<template lang="pug">

  .label-atom
    label {{label}}

    select(
      :class="'select-atom is--' + variant"
      @change="emitValue"
      )
      template(v-for="option, i in options")
        option(
          v-if="i == 0"
          :key="option.name + i"
          :value="option.value"
          selected
          ) {{option.name}}
        option(
          v-else
          :key="option.name + i"
          :value="option.value"
          ) {{option.name}}

</template>

<script>

export default {
  props: {
    variant: {
      type: String,
      default: 'default',
    },
    label: {
      type: String,
      default: 'options',
    },
    options: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.init(this.options[0].value);
  },
  methods: {
    emitValue(event) {
      this.$emit('emitSelectedValue', event.target.value);
    },
    init(initval) {
      this.$emit('emitSelectedValue', initval);
    },
  },
};

</script>

<style lang="sass" scoped>

@import @/styles/base

.label-atom
  display: block
  position: relative
  width: 100%
  max-width: gridColumns(6)

  label
    position: absolute
    top: gap(5)
    left: gap(20)
    +fontset(regular-12)
    text-align: left
    +interact
      cursor: text

  select
    padding: gap(20) gap(20) gap(5) gap(20)
    height: px(60)
    width: 100%
    max-width: gridColumns(6)
    background-color: color(gray-1, 1)
    +fontset(regular-16)
    background:
      image: url('../assets/icons/angle-down-solid.svg')
      size: auto px(10)
      position: calc(100% - #{gap(20)}) 50%
    +interact
      cursor: pointer

    &:disabled
      opacity: .75

</style>
