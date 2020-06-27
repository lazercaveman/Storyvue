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
    height: px(60)
    max-width: gridColumns(6)
    color: color(secondary)
    background-color: color(white)
    border: 2px solid color(secondary)
    +fontset(regular-20)

  &.is--cta
    height: px(60)
    max-width: gridColumns(6)
    color: color(white)
    background: linearGradient(primary)
    +fontset(regular-20)

  &.is--small
    height: px(40)
    max-width: gridColumns(3)
    color: color(secondary)
    background-color: color(white)
    border: 2px solid color(secondary)
    border-radius: px(40) / 2
    +fontset(regular-16)

  &.is--small-cta
    height: px(40)
    max-width: gridColumns(3)
    color: color(white)
    background: linearGradient(primary)
    border-radius: px(40) / 2
    +fontset(regular-16)

</style>
