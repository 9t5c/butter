import { Ref, useEffect, useRef } from "react";
import { Ripple } from "./core/Ripple/Ripple";

export const useRipple = <T extends HTMLElement>(): Ref<T> => {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      new Ripple(ref.current);
    }
  }, [ref.current]);

  return ref;
};
