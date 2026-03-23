import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);

  return (
    <nav className="sticky top-0 z-[100] bg-white border-b border-[var(--pale)] animate-[fadeUp_0.5s_ease_both]">
      <div className="flex items-center justify-between px-4 md:px-12 py-4 md:py-6">
        <Link to="/" className="no-underline" onClick={() => setShowMobileMenu(false)}>
          <div className="font-['Playfair_Display'] font-black text-[24px] md:text-[32px] text-[var(--moka)] tracking-[-0.5px] leading-none flex flex-col items-start">
            nuance
            <span className="font-['Lato'] font-thin text-[7px] md:text-[8px] tracking-[3px] md:tracking-[4px] uppercase text-[var(--warm)] mt-[2px]">
              décoration sur mesure
            </span>
          </div>
        </Link>

        <ul className="hidden md:flex gap-9 list-none items-center">
          <li
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button className="font-['Lato'] font-light text-[10px] tracking-[2.5px] uppercase text-[var(--moka)] no-underline transition-colors hover:text-[var(--charcoal)] flex items-center gap-1 bg-transparent border-none cursor-pointer py-2">
              Nos réalisations
              <ChevronDown size={12} className={`transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
            </button>

            {showDropdown && (
              <div className="absolute top-full left-0 mt-0 bg-white border border-[var(--pale)] shadow-lg min-w-[200px] py-2">
                <Link
                  to="/realisations/rideaux"
                  className="block px-6 py-3 font-['Lato'] font-light text-[10px] tracking-[2.5px] uppercase text-[var(--moka)] no-underline transition-colors hover:text-[var(--charcoal)] hover:bg-[var(--linen)]"
                >
                  Rideaux
                </Link>
                <Link
                  to="/realisations/voilages"
                  className="block px-6 py-3 font-['Lato'] font-light text-[10px] tracking-[2.5px] uppercase text-[var(--moka)] no-underline transition-colors hover:text-[var(--charcoal)] hover:bg-[var(--linen)]"
                >
                  Voilages
                </Link>
                <Link
                  to="/realisations/banquettes"
                  className="block px-6 py-3 font-['Lato'] font-light text-[10px] tracking-[2.5px] uppercase text-[var(--moka)] no-underline transition-colors hover:text-[var(--charcoal)] hover:bg-[var(--linen)]"
                >
                  Banquettes
                </Link>
                <Link
                  to="/realisations/bateaux"
                  className="block px-6 py-3 font-['Lato'] font-light text-[10px] tracking-[2.5px] uppercase text-[var(--moka)] no-underline transition-colors hover:text-[var(--charcoal)] hover:bg-[var(--linen)]"
                >
                  Bateaux
                </Link>
              </div>
            )}
          </li>

          <li>
            <Link
              to="/showroom"
              className="font-['Lato'] font-light text-[10px] tracking-[2.5px] uppercase text-[var(--moka)] no-underline transition-colors hover:text-[var(--charcoal)]"
            >
              Notre showroom
            </Link>
          </li>

          <li>
            <Link
              to="/histoire"
              className="font-['Lato'] font-light text-[10px] tracking-[2.5px] uppercase text-[var(--moka)] no-underline transition-colors hover:text-[var(--charcoal)]"
            >
              Notre histoire
            </Link>
          </li>
        </ul>

        <Link
          to="/contact"
          className="hidden md:inline-block font-['Lato'] font-light text-[10px] tracking-[2.5px] uppercase text-[var(--linen)] bg-[var(--moka)] border-none py-3 px-6 cursor-pointer no-underline transition-colors hover:bg-[var(--charcoal)]"
        >
          Prendre rendez-vous
        </Link>

        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="md:hidden bg-transparent border-none cursor-pointer text-[var(--moka)] p-2"
          aria-label="Menu"
        >
          {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {showMobileMenu && (
        <div className="md:hidden bg-white border-t border-[var(--pale)] px-4 py-4">
          <ul className="list-none space-y-4">
            <li>
              <button
                onClick={() => setShowMobileDropdown(!showMobileDropdown)}
                className="w-full text-left font-['Lato'] font-light text-[11px] tracking-[2px] uppercase text-[var(--moka)] no-underline transition-colors flex items-center justify-between bg-transparent border-none cursor-pointer py-2"
              >
                Nos réalisations
                <ChevronDown size={14} className={`transition-transform ${showMobileDropdown ? 'rotate-180' : ''}`} />
              </button>
              {showMobileDropdown && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    to="/realisations/rideaux"
                    onClick={() => setShowMobileMenu(false)}
                    className="block py-2 font-['Lato'] font-light text-[11px] tracking-[2px] uppercase text-[var(--warm)] no-underline transition-colors"
                  >
                    Rideaux
                  </Link>
                  <Link
                    to="/realisations/voilages"
                    onClick={() => setShowMobileMenu(false)}
                    className="block py-2 font-['Lato'] font-light text-[11px] tracking-[2px] uppercase text-[var(--warm)] no-underline transition-colors"
                  >
                    Voilages
                  </Link>
                  <Link
                    to="/realisations/banquettes"
                    onClick={() => setShowMobileMenu(false)}
                    className="block py-2 font-['Lato'] font-light text-[11px] tracking-[2px] uppercase text-[var(--warm)] no-underline transition-colors"
                  >
                    Banquettes
                  </Link>
                  <Link
                    to="/realisations/bateaux"
                    onClick={() => setShowMobileMenu(false)}
                    className="block py-2 font-['Lato'] font-light text-[11px] tracking-[2px] uppercase text-[var(--warm)] no-underline transition-colors"
                  >
                    Bateaux
                  </Link>
                </div>
              )}
            </li>

            <li>
              <Link
                to="/showroom"
                onClick={() => setShowMobileMenu(false)}
                className="block py-2 font-['Lato'] font-light text-[11px] tracking-[2px] uppercase text-[var(--moka)] no-underline transition-colors"
              >
                Notre showroom
              </Link>
            </li>

            <li>
              <Link
                to="/histoire"
                onClick={() => setShowMobileMenu(false)}
                className="block py-2 font-['Lato'] font-light text-[11px] tracking-[2px] uppercase text-[var(--moka)] no-underline transition-colors"
              >
                Notre histoire
              </Link>
            </li>

            <li className="pt-2">
              <Link
                to="/contact"
                onClick={() => setShowMobileMenu(false)}
                className="block text-center font-['Lato'] font-light text-[11px] tracking-[2px] uppercase text-[var(--linen)] bg-[var(--moka)] border-none py-3 px-6 cursor-pointer no-underline transition-colors"
              >
                Prendre rendez-vous
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
