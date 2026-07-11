import { useEffect, useState } from 'react';
import './SplashScreen.css';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Keep it visible for 2 seconds, then fade out
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => setIsVisible(false), 800); // 800ms fade transition
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`splash-screen ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="splash-content">
        <h1 className="splash-logo">MODUBUILD</h1>
        <p className="splash-tagline">Architectural Precision. Refined Luxury.</p>
      </div>
    </div>
  );
}
