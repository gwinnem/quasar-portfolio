<template>
  <div class="skill spacing" data-aos="fade-up">
    <div tabindex="0" class="icon">
      <img :src="props.skill.imgSrc" alt="Skill" />
    </div>
    <div class="skill-desc spacing-sm">
      <h3 class="heading-4">
        {{ props.skill.title }}
      </h3>
      <p class="skill-paragraph" v-html="props.skill.paragraph"></p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ISkill from '../../core/interfaces/ISkills.interface';
import { PropType } from 'vue';

const props = defineProps({
  skill: {
    type: Object as PropType<ISkill>,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import '../../css/app';

.skill {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: $br-md;

  transition: transform 250ms cubic-bezier(0.49, 0.07, 0.36, 1);
  .icon {
    background-color: $neutral-500;
    padding: 1.5rem;
    border-radius: 50%;
    border: 1px solid $neutral-200;
    img {
      width: 4.5rem;
      height: 4.5rem;
    }
    &:focus {
      outline: 1px solid $accent;
      outline-offset: 2px;
    }
  }
  &-desc {
    margin-top: 1.5rem;
    .heading-4 {
      font-size: 2.4rem;
      margin-bottom: 2.5rem;
    }
  }

  &-paragraph {
    max-width: 30em;
    line-height: 1.8;

    :deep(span) {
      font-weight: bold;
      color: $accent-2;
    }

    @include mq-min($v-10) {
      max-width: 100%;
    }
  }
}

.skill:focus {
  outline: 1px solid $accent-2;
}
.accent {
  color: red;
}
</style>
