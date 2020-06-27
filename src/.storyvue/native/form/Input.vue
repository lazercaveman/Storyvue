<template lang="pug">

  .label-atom
    label {{label}}
    input(
      :value="value"
      @input="emitValue"
      )

</template>

<script>

export default {
  props: {
    label: {
      type: String,
      default: 'Input value',
    },
    value: {
      type: String,
      required: true,
    }
  },
  methods: {
    emitValue(event) {
      this.$emit('emitInputValue', event.target.value);
    },
  },
};

</script>

<style lang="sass" scoped>

@import ../../styles/base

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

  input
    padding: gap(20) gap(20) gap(5) gap(20)
    height: px(60)
    width: 100%
    max-width: gridColumns(6)
    color: color(black, 1)
    background-color: color(white, 1)
    border: 1px solid color(gray-2, 1)
    +fontset(regular-16)

    &:disabled
      opacity: .75

</style>
