<template>
  <div class="showcase container">
    <div class="showcase-content spacing">
      <h1 class="heading-1">
        Delivering quality <span>front and backend applications</span>
      </h1>
      <p class="desc">
        Hi, I'm a <span>Full Stack Developer</span> passionate about writing
        quality and reusable code. Love developing with C# and Typescript.
        Working @ <a href="https://www.ringana.com" target="_blank">RINGANA</a>.
      </p>
      <div class="buttons">
        <q-btn
          outline
          rounded
          class="btn btn-sec"
          href="#projects"
          label="See my projects"
        />
        <q-btn
          outline
          rounded
          class="btn btn-sec"
          href="#skills"
          label="See My Skills"
        />
        <q-btn
          outline
          rounded
          class="btn btn-sec"
          href="#contact"
          label="Contact Me"
        />
      </div>
    </div>
    <div class="showcase-image">
      <LandingImageComponent />
    </div>
    <ScrollIndicator />
  </div>
</template>

<script lang="ts" setup>
import ScrollIndicator from '../ScrollIndicatorComponent.vue';
import LandingImageComponent from './LandingImageComponent.vue';
</script>

<style lang="scss" scoped>
@import '../../css/app';
@import '../../css/animations';

.showcase {
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15rem 0;

  @include mq-min($v-10) {
    padding: 10rem 0;
    flex-direction: row;
  }

  &-content {
    flex: 1;

    opacity: 0;
    animation: appear 800ms $in-out-sine forwards 100ms;

    z-index: 10;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @include mq-min($v-10) {
      align-items: flex-start;
      text-align: left;
    }
    .heading-1 {
      max-width: 60rem;
      span {
        color: $accent-2;
      }
    }
    .desc {
      margin-top: 3rem;
      width: 100%;
      max-width: 25em;
      color: $font-paragraph;
      span {
        color: $accent-2;
        font-weight: bold;
      }
    }
    .buttons {
      margin-top: 4rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      @include mq-max($v-3) {
        flex-direction: column;
      }

      .btn-sec {
        margin-top: 2.5rem;
        @include mq-min($v-3) {
          font-size: 89%;
          margin-top: 0;
          margin-left: 2.5rem;
        }
      }
    }
  }
  &-image {
    z-index: 0;
    flex: 1;
    align-self: center;
    width: 100%;
  }
}
</style>
