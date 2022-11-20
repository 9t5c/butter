/**
 * thanks https://github.com/andrewwoan/magnetic-button-effect-tutorial-01/blob/master/final/script.js
 */

type LerpingData = {
  x: { current: number; target: number };
  y: { current: number; target: number };
};

const lerp = (current: number, target: number, factor: number) =>
  current * (1 - factor) + target * factor;

const calculateDistance = (x1: number, y1: number, x2: number, y2: number) => {
  return Math.hypot(x1 - x2, y1 - y2);
};

export class Magnetic {
  constructor(dom: HTMLElement, triggerArea?: number) {
    this.dom = dom;
    this.boundingClientRect = this.dom.getBoundingClientRect();
    if (triggerArea !== undefined) this.triggerArea = triggerArea;
    window.addEventListener("mousemove", this.setMousePosition);
  }

  dom: HTMLElement;
  boundingClientRect: DOMRect;
  animationFrameId: number | undefined;
  triggerArea: number = 100;
  lerpingData: LerpingData = {
    x: { current: 0, target: 0 },
    y: { current: 0, target: 0 },
  };
  interpolationFactor: number = 0.8;
  mousePosition = { x: 0, y: 0 };

  setBCR() {
    this.boundingClientRect = this.dom.getBoundingClientRect();
  }

  resize() {
    window.addEventListener("resize", this.setBCR);
  }

  setMousePosition = (e: MouseEvent) => {
    this.mousePosition.x = e.pageX;
    this.mousePosition.y = e.pageY;
  };

  render(cb: (val: boolean) => void) {
    const distanceFromMouseToCenter = calculateDistance(
      this.mousePosition.x,
      this.mousePosition.y,
      this.boundingClientRect.left + this.boundingClientRect.width / 2,
      this.boundingClientRect.top + this.boundingClientRect.height / 2
    );

    let targetHolder = { x: 0, y: 0 };

    if (distanceFromMouseToCenter < this.triggerArea) {
      targetHolder.x =
        (this.mousePosition.x -
          (this.boundingClientRect.left + this.boundingClientRect.width / 2)) *
        0.2;
      targetHolder.y =
        (this.mousePosition.y -
          (this.boundingClientRect.top + this.boundingClientRect.height / 2)) *
        0.2;

      cb(true);
    } else {
      cb(false);
    }

    this.lerpingData["x"].target = targetHolder.x;
    this.lerpingData["y"].target = targetHolder.y;

    for (const item in this.lerpingData) {
      this.lerpingData[item as keyof LerpingData].current = lerp(
        this.lerpingData[item as keyof LerpingData].current,
        this.lerpingData[item as keyof LerpingData].target,
        this.interpolationFactor
      );
    }

    this.dom.style.transform = `translate(${this.lerpingData["x"].current}px, ${this.lerpingData["y"].current}px)`;

    this.animationFrameId = window.requestAnimationFrame(() => this.render(cb));
  }

  destory() {
    window.removeEventListener("resize", this.setBCR);
    window.removeEventListener("mousemove", this.setMousePosition);
    this.animationFrameId && window.cancelAnimationFrame(this.animationFrameId);
  }
}
