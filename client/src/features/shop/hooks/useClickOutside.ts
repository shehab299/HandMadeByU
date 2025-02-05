import { useEffect, useRef } from "react";

function useClickOutside<T extends HTMLElement = HTMLDivElement>(
  listenCapturing = true,
  handler: () => void
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    function closeOnClickOutside(e: MouseEvent): void {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler();
      }
    }

    document.addEventListener("click", closeOnClickOutside, listenCapturing);

    return () =>
      document.removeEventListener(
        "click",
        closeOnClickOutside,
        listenCapturing
      );
  }, [handler, listenCapturing]);

  return ref;
}

export { useClickOutside };
