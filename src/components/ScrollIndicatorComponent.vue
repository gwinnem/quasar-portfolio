<template>
  <div class="scroll-indicator"></div>
</template>

<style lang="scss" scoped>
@import '../css/app';
@import '../css/animations';

.scroll-indicator {
  animation: appear 750ms ease forwards 1400ms;
  position: absolute;
  display: block;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: inset 0 0 0 2px $font-paragraph;
  border-radius: 2.5rem;
  height: 7rem;
  width: 4rem;
  opacity: 0;

  @include mq-min($v-9) {
    bottom: 5rem;
  }
}
.scroll-indicator::before {
  content: '▼';
  position: absolute;
  left: 45%;
  transform: translateX(-45%);
  width: 1.1rem;
  height: 1.1rem;
  color: $font-paragraph;
  animation: scroll 2s infinite 350ms;
}

@keyframes scroll {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(-50%, 4rem);
  }
}
@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.7;
  }
}
</style>
