import { useState, useRef, TouchEvent } from 'react';
import { Link } from 'react-router-dom';
import InstagramFeed from '../components/InstagramFeed';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const visible = 3;
  const total = 4;
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slide = (dir: number) => {
    const max = total - visible;
    setCurrentSlide((prev) => Math.max(0, Math.min(prev + dir, max)));
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - next slide
        setCurrentSlide((prev) => Math.min(prev + 1, total - 1));
      } else {
        // Swipe right - previous slide
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  const slides = [
    {
      title: 'Rideaux',
      subtitle: 'Collections sur mesure',
      image: `${import.meta.env.BASE_URL}rideau-a-oeillets-dores_NINO_009911_J19F_4.webp`,
      link: '/realisations/rideaux',
    },
    {
      title: 'Voilages',
      subtitle: 'Légèreté & transparence',
      image: `${import.meta.env.BASE_URL}voilage-a-galon-fronceur_SHADOW_000475_W_4.webp`,
      link: '/realisations/voilages',
    },
    {
      title: 'Banquettes',
      subtitle: 'Assises & mobilier',
      image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/realisations/banquettes',
    },
    {
      title: 'Bateaux',
      subtitle: 'Sellerie nautique',
      image: 'https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/realisations/bateaux',
    },
  ];


  return (
    <div className="min-h-screen">
      <section className="bg-[var(--grege-p)] px-12 pb-12 animate-[fadeUp_0.6s_0.1s_ease_both] hidden md:block">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            style={{ transform: `translateX(-${(100 / visible) * currentSlide}%)` }}
          >
            {slides.map((s, i) => (
              <Link
                key={i}
                to={s.link}
                className="min-w-[33.333%] pr-[6px] last:pr-0 cursor-pointer no-underline group"
              >
                <div className="w-full aspect-[3/4] block relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-[rgba(40,20,10,0.65)] after:via-[rgba(40,20,10,0.1)] after:to-transparent after:pointer-events-none">
                  <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110" />
                  <div className="absolute bottom-7 left-7 right-7 z-[2]">
                    <h3 className="font-['Playfair_Display'] font-black text-[30px] text-[var(--linen)] leading-none mb-[5px]">
                      {s.title}
                    </h3>
                    <p className="font-['Lato'] font-normal text-[8px] tracking-[3px] uppercase text-[var(--linen)]">
                      {s.subtitle}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="absolute bottom-7 right-[6px] flex gap-[6px] z-10">
            <button
              onClick={() => slide(-1)}
              className="w-[42px] h-[42px] bg-[rgba(248,244,240,0.15)] border border-[rgba(248,244,240,0.45)] cursor-pointer flex items-center justify-center transition-all text-[var(--linen)] text-[15px] hover:bg-[var(--moka)] hover:border-[var(--moka)]"
            >
              ←
            </button>
            <button
              onClick={() => slide(1)}
              className="w-[42px] h-[42px] bg-[rgba(248,244,240,0.15)] border border-[rgba(248,244,240,0.45)] cursor-pointer flex items-center justify-center transition-all text-[var(--linen)] text-[15px] hover:bg-[var(--moka)] hover:border-[var(--moka)]"
            >
              →
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[var(--grege-p)] pt-4 pb-8 animate-[fadeUp_0.6s_0.1s_ease_both] md:hidden">
        <div className="flex gap-2 px-4 mb-4 overflow-x-auto scrollbar-hide">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`px-4 py-2 rounded-full font-['Lato'] font-light text-[10px] tracking-[1.5px] uppercase whitespace-nowrap transition-all border ${
                currentSlide === i
                  ? 'bg-[var(--moka)] text-[var(--linen)] border-[var(--moka)]'
                  : 'bg-transparent text-[var(--warm)] border-[var(--warm)] hover:border-[var(--moka)] hover:text-[var(--moka)]'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        <div
          className="relative px-4"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Link
            to={slides[currentSlide].link}
            className="block relative overflow-hidden rounded-lg no-underline"
          >
            <div className="w-full aspect-[4/5] relative after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-[rgba(40,20,10,0.7)] after:via-[rgba(40,20,10,0.1)] after:to-transparent after:pointer-events-none">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 z-[2]">
                <h3 className="font-['Playfair_Display'] font-black text-[28px] text-[var(--linen)] leading-none mb-2 uppercase">
                  {slides[currentSlide].title}
                </h3>
                <p className="font-['Lato'] font-normal text-[11px] tracking-[2.5px] uppercase text-[rgba(248,244,240,0.85)]">
                  {slides[currentSlide].subtitle}
                </p>
              </div>
            </div>
          </Link>

          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === i
                    ? 'w-8 bg-[var(--moka)]'
                    : 'w-2 bg-[var(--warm)] opacity-40'
                }`}
                aria-label={`Aller à la slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-[88px] px-4 md:px-12 bg-white text-center border-t border-b border-[var(--pale)] animate-[fadeUp_0.7s_0.2s_ease_both]">
        <div className="w-10 h-[1px] bg-[var(--primary)] mx-auto mb-8"></div>
        <p className="font-['Playfair_Display'] italic font-normal text-[20px] md:text-[30px] text-[var(--moka)] leading-[1.5] max-w-[680px] mx-auto mb-7 px-4">
          Chaque espace est une histoire unique,
          <br />
          façonnée dans la matière et la lumière.
        </p>
        <span className="font-['Lato'] font-thin text-[9px] tracking-[4px] uppercase text-[var(--primary)] block">
          Rideaux · Voilages · Stores · Revêtements · Yachting
        </span>
      </section>

      <section className="grid grid-cols-2 gap-[2px] bg-[var(--pale)]">
        <Link
          to="/realisations/rideaux"
          className="relative overflow-hidden cursor-pointer aspect-[4/3] no-underline group"
        >
          <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105">
            <img
              src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Nos réalisations"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(40,20,10,0.6)] to-transparent transition-opacity group-hover:opacity-85"></div>
          <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8">
            <div className="font-['Playfair_Display'] font-black text-[24px] md:text-[32px] text-[var(--linen)] leading-[1.05]">
              Nos
              <br />
              réalisations
            </div>
            <span className="inline-block mt-2 md:mt-3 font-['Lato'] font-thin text-[11px] md:text-[9px] tracking-[2.5px] md:tracking-[3px] uppercase text-[rgba(248,244,240,0.75)] md:text-[rgba(248,244,240,0.55)] border-b border-[rgba(248,244,240,0.25)] pb-[2px] transition-all group-hover:text-[rgba(248,244,240,0.9)] group-hover:border-[rgba(248,244,240,0.6)]">
              Découvrir →
            </span>
          </div>
        </Link>

        <Link
          to="/showroom"
          className="relative overflow-hidden cursor-pointer aspect-[4/3] no-underline group"
        >
          <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105">
            <img
              src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Notre showroom"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(40,20,10,0.6)] to-transparent transition-opacity group-hover:opacity-85"></div>
          <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8">
            <div className="font-['Playfair_Display'] font-black text-[24px] md:text-[32px] text-[var(--linen)] leading-[1.05]">
              Notre
              <br />
              showroom
            </div>
            <span className="inline-block mt-2 md:mt-3 font-['Lato'] font-thin text-[11px] md:text-[9px] tracking-[2.5px] md:tracking-[3px] uppercase text-[rgba(248,244,240,0.75)] md:text-[rgba(248,244,240,0.55)] border-b border-[rgba(248,244,240,0.25)] pb-[2px] transition-all group-hover:text-[rgba(248,244,240,0.9)] group-hover:border-[rgba(248,244,240,0.6)]">
              Nous trouver →
            </span>
          </div>
        </Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 bg-[var(--linen)]">
        <div className="aspect-square md:aspect-auto relative overflow-hidden">
          <img
            src={`${import.meta.env.BASE_URL}tapis_de_sol_ANDREI_009531_Z5_2.webp`}
            alt="Notre histoire"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="px-6 py-10 md:px-14 md:py-16 flex flex-col justify-center">
          <span className="font-['Lato'] font-thin text-[9px] tracking-[4px] uppercase text-[var(--primary)] mb-5 block">
            Notre histoire
          </span>
          <h2 className="font-['Playfair_Display'] font-black text-[28px] md:text-[36px] text-[var(--moka)] leading-[1.1] mb-4">
            Un savoir-faire
            <br />
            transmis avec soin
          </h2>
          <div className="w-8 h-[1px] bg-[var(--primary)] mb-5"></div>
          <p className="font-['Jost'] font-light text-[13px] text-[var(--warm)] leading-[1.9] mb-8">
            Depuis plus de vingt ans, Nuance façonne des intérieurs d'exception. Chaque création naît
            d'une écoute attentive, d'un choix minutieux des matières et d'un artisanat ancré dans la
            tradition. Rideaux, voilages, banquettes, revêtements — chaque pièce est pensée pour vous,
            unique et sur mesure. Notre atelier, basé à Marseille, accueille une équipe de passionnés
            qui donnent vie à vos espaces avec précision et sensibilité.
          </p>
          <Link
            to="/histoire"
            className="inline-block font-['Lato'] font-light text-[9px] tracking-[3px] uppercase text-[var(--moka)] border-b border-[var(--primary)] pb-[3px] no-underline transition-colors hover:text-[var(--primary)] w-fit"
          >
            Découvrir notre histoire
          </Link>
        </div>
      </section>

      <InstagramFeed />
    </div>
  );
}
