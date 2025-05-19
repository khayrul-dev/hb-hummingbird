import Offcanvas from "./components/offcanvas";
import Modal from "./components/modal";

declare global {
  interface Window {
    Modal: typeof Modal;
    Offcanvas: typeof Offcanvas;
  }
}
