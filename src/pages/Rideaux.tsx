import CategoryPage from './CategoryPage';
import { drawFolds, drawWeave } from '../utils/canvasDrawing';

const matieres = [
  { name: 'Lin', detail: 'Naturel, respirant, texturé — pour un esprit authentique et chaleureux.' },
  { name: 'Velours', detail: 'Profondeur de couleur et douceur au toucher, idéal pour les ambiances cosy.' },
  { name: 'Tweed', detail: 'Tissu structuré à l\'âme british, parfait pour un intérieur raffiné.' },
  { name: 'Coton', detail: 'Léger et polyvalent, il s\'adapte à tous les styles et toutes les pièces.' },
  { name: 'Soie & imitation soie', detail: 'Brillance subtile et tombé élégant pour des espaces de prestige.' },
  { name: 'Doublures', detail: 'Thermiques ou occultantes, elles améliorent le confort et isolent la lumière.' },
];

const finitions = [
  { name: 'À œillets', detail: 'Anneaux métalliques discrets pour un rendu moderne et épuré.' },
  { name: 'À pince plate', detail: 'Plis réguliers et précis, caractéristiques d\'un style classique et élégant.' },
  { name: 'À galon fronceur', detail: 'Effet plissé généreux, volumineuse et romantique.' },
  { name: 'À passants', detail: 'Passants discrets pour un look naturel et décontracté.' },
  { name: 'À pince double', detail: 'Double pli architectural, pour un rendu très structuré et sophistiqué.' },
  { name: 'Sur mesure', detail: 'Toute finition spécifique réalisée sur demande, selon votre projet.' },
];

export default function Rideaux() {
  return (
    <CategoryPage
      title="Rideaux"
      subtitle="Collections sur mesure"
      description="Nos rideaux sur mesure allient élégance et fonctionnalité. Chaque pièce est conçue avec soin, en tenant compte de vos besoins en matière de lumière, d'intimité et d'esthétique. Notre vaste sélection de tissus nobles et notre savoir-faire artisanal garantissent des créations uniques qui sublimeront vos intérieurs."
      features={[
        'Confection sur mesure adaptée à vos dimensions',
        'Large choix de tissus haute qualité et matières nobles',
        'Conseils personnalisés pour le style et les finitions',
        'Doublures thermiques et occultantes disponibles',
        'Pose professionnelle et installation complète',
        'Service de retouches et d\'entretien',
      ]}
      heroDraw={(c) => drawFolds(c, '#C0A890', '#D8C8B4', '#A89070', 8)}
      galleryDraws={[
        (c) => drawFolds(c, '#C8B4A0', '#D8C8B4', '#A89078', 6),
        (c) => drawFolds(c, '#B8A090', '#CCBCAC', '#988078', 7),
        (c) => drawWeave(c, '#C0A890', '#A08870'),
        (c) => drawFolds(c, '#D0C4B4', '#E0D8CC', '#B0A090', 5),
        (c) => drawFolds(c, '#A89888', '#C0B0A0', '#887868', 6),
        (c) => drawWeave(c, '#B0A090', '#907060'),
      ]}
      extraContent={
        <section className="bg-[var(--grege-p)] px-8 md:px-12 py-14 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px]">

              {/* Nos matières */}
              <div className="bg-white px-8 md:px-10 py-10 md:py-12">
                <span className="font-['Lato'] font-thin text-[9px] tracking-[4px] uppercase text-[var(--primary)] mb-4 block">
                  Sélection
                </span>
                <h2 className="font-['Playfair_Display'] font-black text-[26px] md:text-[32px] text-[var(--moka)] leading-[1.1] mb-2">
                  Nos matières
                </h2>
                <div className="w-8 h-[1px] bg-[var(--primary)] mb-8"></div>
                <ul className="space-y-5">
                  {matieres.map((m) => (
                    <li key={m.name} className="border-b border-[var(--pale)] pb-5 last:border-0 last:pb-0">
                      <p className="font-['Playfair_Display'] font-bold text-[15px] text-[var(--moka)] mb-1">
                        {m.name}
                      </p>
                      <p className="font-['Jost'] font-light text-[12px] text-[var(--warm)] leading-[1.8]">
                        {m.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nos finitions */}
              <div className="bg-white px-8 md:px-10 py-10 md:py-12">
                <span className="font-['Lato'] font-thin text-[9px] tracking-[4px] uppercase text-[var(--primary)] mb-4 block">
                  Savoir-faire
                </span>
                <h2 className="font-['Playfair_Display'] font-black text-[26px] md:text-[32px] text-[var(--moka)] leading-[1.1] mb-2">
                  Nos finitions
                </h2>
                <div className="w-8 h-[1px] bg-[var(--primary)] mb-8"></div>
                <ul className="space-y-5">
                  {finitions.map((f) => (
                    <li key={f.name} className="border-b border-[var(--pale)] pb-5 last:border-0 last:pb-0">
                      <p className="font-['Playfair_Display'] font-bold text-[15px] text-[var(--moka)] mb-1">
                        {f.name}
                      </p>
                      <p className="font-['Jost'] font-light text-[12px] text-[var(--warm)] leading-[1.8]">
                        {f.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>
      }
    />
  );
}
