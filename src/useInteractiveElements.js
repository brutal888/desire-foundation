import { useEffect } from 'react';

export const useInteractiveElements = () => {
  useEffect(() => {
    const magneticWraps = document.querySelectorAll('.magnetic-wrap');

    // Magnetic Hover Effect
    const handleMagneticMove = (e, wrap) => {
      const rect = wrap.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      wrap.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    };

    const handleMagneticLeave = (wrap) => {
      wrap.style.transform = `translate(0px, 0px)`;
    };

    magneticWraps.forEach(wrap => {
      wrap.addEventListener('mousemove', (e) => handleMagneticMove(e, wrap));
      wrap.addEventListener('mouseleave', () => handleMagneticLeave(wrap));
    });

    // Scroll Reveal Intersection Observer
    const observerOptions = { threshold: 0.1 };
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // Hero Background Parallax
    const heroBg = document.getElementById('hero-parallax-bg');
    const handleParallaxMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      if (heroBg) {
        heroBg.style.transform = `scale(1.1) translate(${x}px, ${y}px)`;
      }
    };
    
    document.addEventListener('mousemove', handleParallaxMove);

    // Add 3D Tilt interactivity
    const handleTiltMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (centerY - y) / 10;
      const rotateY = (x - centerX) / 10;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    };

    const handleTiltLeave = (card) => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)`;
    };

    document.querySelectorAll('.tilt-card').forEach(card => {
      card.addEventListener('mousemove', (e) => handleTiltMove(e, card));
      card.addEventListener('mouseleave', () => handleTiltLeave(card));
    });

    return () => {
      document.removeEventListener('mousemove', handleParallaxMove);
      revealObserver.disconnect();
    };
  }, []);
};
