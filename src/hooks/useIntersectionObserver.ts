
import { useState, useEffect, RefObject } from 'react';

interface IntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  root?: Element | null;
}

export function useIntersectionObserver(
  ref: RefObject<Element>,
  options: IntersectionObserverOptions = {}
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);
  
  useEffect(() => {
    const element = ref?.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px',
      root: options.root || null,
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, options.threshold, options.rootMargin, options.root]);

  return isIntersecting;
}
