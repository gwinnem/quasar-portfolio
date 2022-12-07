<template>
  <div class="container">
    <div class="heading-2">Skills</div>
    <div class="skills">
      <SkillSingle
        v-for="(skill, index) in skillsList"
        :key="index"
        :skill="skill"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { skillsList } from '../../core/data/skills.ts';
import SkillSingle from './SkillsSingleComponent.vue';
</script>

<style lang="scss" scoped>
@import '../../css/app';

.skills {
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  row-gap: 5rem;
  column-gap: 15rem;
  @include mq-min($v-10) {
    row-gap: 7.5rem;
    grid-template-columns: 1fr 1fr;
    justify-items: stretch;
  }
}
</style>
