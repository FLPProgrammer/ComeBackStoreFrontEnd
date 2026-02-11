import { useEffect, useRef, useState } from 'react';
import { IUseHideOnScrollOptions } from '../interfaces/interfaces'



export function useHideOnScroll(
  options: IUseHideOnScrollOptions = {}
) {
  const {
    startHideAt = 160,
    threshold = 10,
  } = options;

  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > startHideAt) {
        if (currentScroll > lastScrollY.current + threshold) {
          setHidden(true);
        } else if (currentScroll < lastScrollY.current - threshold) {
          setHidden(false);
        }
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [startHideAt, threshold]);

  return { hidden };
}