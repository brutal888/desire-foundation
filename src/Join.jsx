import React, { useState, useEffect } from 'react';
import DesktopJoin from './DesktopJoin';
import MobileJoin from './MobileJoin';

export default function Join() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? <MobileJoin /> : <DesktopJoin />;
}