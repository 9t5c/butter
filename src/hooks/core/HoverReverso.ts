import "./hover-reverso.css";

/**
 * don't use Flex & Grid layout
 */
export class HoverReverso {
  constructor(dom: HTMLElement) {
    this.dom = dom;
    this.render();
  }

  dom: HTMLElement;

  private render() {
    const text = this.dom.innerText;
    const spanElement = document.createElement("span");
    spanElement.classList.add("eb-hover-reverso-placeholder");
    spanElement.innerText = text;
    this.dom.innerText = "";
    this.dom.appendChild(spanElement);

    this.dom.dataset.text = text;
    this.dom.classList.add("eb-hover-reverso");
  }
}
