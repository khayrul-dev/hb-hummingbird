export interface ModalOptions {
  backdrop?: boolean | "static";
  keyboard?: boolean;
  focus?: boolean;
}

export interface ModalInstance {
  toggle(): void;
  show(): void;
  hide(): void;
  handleUpdate(): void;
  dispose(): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject
  ): void;
}
export interface ModalStatic {
  new (element: Element | string, options?: ModalOptions): ModalInstance;
  getInstance(element: Element | string): ModalInstance | null;
  getOrCreateInstance(
    element: Element | string,
    config?: ModalOptions
  ): ModalInstance;
}
