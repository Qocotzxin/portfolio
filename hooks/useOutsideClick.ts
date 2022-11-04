import { RefObject, useEffect } from "react";

enum ClickEvents {
  mousedown = "mousedown",
  touchstart = "touchstart",
}

export function useOutsideClick(
  ref: RefObject<HTMLElement>,
  handler: (e: Event) => void
) {
  useEffect(() => {
    const listener = (event: Event) => {
      const target = event.target!;
      if (!ref.current || ref.current.contains(target as HTMLElement)) {
        return;
      }
      handler(event);
    };

    document.addEventListener(ClickEvents.mousedown, listener);
    document.addEventListener(ClickEvents.touchstart, listener);
    return () => {
      document.removeEventListener(ClickEvents.mousedown, listener);
      document.removeEventListener(ClickEvents.touchstart, listener);
    };
  }, [ref, handler]);
}
