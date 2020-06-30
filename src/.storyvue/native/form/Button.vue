<template lang="pug">

  button(
    :class="'button-atom is--' + variant"
    )
    slot

</template>

<script>

export default {
  props: {
    variant: {
      type: String,
      default: 'default',
    },
  },
};

</script>

<style lang="sass" scoped>

@import @/styles/base

button
  width: 100%
  user-select: none
  +interact
    cursor: pointer

  &.is--default
    height: px(40)
    max-width: gridColumns(3)
    color: color(secondary)
    background-color: color(white)
    border: 2px solid color(secondary)
    border-radius: px(40) / 2
    +fontset(regular-16)

  &.is--round
    height: px(40)
    max-width: px(40)
    background-color: color(white)
    border: 1px solid color(gray-2)
    border-radius: px(40) / 2
    svg
      width: 50%
      height: auto
      color: color(gray-2)

</style>
