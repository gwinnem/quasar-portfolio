<template>
  <footer class="footer">
    <div class="footer-social">
      <a href="https://github.com/gwinnem" target="_blank" class="about-link">
        <q-icon size="22px" name="fa-brands fa-github"/>
      </a>
      <a
        href="https://www.linkedin.com/in/gwinnem"
        target="_blank"
        class="about-link"
      >
        <q-icon size="22px" name="fa-brands fa-linkedin-in"/>
      </a>
      <a href="https://twitter.com/gwinnem" target="_blank" class="about-link">
        <q-icon size="22px" name="fa-brands fa-twitter"/>
      </a>
    </div>
    <p class="footer-copyright">Developed by Geirr Winnem</p>
  </footer>
</template>

<style lang="scss" scoped>
@import '../css/app';

.footer {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 25vh;
  padding: 2.5rem 0;
  background-color: $neutral-500;
  @include mq-max($v-6) {
    padding-bottom: 10vh;
  }
}

.footer-social {
  flex: 1.5;
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 50%;
  max-width: 30rem;

  img {
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
  }
}

.footer-copyright {
  display: flex;
  align-items: center;
  flex: 1;
}
</style>
