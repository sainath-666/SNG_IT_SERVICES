import { RefObject, useEffect, useState } from "react";

export function useInViewOnce<T extends Element>(
  ref: RefObject<T>,
  threshold = 0.2,
) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element || isInView) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isInView, ref, threshold]);

  return isInView;
}
