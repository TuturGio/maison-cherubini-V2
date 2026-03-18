import { useState } from 'react';
import { Link } from 'react-router-dom';
import InstagramFeed from '../components/InstagramFeed';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const visible = 3;
  const total = 4;

  const slide = (dir: number) => {
    const max = total - visible;
    setCurrentSlide((prev) => Math.max(0, Math.min(prev + dir, max)));
  };

  const slides = [
    {
      title: 'Rideaux',
      subtitle: 'Collections sur mesure',
      image: 'https://images.pexels.com/photos/6782436/pexels-photo-6782436.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/realisations/rideaux',
    },
    {
      title: 'Voilages',
      subtitle: 'Légèreté & transparence',
      image: 'https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/realisations/voilages',
    },
    {
      title: 'Banquettes',
      subtitle: 'Assises & mobilier',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
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
      <section className="bg-[var(--grege-p)] px-12 pb-12 animate-[fadeUp_0.6s_0.1s_ease_both]">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            style={{ transform: `translateX(-${(100 / visible) * currentSlide}%)` }}
          >
            {slides.map((s, i) => (
              <Link
                key={i}
                to={s.link}
                className="min-w-[33.333%] pr-[6px] last:pr-0 cursor-pointer no-underline"
              >
                <div className="w-full aspect-[3/4] block relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-[rgba(40,20,10,0.65)] after:via-[rgba(40,20,10,0.1)] after:to-transparent after:pointer-events-none">
                  <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute bottom-7 left-7 right-7 z-[2]">
                    <h3 className="font-['Playfair_Display'] font-black text-[30px] text-[var(--linen)] leading-none mb-[5px]">
                      {s.title}
                    </h3>
                    <p className="font-['Lato'] font-thin text-[8px] tracking-[3px] uppercase text-[rgba(248,244,240,0.65)]">
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

      <section className="py-[88px] px-12 bg-white text-center border-t border-b border-[var(--pale)] animate-[fadeUp_0.7s_0.2s_ease_both]">
        <div className="w-10 h-[1px] bg-[var(--primary)] mx-auto mb-8"></div>
        <p className="font-['Playfair_Display'] italic font-normal text-[30px] text-[var(--moka)] leading-[1.5] max-w-[680px] mx-auto mb-7">
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
          <div className="absolute bottom-8 left-8 right-8">
            <div className="font-['Playfair_Display'] font-black text-[32px] text-[var(--linen)] leading-[1.05]">
              Nos
              <br />
              réalisations
            </div>
            <span className="inline-block mt-3 font-['Lato'] font-thin text-[9px] tracking-[3px] uppercase text-[rgba(248,244,240,0.55)] border-b border-[rgba(248,244,240,0.25)] pb-[2px] transition-all group-hover:text-[rgba(248,244,240,0.9)] group-hover:border-[rgba(248,244,240,0.6)]">
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
          <div className="absolute bottom-8 left-8 right-8">
            <div className="font-['Playfair_Display'] font-black text-[32px] text-[var(--linen)] leading-[1.05]">
              Notre
              <br />
              showroom
            </div>
            <span className="inline-block mt-3 font-['Lato'] font-thin text-[9px] tracking-[3px] uppercase text-[rgba(248,244,240,0.55)] border-b border-[rgba(248,244,240,0.25)] pb-[2px] transition-all group-hover:text-[rgba(248,244,240,0.9)] group-hover:border-[rgba(248,244,240,0.6)]">
              Nous trouver →
            </span>
          </div>
        </Link>
      </section>

      <section className="grid grid-cols-2 bg-[var(--linen)]">
        <div className="aspect-square relative overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Notre histoire"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="px-14 py-16 flex flex-col justify-center">
          <span className="font-['Lato'] font-thin text-[9px] tracking-[4px] uppercase text-[var(--primary)] mb-5 block">
            Notre histoire
          </span>
          <h2 className="font-['Playfair_Display'] font-black text-[36px] text-[var(--moka)] leading-[1.1] mb-4">
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
