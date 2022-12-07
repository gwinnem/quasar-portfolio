<template>
  <div class="work container">
    <h2 class="heading-2">Projects</h2>

    <div class="projects spacing">
      <ProjectPreview
        v-for="(project, index) in projectList"
        :key="index"
        :project="project"
      />
    </div>
    <router-link :to="{ name: 'Projects' }" class="btn btn-main">
      See more projects
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import { projectList } from '../../core/data/projects';
import ProjectPreview from './ProjectsSingleComponent.vue';
</script>

<style lang="scss" scoped>
@import '../../css/app';

.work {
  display: flex;
  flex-direction: column;
}
.projects {
  --spacer: 7.5rem;
  @include mq-min($v-10) {
    --spacer: 10rem;
  }
}
.btn {
  font-size: 1.8rem;
  margin-top: 10rem;
  align-self: center;
  width: 100%;
  max-width: 35rem;
}
</style>
