import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[var(--charcoal)] px-4 md:px-12 py-8 md:py-12 flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center border-t-[3px] border-[var(--primary)]">
      <div className="font-['Playfair_Display'] font-black text-[22px] text-[var(--linen)]">
        nuance
        <span className="block font-['Lato'] font-thin text-[10px] md:text-[8px] tracking-[4px] uppercase text-[var(--primary)] mt-[3px]">
          décoration sur mesure
        </span>
      </div>

      <ul className="flex flex-wrap justify-center gap-5 md:gap-7 list-none">
        <li>
          <Link
            to="/realisations/rideaux"
            className="font-['Lato'] font-thin text-[10px] md:text-[9px] tracking-[2px] uppercase text-[var(--grege-l)] no-underline transition-colors hover:text-[var(--primary)]"
          >
            Nos réalisations
          </Link>
        </li>
        <li>
          <Link
            to="/showroom"
            className="font-['Lato'] font-thin text-[10px] md:text-[9px] tracking-[2px] uppercase text-[var(--grege-l)] no-underline transition-colors hover:text-[var(--primary)]"
          >
            Notre showroom
          </Link>
        </li>
        <li>
          <Link
            to="/histoire"
            className="font-['Lato'] font-thin text-[10px] md:text-[9px] tracking-[2px] uppercase text-[var(--grege-l)] no-underline transition-colors hover:text-[var(--primary)]"
          >
            Notre histoire
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="font-['Lato'] font-thin text-[10px] md:text-[9px] tracking-[2px] uppercase text-[var(--grege-l)] no-underline transition-colors hover:text-[var(--primary)]"
          >
            Contact
          </Link>
        </li>
      </ul>

      <span className="font-['Lato'] font-thin text-[10px] md:text-[8px] tracking-[1.5px] text-[var(--muted)]">
        © 2025 Nuance
      </span>
    </footer>
  );
}
