<template>
  <q-icon class="toggleLightMode" @click.prevent="toggleLightMode" size="4rem">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        :fill="$font - primary"
        d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10v-20zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"
      />
    </svg>
    <q-tooltip
      class="bg-indigo"
      transition-show="flip-right"
      transition-hide="flip-left"
      :offset="[10, 10]"
    >
      <div class="tooltip">
        Click to enable {{ lightModeToggled ? 'Light' : 'Dark' }} Mode
      </div>
    </q-tooltip>
  </q-icon>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { LocalStorage } from 'quasar';

const lightModeToggled = ref('');
if (
  LocalStorage.has('light-mode') &&
  LocalStorage.getItem('light-mode') !== null
) {
  let tmp = LocalStorage.getItem('light-mode');
  if (tmp === null) {
    lightModeToggled.value = '';
  } else {
    lightModeToggled.value = tmp.toString();
  }
}

const enableLightMode = () => {
  lightModeToggled.value = 'enabled';
  document.body.classList.add('light-mode');
  localStorage.setItem('light-mode', 'enabled');
};
const disableLightMode = () => {
  lightModeToggled.value = '';
  document.body.classList.remove('light-mode');
  LocalStorage.set('light-mode', '');
};

const toggleLightMode = () => {
  let lightMode = LocalStorage.getItem('light-mode');

  if (lightMode !== 'enabled') {
    enableLightMode();
  } else {
    disableLightMode();
  }
};

onMounted(() => {
  if (LocalStorage.getItem('light-mode') === 'enabled') {
    enableLightMode();
  }
});
</script>

<style lang="scss" scoped>
@import '../css/app';

.toggleLightMode {
  z-index: 50;
  position: absolute;
  right: 0;
  top: 8rem;

  background: none;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;

  cursor: pointer;

  svg {
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
  }

  svg:hover {
    transform: scale(1.05);
  }

  svg:hover ~ .tooltip {
    opacity: 1;
  }
}

.toggleLightMode:focus {
  outline: none;

  .tooltip {
    opacity: 1;
  }
}

.tooltip {
  color: $font-primary;
  font-size: 1.5rem;
  font-weight: 500;
}
</style>
