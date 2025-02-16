import Offcanvas from "bootstrap/js/dist/offcanvas";

type OffcanvasOptions = Partial<{
  backdrop: boolean;
  keyboard: boolean;
  scroll: boolean;
}>;

class HummingbirdOffcanvas extends Offcanvas {
  constructor(element: Element, options?: OffcanvasOptions) {
    super(element, options);
  }

  customMethod(): void {
    console.log("Custom method triggered");
  }
}

// document.addEventListener("DOMContentLoaded", () => {
//   window.HummingbirdOffcanvas = HummingbirdOffcanvas;
// });
window.HummingbirdOffcanvas = HummingbirdOffcanvas;

export default HummingbirdOffcanvas;
