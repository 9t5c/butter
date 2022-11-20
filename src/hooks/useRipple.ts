import { Ref, useEffect, useRef } from "react";
import { Ripple } from "./core/Ripple/Ripple";

export const useRipple = <T extends HTMLElement>(): Ref<T> => {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      const instance = new Ripple(ref.current);

      return () => instance.destory();
    }
  }, [ref.current]);

  return ref;
};
