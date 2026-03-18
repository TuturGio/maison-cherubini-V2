import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="sticky top-0 z-[100] bg-white border-b border-[var(--pale)] flex items-center justify-between px-12 py-6 animate-[fadeUp_0.5s_ease_both]">
      <Link to="/" className="no-underline">
        <div className="font-['Playfair_Display'] font-black text-[32px] text-[var(--moka)] tracking-[-0.5px] leading-none flex flex-col items-start">
          nuance
          <span className="font-['Lato'] font-thin text-[8px] tracking-[4px] uppercase text-[var(--primary)] mt-[2px]">
            décoration sur mesure
          </span>
        </div>
      </Link>

      <ul className="flex gap-9 list-none items-center">
        <li
          className="relative"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <button className="font-['Lato'] font-light text-[10px] tracking-[2.5px] uppercase text-[var(--warm)] no-underline transition-colors hover:text-[var(--moka)] flex items-center gap-1 bg-transparent border-none cursor-pointer py-2">
            Nos réalisations
            <ChevronDown size={12} className={`transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
          </button>

          {showDropdown && (
            <div className="absolute top-full left-0 mt-0 bg-white border border-[var(--pale)] shadow-lg min-w-[200px] py-2">
              <Link
                to="/realisations/rideaux"
                className="block px-6 py-3 font-['Lato'] font-light text-[10px] tracking-[2.5px] uppercase text-[var(--warm)] no-underline transition-colors hover:text-[var(--moka)] hover:bg-[var(--linen)]"
              >
                Rideaux
              </Link>
              <Link
                to="/realisations/voilages"
                className="block px-6 py-3 font-['Lato'] font-light text-[10px] tracking-[2.5px] uppercase text-[var(--warm)] no-underline transition-colors hover:text-[var(--moka)] hover:bg-[var(--linen)]"
              >
                Voilages
              </Link>
              <Link
                to="/realisations/banquettes"
                className="block px-6 py-3 font-['Lato'] font-light text-[10px] tracking-[2.5px] uppercase text-[var(--warm)] no-underline transition-colors hover:text-[var(--moka)] hover:bg-[var(--linen)]"
              >
                Banquettes
              </Link>
              <Link
                to="/realisations/bateaux"
                className="block px-6 py-3 font-['Lato'] font-light text-[10px] tracking-[2.5px] uppercase text-[var(--warm)] no-underline transition-colors hover:text-[var(--moka)] hover:bg-[var(--linen)]"
              >
                Bateaux
              </Link>
            </div>
          )}
        </li>

        <li>
          <Link
            to="/showroom"
            className="font-['Lato'] font-light text-[10px] tracking-[2.5px] uppercase text-[var(--warm)] no-underline transition-colors hover:text-[var(--moka)]"
          >
            Notre showroom
          </Link>
        </li>

        <li>
          <Link
            to="/histoire"
            className="font-['Lato'] font-light text-[10px] tracking-[2.5px] uppercase text-[var(--warm)] no-underline transition-colors hover:text-[var(--moka)]"
          >
            Notre histoire
          </Link>
        </li>
      </ul>

      <Link
        to="/contact"
        className="font-['Lato'] font-light text-[10px] tracking-[2.5px] uppercase text-[var(--linen)] bg-[var(--moka)] border-none py-3 px-6 cursor-pointer no-underline transition-colors hover:bg-[var(--charcoal)]"
      >
        Prendre rendez-vous
      </Link>
    </nav>
  );
}
