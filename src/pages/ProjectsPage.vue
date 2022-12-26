<template>
  <section id="work">
    <div class="container">
      <div class="heading-2">Projects</div>
      <div class="projects">
        <div class="projects spacing">
          <ProjectPreview
            v-for="(project, index) in projectList"
            :key="index"
            :project="project"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import ProjectPreview from 'components/landing/ProjectsSingleComponent.vue';
import { projectList } from '../core/data/projects';
</script>

<style lang="scss" scoped>
@import '../css/app';

#work {
  background-color: $neutral-600;
  min-height: 100vh;
  padding: 17.5rem 0;
}
.projects {
  $spacer: 12.5rem;
}
</style>
