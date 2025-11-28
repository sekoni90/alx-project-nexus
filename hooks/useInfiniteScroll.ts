import { useEffect, useRef } from 'react';

type Options = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  enabled?: boolean;
};

export default function useInfiniteScroll(onIntersect: () => void, options?: Options) {
  const ref = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (options?.enabled === false) return;
    if (!ref.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) onIntersect();
        });
      },
      {
        root: options?.root ?? null,
        rootMargin: options?.rootMargin ?? '0px',
        threshold: options?.threshold ?? 0.5,
      }
    );

    observerRef.current.observe(ref.current);

    return () => {
      if (observerRef.current && ref.current) observerRef.current.unobserve(ref.current);
      observerRef.current = null;
    };
  }, [onIntersect, options?.enabled]);

  return [ref] as const;
}
