import CategoryPage from './CategoryPage';
import { drawWeave, drawFolds } from '../utils/canvasDrawing';

export default function RevetementInterieur() {
  return (
    <CategoryPage
      title="Revêtement Intérieur"
      subtitle="Murs & sols d'exception"
      description="Nos revêtements intérieurs transforment vos espaces en lieux de vie uniques. Papiers peints, tissus muraux, moquettes et sols — chaque matière est sélectionnée pour sa qualité, sa durabilité et son caractère esthétique, pour des intérieurs qui vous ressemblent."
      features={[
        'Papiers peints et tissus muraux sur mesure',
        'Moquettes et revêtements de sol haut de gamme',
        'Pose professionnelle par nos artisans',
        'Conseil en harmonie colorimétrique',
        'Matières naturelles et durables disponibles',
        'Service de rénovation et remplacement',
      ]}
      heroDraw={(c) => drawWeave(c, '#C4B8AC', '#A8A098')}
      galleryDraws={[
        (c) => drawWeave(c, '#C8BEB4', '#ACA8A0'),
        (c) => drawFolds(c, '#BEB0A4', '#D0C8C0', '#9E9890', 4),
        (c) => drawWeave(c, '#B0A89C', '#948C84'),
        (c) => drawFolds(c, '#CCC4BC', '#DEDAD4', '#ACA8A0', 5),
        (c) => drawWeave(c, '#BAB2AC', '#9C9890'),
        (c) => drawFolds(c, '#B4ACA4', '#C8C0BA', '#989088', 6),
      ]}
    />
  );
}
