<template>
  <q-page>
    <main id="landing">
      <section id="home">
        <LandingComponent />
      </section>
            <section id="projects">
              <ProjectComponent />
            </section>
      <section id="skills">
        <SkillsComponent />
      </section>
      <section id="contact">
        <ContactMeComponent />
      </section>
    </main>
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab class="glossy" icon="fa-solid fa-chevron-up" color="accent" />
    </q-page-scroller>
  </q-page>
</template>

<script lang="ts" setup>
import LandingComponent from 'components/landing/LandingComponent.vue';
import ProjectComponent from 'components/landing/ProjectsComponent.vue';
import SkillsComponent from 'components/landing/SkillsComponent.vue';
import ContactMeComponent from 'components/landing/ContactMeComponent.vue';
</script>

<style lang="scss" scoped>
@import '../css/app';

#home {
  background-color: $neutral-400;
}

#projects,
#skills,
#contact {
  padding: 5rem 0;
  @include mq-min($v-10) {
    padding: 10rem 0;
  }
}

#projects,
#contact {
  background-color: $neutral-600;
}

#skills {
  background-color: $neutral-400;
}
</style>
