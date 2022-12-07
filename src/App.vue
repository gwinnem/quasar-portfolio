<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import AOS from 'aos';
import 'aos/dist/aos.css';
import { onMounted } from 'vue';

onMounted(() => {
  AOS.init({
    offset: 100,
    duration: 600,
    easing: 'ease-out-sine',
    delay: 100,
  });
});
</script>

<style lang="scss">
@import 'css/app';

.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
