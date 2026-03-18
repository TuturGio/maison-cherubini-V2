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
      <section className="relative h-[60vh] overflow-hidden">
        <CanvasImage draw={heroDraw} className="absolute inset-0 w-full h-full block" />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(40,20,10,0.7)] via-[rgba(40,20,10,0.3)] to-transparent"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="px-12 pb-16 max-w-5xl">
            <span className="font-['Lato'] font-thin text-[9px] tracking-[4px] uppercase text-[rgba(248,244,240,0.7)] mb-4 block">
              {subtitle}
            </span>
            <h1 className="font-['Playfair_Display'] font-black text-[56px] text-[var(--linen)] leading-[1.05] mb-4">
              {title}
            </h1>
            <div className="w-16 h-[2px] bg-[var(--primary)]"></div>
          </div>
        </div>
      </section>

      <section className="px-12 py-20 bg-white max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-16">
          <div>
            <h2 className="font-['Playfair_Display'] font-black text-[36px] text-[var(--moka)] leading-[1.1] mb-6">
              Un savoir-faire
              <br />
              d'exception
            </h2>
            <div className="w-12 h-[1px] bg-[var(--primary)] mb-6"></div>
            <p className="font-['Jost'] font-light text-[14px] text-[var(--warm)] leading-[1.9] mb-8">
              {description}
            </p>
            <Link
              to="/contact"
              className="inline-block font-['Lato'] font-light text-[10px] tracking-[3px] uppercase text-[var(--moka)] border-b border-[var(--primary)] pb-[3px] no-underline transition-colors hover:text-[var(--primary)]"
            >
              Demander un devis
            </Link>
          </div>

          <div>
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
        </div>
      </section>

      <section className="bg-[var(--linen)] px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-['Playfair_Display'] font-black text-[40px] text-[var(--moka)] leading-[1.1] mb-4">
              Nos réalisations
            </h2>
            <div className="w-12 h-[1px] bg-[var(--primary)] mx-auto"></div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {galleryDraws.map((draw, i) => (
              <div key={i} className="aspect-[3/4] relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105">
                  <CanvasImage draw={draw} className="absolute inset-0 w-full h-full block" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(40,20,10,0.4)] to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              </div>
            ))}
          </div>
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
