<template>
  <section id="about">
    <div class="container">
      <div class="about-image">
        <img src="../assets/images/me.jpeg" alt="A picture of me" />
      </div>

      <div class="about-content spacing">
        <h1 class="heading-3">About me</h1>
        <p class="about-bio">
          Highly invested and passionate about creating high quality code and
          applications.
        </p>
        <p class="about-bio">
          Working as an in-house Full Stack Developer for the largest company in
          Europe, producing natural health products -
          <br />
          <a class="about-link" target="_blank" href="https://www.ringana.com/">
            RINGANA GmbH</a
          >
        </p>
        <br />

        <p class="about-bio">
          24 years experience working with travel agencies, betting companies,
          consulting companies, forex trading companies and with my own software
          development company developing multi currency invoicing applications.
        </p>
        <br />
        <div class="about-links">
          <a
            href="https://github.com/gwinnem"
            target="_blank"
            class="about-link"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/gwinnem"
            target="_blank"
            class="about-link"
          >
            Linkedin
          </a>
          <a
            href="https://twitter.com/gwinnem"
            target="_blank"
            class="about-link"
          >
            Twitter
          </a>
          <a
            href="https://www.xing.com/profile/Geirr_Winnem/cv"
            target="_blank"
            class="about-link"
          >
            Xing
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../css/animations';
@import '../css/app';

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @include mq-min($v-10) {
    flex-direction: row;
  }
}

#about {
  padding: 15rem 0;
  background-color: $neutral-600;
  min-height: 100vh;
}

.about-image {
  flex: 1;
  max-width: 50rem;
  margin-bottom: 5rem;
  border-radius: $br-sm;
  overflow: hidden;

  animation: appear 800ms $in-out-sine forwards;

  @include mq-min($v-10) {
    margin-bottom: 0;
    margin-right: 3rem;
  }
}

.about-content {
  flex: 1;
  max-width: 60rem;

  line-height: 1.7;
  opacity: 0;
  animation: fadeInRight 500ms ease forwards 600ms;
  @include mq-min($v-10) {
    margin-top: -5rem;
    max-width: 30em;
    margin-left: 3.5rem;
  }
}

.about-link {
  margin-right: 2.5rem;
  color: $accent-2;
  text-decoration: underline;
}
</style>
