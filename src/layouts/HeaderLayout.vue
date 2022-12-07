<template>
  <q-header elevated class="header">
    <q-toolbar class="container">
      <q-toolbar-title class="logo"> Geirr Winnem </q-toolbar-title>
      <NavbarRightComponent />
      <!--      <LightModeButton/>-->
    </q-toolbar>
  </q-header>
</template>

<script lang="ts" setup>
// import LightModeButton from '../components/LightModeButton.vue';
import NavbarRightComponent from './NavbarRightLayout.vue';
</script>

<style lang="scss" scoped>
@import '../css/app';
@import '../css/animations';

.header {
  background-color: $neutral-400;

  .container {
    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      font-family: 'Vegan Style', Serif;
      font-size: 2rem;
      margin: 1.5rem 0;
    }
  }
}
</style>
