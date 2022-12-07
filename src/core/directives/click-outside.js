export const clickOutsideNav = {
  mounted(el, binding) {
    const menu = document.querySelector('.nav-toggle');
    el.clickOutsideEvent = function (event) {
      if (
        !(el === event.target || el.contains(event.target)) &&
        event.target !== menu &&
        !menu.contains(event.target)
      ) {
        binding.value();
      }
    };

    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
};
export const clickOutsideModal = {
  mounted(el, binding) {
    el.clickOutsideEvent = function (event) {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value();
      }
    };

    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
};
