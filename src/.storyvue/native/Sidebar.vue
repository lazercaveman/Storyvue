<template lang="pug">

  #storyvue-sidebar
    ul
      li(
        v-for="item in storyItems"
        )
        router-link(
          :to="item.path"
          ) {{item.name}}

</template>


<script>

// Import Libraries
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'storyItems',
    ]),
  },
};

</script>


<style lang="sass" scoped>

@import ../styles/base

#storyvue-sidebar
  position: relativ
  z-index: 100
  display: flex
  flex-direction: column
  padding: gap(40)
  width: gridColumns(4)
  min-width: gridColumns(4)
  max-width: gridColumns(4)
  height: 100vh
  background-color: color(white)
  box-shadow: 0 0 px(10) color(black, .05)
  border-right: 1px solid color(gray-1)
  +fontset(regular-16)

ul
  li
    margin-bottom: gap(5)
  a
    font-weight: regular
    color: #2c3e50
    &.router-link-exact-active
      color: #42b983

</style>
