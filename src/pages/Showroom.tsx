import { Link } from 'react-router-dom';
import { MapPin, Clock, Phone } from 'lucide-react';
import CanvasImage from '../components/CanvasImage';
import { drawShowroom, drawFolds, drawWeave } from '../utils/canvasDrawing';

export default function Showroom() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[70vh] overflow-hidden">
        <CanvasImage draw={drawShowroom} className="absolute inset-0 w-full h-full block" />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(40,20,10,0.75)] via-[rgba(40,20,10,0.35)] to-transparent"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="px-12 pb-20 max-w-5xl">
            <span className="font-['Lato'] font-thin text-[9px] tracking-[4px] uppercase text-[rgba(248,244,240,0.7)] mb-4 block">
              Notre showroom
            </span>
            <h1 className="font-['Playfair_Display'] font-black text-[60px] text-[var(--linen)] leading-[1.05] mb-6">
              Un espace dédié
              <br />à vos inspirations
            </h1>
            <div className="w-20 h-[2px] bg-[var(--primary)]"></div>
          </div>
        </div>
      </section>

      <section className="px-12 py-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="font-['Playfair_Display'] font-black text-[36px] text-[var(--moka)] leading-[1.1] mb-6">
                Découvrez notre univers
              </h2>
              <div className="w-12 h-[1px] bg-[var(--primary)] mb-6"></div>
              <p className="font-['Jost'] font-light text-[14px] text-[var(--warm)] leading-[1.9] mb-6">
                Notre showroom de 200m² au cœur de Marseille est un lieu d'inspiration où vous pourrez
                découvrir l'ensemble de nos créations. Tissus nobles, échantillons de textures,
                réalisations finies — tout est pensé pour vous aider à visualiser votre projet.
              </p>
              <p className="font-['Jost'] font-light text-[14px] text-[var(--warm)] leading-[1.9] mb-8">
                Nos conseillers sont à votre disposition pour vous accompagner dans vos choix, vous
                présenter nos collections et répondre à toutes vos questions techniques.
              </p>
              <Link
                to="/contact"
                className="inline-block font-['Lato'] font-light text-[10px] tracking-[3px] uppercase text-[var(--moka)] border-b border-[var(--primary)] pb-[3px] no-underline transition-colors hover:text-[var(--primary)]"
              >
                Prendre rendez-vous
              </Link>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin size={24} className="text-[var(--primary)] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-['Lato'] font-light text-[11px] tracking-[2px] uppercase text-[var(--primary)] mb-2">
                    Adresse
                  </p>
                  <p className="font-['Jost'] font-light text-[14px] text-[var(--warm)] leading-[1.7]">
                    15 Rue de la République
                    <br />
                    13001 Marseille, France
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock size={24} className="text-[var(--primary)] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-['Lato'] font-light text-[11px] tracking-[2px] uppercase text-[var(--primary)] mb-2">
                    Horaires d'ouverture
                  </p>
                  <p className="font-['Jost'] font-light text-[14px] text-[var(--warm)] leading-[1.7]">
                    Lundi - Vendredi : 9h00 - 18h00
                    <br />
                    Samedi : 10h00 - 17h00
                    <br />
                    Dimanche : Fermé
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone size={24} className="text-[var(--primary)] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-['Lato'] font-light text-[11px] tracking-[2px] uppercase text-[var(--primary)] mb-2">
                    Téléphone
                  </p>
                  <p className="font-['Jost'] font-light text-[14px] text-[var(--warm)] leading-[1.7]">
                    04 91 XX XX XX
                  </p>
                </div>
              </div>

              <div className="bg-[var(--linen)] p-6 mt-8">
                <p className="font-['Lato'] font-light text-[11px] tracking-[2px] uppercase text-[var(--primary)] mb-3">
                  Conseil
                </p>
                <p className="font-['Jost'] font-light text-[13px] text-[var(--warm)] leading-[1.8]">
                  Nous vous recommandons de prendre rendez-vous pour bénéficier d'un conseil
                  personnalisé et d'une attention dédiée.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--linen)] px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-['Playfair_Display'] font-black text-[40px] text-[var(--moka)] leading-[1.1] mb-4">
              Ce que vous découvrirez
            </h2>
            <div className="w-12 h-[1px] bg-[var(--primary)] mx-auto"></div>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="aspect-square relative overflow-hidden mb-6">
                <CanvasImage
                  draw={(c) => drawFolds(c, '#C0B4A4', '#D4CAB8', '#A89888', 5)}
                  className="absolute inset-0 w-full h-full block"
                />
              </div>
              <h3 className="font-['Playfair_Display'] font-black text-[22px] text-[var(--moka)] leading-[1.1] mb-3">
                Collections de tissus
              </h3>
              <p className="font-['Jost'] font-light text-[13px] text-[var(--warm)] leading-[1.8]">
                Plus de 500 références de tissus d'ameublement, voilages et matières techniques
              </p>
            </div>

            <div className="text-center">
              <div className="aspect-square relative overflow-hidden mb-6">
                <CanvasImage
                  draw={(c) => drawWeave(c, '#B8A898', '#90786A')}
                  className="absolute inset-0 w-full h-full block"
                />
              </div>
              <h3 className="font-['Playfair_Display'] font-black text-[22px] text-[var(--moka)] leading-[1.1] mb-3">
                Réalisations finies
              </h3>
              <p className="font-['Jost'] font-light text-[13px] text-[var(--warm)] leading-[1.8]">
                Exemples de nos créations pour vous inspirer et visualiser les possibilités
              </p>
            </div>

            <div className="text-center">
              <div className="aspect-square relative overflow-hidden mb-6">
                <CanvasImage draw={drawShowroom} className="absolute inset-0 w-full h-full block" />
              </div>
              <h3 className="font-['Playfair_Display'] font-black text-[22px] text-[var(--moka)] leading-[1.1] mb-3">
                Conseil personnalisé
              </h3>
              <p className="font-['Jost'] font-light text-[13px] text-[var(--warm)] leading-[1.8]">
                Nos experts vous accompagnent pour définir le projet qui vous correspond
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-12 py-16 bg-[var(--moka)] text-center">
        <h2 className="font-['Playfair_Display'] italic font-normal text-[32px] text-[var(--linen)] leading-[1.5] mb-8">
          Venez nous rencontrer
        </h2>
        <p className="font-['Jost'] font-light text-[14px] text-[rgba(248,244,240,0.8)] leading-[1.9] max-w-2xl mx-auto mb-8">
          Notre équipe vous accueille avec plaisir pour échanger sur votre projet et vous faire découvrir
          notre univers.
        </p>
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
