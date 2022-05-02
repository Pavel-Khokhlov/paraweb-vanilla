import "./sass/index.sass";

import ItcSimpleSlider from './components/simple-adaptive-slider';

document.addEventListener('DOMContentLoaded', () => {
  // инициализация слайдера
  new ItcSimpleSlider('.itcss', {
    loop: true,
    autoplay: true,
    interval: 3000,
    swipe: true,
  });
});
