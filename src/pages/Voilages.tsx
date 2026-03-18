import CategoryPage from './CategoryPage';
import { drawSheer, drawWeave } from '../utils/canvasDrawing';

export default function Voilages() {
  return (
    <CategoryPage
      title="Voilages"
      subtitle="Légèreté & transparence"
      description="Nos voilages apportent douceur et luminosité à vos espaces. Conçus pour filtrer délicatement la lumière naturelle tout en préservant votre intimité, ils créent une atmosphère aérienne et raffinée. Chaque voilage est confectionné avec des tissus légers et élégants, choisis pour leur capacité à sublimer la lumière."
      features={[
        'Tissus légers et transparents de haute qualité',
        'Filtration optimale de la lumière naturelle',
        'Protection de l\'intimité tout en laissant passer la clarté',
        'Confection adaptée aux grandes hauteurs sous plafond',
        'Finitions soignées et discrètes',
        'Entretien facile et durable',
      ]}
      heroDraw={drawSheer}
      galleryDraws={[
        drawSheer,
        (c) => drawWeave(c, '#E8E4DC', '#D8D4CC'),
        drawSheer,
        (c) => drawWeave(c, '#F0ECE4', '#E0DCD4'),
        drawSheer,
        (c) => drawWeave(c, '#E4E0D8', '#D4D0C8'),
      ]}
    />
  );
}
