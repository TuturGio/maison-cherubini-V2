import { Link } from 'react-router-dom';
import CanvasImage from '../components/CanvasImage';
import { drawFolds, drawShowroom, drawWeave } from '../utils/canvasDrawing';

export default function Histoire() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[70vh] overflow-hidden">
        <CanvasImage
          draw={(c) => drawFolds(c, '#C8B4A4', '#DCCCC0', '#B0988A', 6)}
          className="absolute inset-0 w-full h-full block"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(40,20,10,0.75)] via-[rgba(40,20,10,0.35)] to-transparent"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="px-12 pb-20 max-w-5xl">
            <span className="font-['Lato'] font-thin text-[9px] tracking-[4px] uppercase text-[rgba(248,244,240,0.7)] mb-4 block">
              Notre histoire
            </span>
            <h1 className="font-['Playfair_Display'] font-black text-[60px] text-[var(--linen)] leading-[1.05] mb-6">
              Un savoir-faire
              <br />
              transmis avec soin
            </h1>
            <div className="w-20 h-[2px] bg-[var(--primary)]"></div>
          </div>
        </div>
      </section>

      <section className="px-12 py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="font-['Playfair_Display'] italic font-normal text-[28px] text-[var(--moka)] leading-[1.7] mb-16 text-center">
            Depuis plus de vingt ans, Nuance façonne des intérieurs d'exception, guidée par la passion
            du détail et l'amour des belles matières.
          </p>

          <div className="grid grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="font-['Playfair_Display'] font-black text-[32px] text-[var(--moka)] leading-[1.1] mb-6">
                Une passion familiale
              </h2>
              <div className="w-12 h-[1px] bg-[var(--primary)] mb-6"></div>
              <p className="font-['Jost'] font-light text-[14px] text-[var(--warm)] leading-[1.9] mb-6">
                Tout commence dans un petit atelier marseillais, où chaque rideau était cousu main,
                chaque pli ajusté avec précision. Cette attention méticuleuse aux détails est devenue
                notre signature, transmise de génération en génération.
              </p>
              <p className="font-['Jost'] font-light text-[14px] text-[var(--warm)] leading-[1.9]">
                Aujourd'hui, notre équipe perpétue cet héritage avec la même exigence de qualité, en
                alliant techniques traditionnelles et innovations contemporaines.
              </p>
            </div>

            <div>
              <h2 className="font-['Playfair_Display'] font-black text-[32px] text-[var(--moka)] leading-[1.1] mb-6">
                Un engagement durable
              </h2>
              <div className="w-12 h-[1px] bg-[var(--primary)] mb-6"></div>
              <p className="font-['Jost'] font-light text-[14px] text-[var(--warm)] leading-[1.9] mb-6">
                Chaque projet est une rencontre, un dialogue entre vos aspirations et notre expertise.
                Nous prenons le temps d'écouter, de comprendre votre univers, pour créer des pièces qui
                vous ressemblent vraiment.
              </p>
              <p className="font-['Jost'] font-light text-[14px] text-[var(--warm)] leading-[1.9]">
                Notre engagement va au-delà de la simple confection : nous vous accompagnons dans la
                durée, de la conception à l'entretien de vos créations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-4 px-12 py-16 bg-[var(--linen)]">
        <div className="aspect-[3/4] relative overflow-hidden">
          <CanvasImage
            draw={(c) => drawFolds(c, '#C0B4A4', '#D4CAB8', '#A89888', 5)}
            className="absolute inset-0 w-full h-full block"
          />
        </div>
        <div className="aspect-[3/4] relative overflow-hidden">
          <CanvasImage draw={drawShowroom} className="absolute inset-0 w-full h-full block" />
        </div>
        <div className="aspect-[3/4] relative overflow-hidden">
          <CanvasImage
            draw={(c) => drawWeave(c, '#B8A898', '#90786A')}
            className="absolute inset-0 w-full h-full block"
          />
        </div>
      </section>

      <section className="px-12 py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-12 mb-20">
            <div className="text-center">
              <div className="font-['Playfair_Display'] font-black text-[48px] text-[var(--primary)] leading-none mb-3">
                20+
              </div>
              <p className="font-['Lato'] font-light text-[11px] tracking-[2px] uppercase text-[var(--warm)]">
                Années d'expérience
              </p>
            </div>
            <div className="text-center">
              <div className="font-['Playfair_Display'] font-black text-[48px] text-[var(--primary)] leading-none mb-3">
                500+
              </div>
              <p className="font-['Lato'] font-light text-[11px] tracking-[2px] uppercase text-[var(--warm)]">
                Projets réalisés
              </p>
            </div>
            <div className="text-center">
              <div className="font-['Playfair_Display'] font-black text-[48px] text-[var(--primary)] leading-none mb-3">
                100%
              </div>
              <p className="font-['Lato'] font-light text-[11px] tracking-[2px] uppercase text-[var(--warm)]">
                Sur mesure
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="font-['Playfair_Display'] font-black text-[36px] text-[var(--moka)] leading-[1.1] mb-6">
              Prêt à créer ensemble ?
            </h2>
            <p className="font-['Jost'] font-light text-[14px] text-[var(--warm)] leading-[1.9] mb-8 max-w-2xl mx-auto">
              Venez nous rencontrer dans notre showroom ou contactez-nous pour discuter de votre
              projet. Nous serons ravis de vous accompagner dans la réalisation de vos envies.
            </p>
            <Link
              to="/contact"
              className="inline-block font-['Lato'] font-light text-[10px] tracking-[3px] uppercase text-[var(--linen)] bg-[var(--moka)] py-4 px-8 no-underline transition-colors hover:bg-[var(--charcoal)]"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
