<template>
  <transition name="fade" mode="out-in">
    <div v-if="isModalVisible" class="overlay">
      <div class="modal spacing" v-click-outside-modal="hideModal">
        <h3 class="heading-3">
          {{ modalContent.title }}
        </h3>
        <p class="paragraph">
          {{ modalContent.message }}
        </p>
        <button class="btn" @click="hideModal">Ok</button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { clickOutsideModal } from '../../core/directives/click-outside';
export default {
  name: 'FormModal',
  props: {
    isModalVisible: {
      type: Boolean,
      default: false,
    },
    modalContent: {
      type: Object,
      required: true,
    },
  },
  directives: {
    clickOutsideModal,
  },
  methods: {
    hideModal() {
      this.$emit('hide-modal');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../css/variables';

.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease, transform 200ms ease;
}
.fade-leave-to {
  transform: scale(1.1);
}
.fade-enter-from {
  opacity: 0;
}
.overlay {
  z-index: 110;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.6);

  display: flex;
  align-items: center;
  justify-content: center;
}
.modal {
  --spacer: 3rem;
  z-index: 120;
  padding: 3.5rem 5rem;
  background-color: $neutral-400;
  border-radius: $br-sm;

  .paragraph {
    max-width: 27.5em;
  }
  .btn {
    width: 100%;
  }
}
</style>
