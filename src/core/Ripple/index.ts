import "./ripple.css";

export type RippleOptions = {
  background?: string;
  duration?: number; // unit: s
};

export class Ripple {
  constructor(dom: HTMLElement, option?: RippleOptions) {
    this.dom = dom;

    if (option?.background) {
      this.background = option.background;
    }

    if (option?.duration !== undefined) {
      this.duration = option.duration;
    }

    this.render();
  }

  dom: HTMLElement;
  background: string = "rgba(255, 255, 255, 0.3)";
  duration: number = 0.5;
  rippleDOM?: HTMLDivElement;

  handleMouse = (e: MouseEvent) => {
    const x = e.pageX - this.dom.offsetLeft;
    const y = e.pageY - this.dom.offsetTop;

    this.dom.style.setProperty("--x", x.toString() + "px");
    this.dom.style.setProperty("--y", y.toString() + "px");
  };

  render() {
    this.dom.classList.add("eb-ripple");

    const domRect = this.dom.getBoundingClientRect();
    let rippleSize =
      domRect.width > domRect.height ? domRect.width : domRect.height;

    if (this.dom.querySelector(".eb-ripple-wrap")) {
      this.rippleDOM =
        this.dom.querySelector<HTMLDivElement>(".eb-ripple-wrap")!;
    } else {
      const rippleDom = document.createElement("div");
      rippleDom.className = "eb-ripple-wrap";

      this.rippleDOM = rippleDom;
    }

    this.dom.appendChild(this.rippleDOM);

    this.dom.style.setProperty("--ripple-size", rippleSize * 2 + "px");
    this.dom.style.setProperty("--background", this.background);
    this.dom.style.setProperty("--duration", this.duration + "s");

    this.dom.addEventListener("mouseover", this.handleMouse);
  }

  destory() {
    this.dom.removeEventListener("mouseover", this.handleMouse);
    this.dom.removeChild(this.rippleDOM!);
  }
}
