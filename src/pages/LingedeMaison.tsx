import CategoryPage from './CategoryPage';
import { drawWeave, drawFolds } from '../utils/canvasDrawing';

export default function LingedeMaison() {
  return (
    <CategoryPage
      title="Linge de maison"
      subtitle="Élégance du quotidien"
      description="Notre sélection de linge de maison allie raffinement et douceur pour sublimer chaque pièce de votre intérieur. Des draps aux coussins, en passant par les nappes et serviettes, chaque pièce est choisie avec soin pour offrir confort et beauté au quotidien. Confectionné dans des matières nobles, notre linge de maison est synonyme d'un art de vivre à la française."
      features={[
        'Tissus naturels de première qualité',
        'Linge de lit sur mesure et confectionné',
        'Nappage et linge de table haut de gamme',
        'Coussins décoratifs et accessoires',
        'Broderies et finitions personnalisées',
        'Collections exclusives disponibles au showroom',
      ]}
      heroDraw={(c) => drawFolds(c, '#D4C8BE', '#EAE0D8', '#B8A898', 6)}
      galleryDraws={[
        (c) => drawFolds(c, '#C8BEB4', '#E0D8D0', '#A8988E', 5),
        (c) => drawWeave(c, '#D0C4BA', '#B8A89E'),
        (c) => drawFolds(c, '#DCD0C6', '#EEE4DC', '#C0B0A6', 7),
        (c) => drawWeave(c, '#C4B8AE', '#A8988E'),
        (c) => drawFolds(c, '#CEBEB4', '#E2D8CE', '#B0A096', 4),
        (c) => drawWeave(c, '#D8CCBE', '#C0B0A4'),
      ]}
    />
  );
}
