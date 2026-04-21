
import React, { useState, useEffect } from 'react';
import DesktopMedia from './DesktopMedia';
import MobileMedia from './MobileMedia';

export default function Media() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? <MobileMedia /> : <DesktopMedia />;
}
