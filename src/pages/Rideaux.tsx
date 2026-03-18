import CategoryPage from './CategoryPage';
import { drawFolds, drawWeave } from '../utils/canvasDrawing';

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
    />
  );
}
