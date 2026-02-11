import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToHash(delay = 100) {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const element = document.querySelector(location.hash);

    if (!element) return;

    const timeout = setTimeout(() => {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, delay);

    return () => clearTimeout(timeout);
  }, [location, delay]);
}
