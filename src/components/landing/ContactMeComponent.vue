<template>
  <div class="container">
    <div class="contact-info" data-aos="fade-up">
      <div class="contact-info-top">
        <h3 class="heading-3">Get in touch</h3>
        <div class="message">Send me a message!</div>
      </div>

      <div class="contact-info-bottom">
        <div class="phone">
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
            ></path>
          </svg>
          <span> +43 680 128 5680 </span>
        </div>
        <div class="email">
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
            ></path>
            <path
              d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
            ></path>
          </svg>
          <span> gwinnem@gmail.com </span>
        </div>
      </div>
    </div>

    <q-form
      data-aos="fade-up"
      class="contact-form"
      name="contact-form"
      method="post"
      @submit.prevent="handleSubmit"
    >
      <div class="form-top">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            v-model="form.name"
            name="name"
            id="name"
            type="text"
            required
            autocomplete="on"
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            v-model="form.email"
            name="email"
            id="email"
            type="email"
            required
            autocomplete="on"
          />
        </div>
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          v-model="form.message"
          name="message"
          id="message"
          cols="10"
          rows="6"
          required
          minlength="10"
          maxlength="200"
        ></textarea>
      </div>
      <div class="form-group">
        <q-btn type="submit" class="btn btn-main">
          <span>Send</span>
          <img src="/assets/icons/send.svg" alt="Send icon" />
        </q-btn>
      </div>
    </q-form>
  </div>
  <Loader :isLoading="isLoading" />
  <FormModal
    :isModalVisible="isModalVisible"
    :modalContent="modalContent"
    @hide-modal="hideModal"
  />
</template>

<script setup>
import FormModal from '../shared/FormModalComponent.vue';
import Loader from '../shared/LoaderComponent.vue';
import { reactive, ref } from 'vue';
import axios from 'axios';

// TODO add lang = ts

const form = reactive({
  name: '',
  email: '',
  message: '',
});
const modalContent = reactive({
  title: 'title',
  message: 'message',
});
const isLoading = ref(false);
const isModalVisible = ref(false);
const hideModal = () => {
  isModalVisible.value = false;
};

const handleSubmit = async () => {

  try {

    const API_KEY = "your-mailslurp-api-key";
    isLoading.value = true;
    await axios({
      method: 'POST',
      url: `https://api.mailslurp.com/sendEmail?apiKey=${API_KEY}`,
      data: {
        senderId: 'your-sender-id',
        // senderId: `your-mailslurp inbox id`,
        to: 'your email',
        subject: `Email from ${form.name} ${form.email}`,
        body: form.message,
      },
    });
    isLoading.value = false;
    modalContent.title = 'Success';
    modalContent.message = `Thank you for contacting me ${form.name}.`;
    isModalVisible.value = true;
    form.name = '';
    form.email = '';
    form.message = '';
  } catch (error) {
    isLoading.value = false;
    modalContent.title = 'Whoops!';
    modalContent.message =
      'Something went wrong! Please try sending the message again.';
    isModalVisible.value = true;
    console.error(error);
  }
};
</script>

<style lang="scss" scoped>
@import '../../css/app';

.container {
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  @include mq-min($v-10) {
    flex-direction: row;
  }
}

.contact-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-bottom: 5rem;

  @include mq-min($v-6) {
    flex-direction: row;
  }
  @include mq-min($v-10) {
    flex-direction: column;
  }

  .heading-3 {
    margin-bottom: $s-14;
  }
  .message {
    font-size: $s-18;
    color: $font-paragraph;
  }
  &-top {
    flex: 1;
    margin-bottom: $s-20;
    @include mq-min($v-6) {
    }
  }
  &-bottom {
    color: $font-paragraph;
  }

  .phone,
  .email {
    display: flex;
    align-items: center;
    font-weight: 500;

    svg {
      width: 3rem;
      margin-right: 1.5rem;
    }
  }
  .phone {
    margin-bottom: $s-20;
  }
}

.contact-form {
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

  .form-top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .form-group {
      width: 45%;
    }
  }
  .form-group {
    width: 100%;
    display: flex;
    flex-direction: column;

    label {
      text-transform: uppercase;
      letter-spacing: 2px;
      color: $font-paragraph;

      margin-bottom: $s-10;
    }
    input,
    textarea {
      color: $font-paragraph;

      border: 0;
      border-radius: $br-sm;
      padding: 1rem 1.5rem;
      width: 100%;
      background-color: $neutral-700;
      margin-bottom: $s-20;
      box-shadow: 0 2px 0 hsla(0, 0%, 50%, 0.15),
        inset 0 2px 2px hsla(0, 0%, 0%, 0.15);
    }

    input:focus,
    textarea:focus {
      outline: 1px solid $accent;
    }
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    @include mq-min($v-6) {
      max-width: 20rem;
    }
    img {
      width: 2rem;
      height: 2rem;
      margin-left: 1rem;
    }
  }
}
.light-mode {
  input,
  textarea {
    box-shadow: 0 2px 0 hsla(0, 0%, 100%, 0.15),
      inset 0 1px 2px hsla(0, 0%, 0%, 0.15) !important;
  }
}
</style>
