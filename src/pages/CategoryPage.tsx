import { Link } from 'react-router-dom';
import CanvasImage from '../components/CanvasImage';

interface CategoryPageProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  heroDraw: (canvas: HTMLCanvasElement) => void;
  galleryDraws: Array<(canvas: HTMLCanvasElement) => void>;
}

export default function CategoryPage({
  title,
  subtitle,
  description,
  features,
  heroDraw,
  galleryDraws,
}: CategoryPageProps) {
  return (
    <div className="min-h-screen">
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[60vh] bg-[var(--grege-p)]">
        <div className="flex flex-col justify-center px-8 py-16 md:px-16 md:py-20 order-2 md:order-1">
          <span className="font-['Lato'] font-thin text-[9px] tracking-[4px] uppercase text-[var(--primary)] mb-5 block">
            {subtitle}
          </span>
          <h1 className="font-['Playfair_Display'] font-black text-[44px] md:text-[60px] text-[var(--moka)] leading-[1.05] mb-6">
            {title}
          </h1>
          <div className="w-16 h-[2px] bg-[var(--primary)] mb-8"></div>
          <p className="font-['Jost'] font-light text-[14px] text-[var(--warm)] leading-[1.9] max-w-md">
            {description}
          </p>
        </div>
        <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto order-1 md:order-2">
          <CanvasImage draw={heroDraw} className="absolute inset-0 w-full h-full block" />
        </div>
      </section>

      <section className="px-8 md:px-12 py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            <div className="flex-1">
              <h3 className="font-['Lato'] font-light text-[11px] tracking-[3px] uppercase text-[var(--primary)] mb-6">
                Nos prestations
              </h3>
              <ul className="space-y-4">
                {features.map((feature, i) => (
                  <li
                    key={i}
                    className="font-['Jost'] font-light text-[14px] text-[var(--warm)] leading-[1.7] flex items-start gap-3"
                  >
                    <span className="text-[var(--primary)] mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-none md:w-64 flex flex-col gap-4 md:pt-10">
              <Link
                to="/contact"
                className="text-center font-['Lato'] font-light text-[10px] tracking-[3px] uppercase bg-[var(--moka)] text-[var(--linen)] py-4 px-8 no-underline transition-colors hover:bg-[var(--charcoal)]"
              >
                Prendre RDV
              </Link>
              <Link
                to="/contact"
                className="text-center font-['Lato'] font-light text-[10px] tracking-[3px] uppercase border border-[var(--moka)] text-[var(--moka)] py-4 px-8 no-underline transition-colors hover:bg-[var(--moka)] hover:text-[var(--linen)]"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--linen)] px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-['Playfair_Display'] font-black text-[36px] md:text-[40px] text-[var(--moka)] leading-[1.1] mb-4">
              Nos réalisations
            </h2>
            <div className="w-12 h-[1px] bg-[var(--primary)] mx-auto"></div>
          </div>

          {galleryDraws.length > 0 && (
            <div className="flex flex-col gap-4">

              {galleryDraws[0] && (
                <div className="relative overflow-hidden aspect-[16/7] group cursor-pointer w-full">
                  <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.03]">
                    <CanvasImage draw={galleryDraws[0]} className="absolute inset-0 w-full h-full block" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(40,20,10,0.35)] to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                </div>
              )}

              {galleryDraws.length > 1 && (
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr_1fr] gap-4">
                  {galleryDraws[1] && (
                    <div className="relative overflow-hidden aspect-[3/4] group cursor-pointer">
                      <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.03]">
                        <CanvasImage draw={galleryDraws[1]} className="absolute inset-0 w-full h-full block" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(40,20,10,0.35)] to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                    </div>
                  )}
                  {galleryDraws[2] && (
                    <div className="relative overflow-hidden aspect-[4/5] md:aspect-auto group cursor-pointer">
                      <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.03]">
                        <CanvasImage draw={galleryDraws[2]} className="absolute inset-0 w-full h-full block" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(40,20,10,0.35)] to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                    </div>
                  )}
                  {galleryDraws[3] && (
                    <div className="relative overflow-hidden aspect-[3/4] group cursor-pointer">
                      <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.03]">
                        <CanvasImage draw={galleryDraws[3]} className="absolute inset-0 w-full h-full block" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(40,20,10,0.35)] to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                    </div>
                  )}
                </div>
              )}

              {galleryDraws.length > 4 && (
                <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-4">
                  {galleryDraws[4] && (
                    <div className="relative overflow-hidden aspect-[16/9] group cursor-pointer">
                      <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.03]">
                        <CanvasImage draw={galleryDraws[4]} className="absolute inset-0 w-full h-full block" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(40,20,10,0.35)] to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                    </div>
                  )}
                  {galleryDraws[5] && (
                    <div className="relative overflow-hidden aspect-[3/4] md:aspect-auto group cursor-pointer">
                      <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.03]">
                        <CanvasImage draw={galleryDraws[5]} className="absolute inset-0 w-full h-full block" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(40,20,10,0.35)] to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                    </div>
                  )}
                </div>
              )}

              {galleryDraws.length > 6 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {galleryDraws.slice(6).map((draw, i) => (
                    <div key={i + 6} className="relative overflow-hidden aspect-square group cursor-pointer">
                      <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.03]">
                        <CanvasImage draw={draw} className="absolute inset-0 w-full h-full block" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(40,20,10,0.35)] to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          )}
        </div>
      </section>

      <section className="px-12 py-16 bg-[var(--moka)] text-center">
        <h2 className="font-['Playfair_Display'] italic font-normal text-[32px] text-[var(--linen)] leading-[1.5] mb-8">
          Prêt à donner vie à votre projet ?
        </h2>
        <Link
          to="/contact"
          className="inline-block font-['Lato'] font-light text-[10px] tracking-[3px] uppercase text-[var(--moka)] bg-[var(--linen)] py-4 px-8 no-underline transition-colors hover:bg-[var(--pale)]"
        >
          Prendre rendez-vous
        </Link>
      </section>
    </div>
  );
}
