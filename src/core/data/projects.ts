import IProject from "src/core/interfaces/IProjects.interface";

export const projectList: IProject[] = [
  {
    title: 'Vue Virtual Keyboard',
    paragraph:
      'Virtual keyboard which can be added to any VUE 3 application. Distributed as a npm package to. Supports 150 different keyboard layouts.',
    imgSrc: '../assets/images/dark-mode-keyboard.png',
    link: 'https://github.com/gwinnem/vue-virtual-keyboard',
    class: 'project-one',
  },
  {
    title: 'Vue Virtual Keyboard Docs',
    paragraph:
      'Documentation and Demos for the vue-virtual-keyboard, built with Quasar.',
    imgSrc: '../assets/images/dark-mode-keyboard.png',
    link: 'https://github.com/gwinnem/vue-virtual-keyboard-quasar',
    class: 'project-one',
  },
  {
    title: 'Vue Dashboard Layout',
    paragraph:
      'npm package used for building interactive dashboards.',
    link: 'https://github.com/gwinnem/vue-dashboard-layout',
    class: 'project-one',
  },
  {
    title: 'Vite Vue Package Skeleton',
    paragraph:
      'Template used for creating new npm packages with VUE 3, Typescript and Vite.',
    link: 'https://github.com/gwinnem/vite-vue-package-skeleton',
    class: 'project-one',
  },
];
