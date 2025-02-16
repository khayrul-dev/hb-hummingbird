import HummingbirdOffcanvas from "./components/offcanvas";
import HummingbirdModal from "./components/modal";
import HummingbirdCarousel from "./components/carousel";

declare global {
  interface Window {
    HummingbirdOffcanvas: typeof HummingbirdOffcanvas;
    HummingbirdModal: typeof HummingbirdModal;
    HummingbirdCarousel: typeof HummingbirdCarousel;
  }
}
