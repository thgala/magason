import { isMobileOrTablet } from './isMobileOrTablet';

/*
 * Add parallax effect to element
 *
 * @param {Object} DOM element
 * @param {Integer} Animation speed, default: 30
 */
export function setParallax(elem, speed = 30) {
  const top =
    (window.pageYOffset - elem.offsetTop) / speed;

  elem.style.transform = `translate3d(0, ${ top }px, 0)`
}
