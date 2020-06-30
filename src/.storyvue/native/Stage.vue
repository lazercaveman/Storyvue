<template lang="pug">

  #storyvue-app
    Sidebar( v-if="showStoryvueItems" )
    #storyvue-stage
      .spotlight
        router-view
      Toolbar( v-if="showStoryvueItems" )
      Button(
        variant="round"
        class="fullscreen-switch"
        @click.native="toggleStoryvueItems"
        )
        template( v-if="showStoryvueItems" )
          include icons/expand-solid.svg
        template( v-else )
          include icons/compress-solid.svg

</template>


<script>

// Components
import Sidebar from '@/.storyvue/native/Sidebar.vue';
import Toolbar from '@/.storyvue/native/Toolbar.vue';
import Button from '@/.storyvue/native/form/Button.vue';

export default {
  components: {
    Sidebar,
    Toolbar,
    Button,
  },
  data() {
    return {
      showStoryvueItems: true,
    };
  },
  methods: {
    toggleStoryvueItems() {
      this.showStoryvueItems = !this.showStoryvueItems;
    }
  },
};

</script>


<style lang="sass">

@import ../styles/base

#storyvue-app
  display: flex

#storyvue-stage
  display: flex
  flex-direction: column
  width: 100%
  height: 100vh
  max-height: 100vh
  .spotlight
    width: 100%
    height: 100%
    padding: gap(40)

button.fullscreen-switch
  position: fixed
  bottom: px(30)
  right: px(50)

</style>
