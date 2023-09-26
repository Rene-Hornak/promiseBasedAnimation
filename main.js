const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
];
  
const aliceTiming = {
duration: 2000,
iterations: 1,
fill: 'forwards'
}
  
const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

alice1.animate(aliceTumbling, aliceTiming);

function animateElement(element, keyframes, timing) {
    return new Promise((resolve) => {
      const animation = element.animate(keyframes, timing);
      animation.onfinish = resolve;
    });
  }
  
  async function animateSequentially() {
    try {
      await animateElement(alice1, aliceTumbling, aliceTiming);
      await animateElement(alice2, aliceTumbling, aliceTiming);
      await animateElement(alice3, aliceTumbling, aliceTiming);
  
      console.log("All animations are complete.");
    } catch (error) {
      console.error("An error occurred during animation:", error);
    }
  }
  
  animateSequentially();