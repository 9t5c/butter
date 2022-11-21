declare namespace svelte.JSX {
  interface HTMLProps<T extends EventTarget> {
    onmagnetized?: (event: CustomEvent<boolean>) => void
  }
}
