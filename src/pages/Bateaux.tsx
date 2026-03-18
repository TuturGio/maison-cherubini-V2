import CategoryPage from './CategoryPage';
import { drawNautical, drawWeave } from '../utils/canvasDrawing';

export default function Bateaux() {
  return (
    <CategoryPage
      title="Bateaux"
      subtitle="Sellerie nautique"
      description="Notre expertise en sellerie nautique répond aux exigences les plus élevées du yachting. Nous créons des revêtements et aménagements sur mesure qui résistent aux conditions marines tout en offrant un confort et une élégance exceptionnels. Chaque création est pensée pour allier technicité, durabilité et raffinement."
      features={[
        'Tissus techniques résistants aux UV et à l\'humidité',
        'Conception adaptée aux contraintes marines',
        'Coussins et matelas nautiques sur mesure',
        'Housses de protection et bâches',
        'Rideaux et voilages pour cabines',
        'Rénovation et réfection complète de sellerie',
      ]}
      heroDraw={drawNautical}
      galleryDraws={[
        drawNautical,
        (c) => drawWeave(c, '#8A9EA8', '#6B8090'),
        drawNautical,
        (c) => drawWeave(c, '#7A8E98', '#5B7080'),
        drawNautical,
        (c) => drawWeave(c, '#9AAEB8', '#7B90A0'),
      ]}
    />
  );
}
