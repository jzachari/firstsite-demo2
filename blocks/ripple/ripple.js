export default function decorate(block) {
  $('main').ripples({
    resolution: 512,
    dropRadius: 20,
    interactive: true,
    perturbance: 0.02,
  });
}
