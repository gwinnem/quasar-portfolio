<template>
  <div class="border-top">
    <q-layout view="hHh lpR fFf">
      <HeaderLayout />

      <q-page-container>
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </q-page-container>

      <FooterLayout />
    </q-layout>
  </div>
</template>

<script lang="ts" setup>
import HeaderLayout from './HeaderLayout.vue';
import FooterLayout from './FooterLayout.vue';
</script>

<style lang="scss" scoped>
@import '../css/app';

.border-top {
  border-top: 3px solid $accent;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
