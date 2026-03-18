import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[var(--moka)] text-[var(--linen)] p-3 shadow-lg hover:bg-[var(--primary)] transition-all duration-300 hover:scale-105 z-50 group border border-[var(--pale)]"
          aria-label="Retour en haut"
          style={{ width: '48px', height: '48px' }}
        >
          <ArrowUp className="w-5 h-5 group-hover:transform group-hover:-translate-y-0.5 transition-transform duration-300" />
        </button>
      )}
    </>
  );
}
