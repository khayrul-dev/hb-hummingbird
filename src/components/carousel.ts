import Carousel from "bootstrap/js/dist/carousel";

class HummingbirdCarousel extends Carousel {
  constructor(element: Element, options: any) {
    super(element, options);
  }

  customMethod() {
    console.log("Inside carousel!");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.HummingbirdCarousel = HummingbirdCarousel;
});

export default HummingbirdCarousel;
