<template>
  <q-tabs class="nav-items">
    <q-route-tab label="Home" to="/" exact />
    <q-route-tab label="About Me" to="/about" exact />
  </q-tabs>
</template>

<style lang="scss" scoped>
@import '../css/app';

:deep(.q-tab--active .q-tab__label) {
  color: $font-primary;
  font-weight: 300;
}

:deep(.q-tab--active .q-tab__indicator) {
  background-color: $accent-2;
}
</style>
