export default function decorate(block) {
  // Select the picture element
  const picture = block.querySelector('picture');
  picture.classList.add('ripple-image');

  $('.ripple-image').ripples({
    resolution: 256,
    perturbance: 0.01,
  });
}
