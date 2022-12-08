<template>
  <article class="project" :class="props.project.class" data-aos="fade-up">
    <div class="project-content">
      <h3 class="heading-3 project-title">{{ props.project.title }}</h3>
      <p class="project-paragraph" v-html="props.project.paragraph"></p>
      <a class="btn btn-tertiary" :href="props.project.link" target="_blank">
        <span> Visit site </span>

        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
    <a v-if="props.project.link !== undefined && props.project.link !== ''" class="project-image" :href="props.project.link" target="_blank">
      <img v-if="props.project.imgSrc !== undefined && props.project.imgSrc !== ''" :src="props.project.imgSrc" alt="Project" />
    </a>
  </article>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import IProject from 'src/core/interfaces/IProjects.interface';

const props = defineProps({
  project: {
    type: Object as PropType<IProject>,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import '../../css/app';

.project {
  margin-bottom: 3rem;
  z-index: 1;

  text-align: center;

  @include mq-min($v-12) {
    display: flex;
    align-items: center;
    text-align: left;
  }
  &-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: left;
    @include mq-min($v-12) {
      align-items: flex-start;
    }
  }
  &-title {
    margin-bottom: var(--s-28);
    letter-spacing: 1px;
  }
  &-paragraph {
    max-width: 22.5em;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: $s-18;
    :deep(a) {
      font-weight: bold;
      color: $accent-2;
    }

    @include mq-min($v-12) {
      margin-left: 0;
    }
  }
  .btn {
    margin: 0 auto $s-32;
    box-shadow: none;
    @include mq-min($v-12) {
      margin-left: 0;
      margin-bottom: 0;
      padding-left: 0;
    }
    svg {
      transition: transform 200ms $in-out-sine;
    }

    &:hover,
    &:focus {
      opacity: 1;
      svg {
        transform: translateX(0.6rem) scaleX(1.2);
      }
    }
    &:focus {
      outline: 1px solid $accent;
      outline-offset: 2px;
    }
  }

  &-image {
    position: relative;
    flex: 1.5;
    display: block;
    box-shadow: $shadow-md;
    transition: transform 200ms $in-out-sine;

    img {
      border-radius: $br-md;
    }
    &::after {
      content: '';
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 250ms ease;
    }
    &:hover {
      transform: scale(1.01);
    }
    &:hover::after {
      box-shadow: $shadow-lg;
      opacity: 1;
    }
  }
}
.project-two {
  @include mq-min($v-12) {
    flex-direction: row-reverse;
    .project-content {
      padding-left: 5rem;
    }
  }
}
</style>
