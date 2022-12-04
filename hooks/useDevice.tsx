import { useLayoutEffect, useState } from 'react';

export const useDevice = () => {
  const [device, setDevice] = useState('desktop');

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDevice('mobile');
      } else if (window.innerWidth < 1024) {
        setDevice('tablet');
      } else {
        setDevice('desktop');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return device;
};
