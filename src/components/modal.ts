import BSModal from "bootstrap/js/dist/modal";
import { ModalOptions, ModalInstance, ModalStatic } from "./modal/types";

// const Modal = BSModal as unknown as ModalStatic;

class Modal extends BSModal implements BSModal {}

if (typeof window !== "undefined") {
  window.Modal = Modal;
}

export default Modal;

export type { ModalOptions, ModalInstance, ModalStatic };
