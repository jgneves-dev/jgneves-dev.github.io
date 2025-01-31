// useOnScreen.js (new hook)
import { useState, useEffect } from "react";

const useOnScreen = (options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    },
    options
  );

  useEffect(() => {
    const current = observer;
    const target = document.querySelector(options.targetSelector);

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [observer, options]);

  return isIntersecting;
};

export default useOnScreen;
