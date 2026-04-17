import { Link } from 'react-router-dom';
import CanvasImage from '../components/CanvasImage';
import { drawFolds, drawWeave } from '../utils/canvasDrawing';

export default function Histoire() {
  return (
    <div className="min-h-screen">
      <section className="px-8 md:px-16 py-28 bg-[var(--linen)]">
        <div className="max-w-5xl mx-auto text-center">
          <span className="font-['Lato'] font-thin text-[9px] tracking-[4px] uppercase text-[var(--primary)] mb-6 block">
            Qui sommes-nous
          </span>
          <p className="font-['Playfair_Display'] italic font-normal text-[30px] md:text-[38px] text-[var(--moka)] leading-[1.55] max-w-3xl mx-auto">
            Il y a des marques qui naissent d'une idée. La nôtre naît d'une rencontre.
          </p>
          <p className="font-['Playfair_Display'] italic font-normal text-[22px] md:text-[28px] text-[var(--primary)] leading-[1.55] mt-4 max-w-2xl mx-auto">
            Deux femmes. Deux sensibilités. Une même exigence.
          </p>
          <div className="w-16 h-[1px] bg-[var(--primary)] mx-auto mt-12"></div>
        </div>
      </section>

      <section className="px-8 md:px-16 py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-28">
            <div className="aspect-[4/5] relative overflow-hidden bg-[var(--linen)]">
              <CanvasImage
                draw={(c) => drawFolds(c, '#C8B4A4', '#DCCCC0', '#B0988A', 7)}
                className="absolute inset-0 w-full h-full block"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-['Lato'] font-light text-[10px] tracking-[3px] uppercase text-[var(--muted)]">Photo</span>
              </div>
            </div>

            <div>
              <h2 className="font-['Playfair_Display'] font-black text-[48px] md:text-[56px] text-[var(--moka)] leading-none mb-5 tracking-tight">
                Jeanne
              </h2>
              <p className="font-['Playfair_Display'] italic font-normal text-[18px] text-[var(--primary)] leading-[1.65] mb-8">
                Depuis toujours, les matières, les textures et les détails qui font la différence m'ont attirée.
              </p>
              <div className="w-10 h-[1px] bg-[var(--pale)] mb-8"></div>
              <div className="space-y-5">
                <p className="font-['Jost'] font-light text-[14px] text-[var(--warm)] leading-[1.9]">
                  Tout a commencé à Marseille, là où j'ai grandi.
                </p>
                <p className="font-['Jost'] font-light text-[14px] text-[var(--warm)] leading-[1.9]">
                  Passionnée de couture depuis l'enfance, j'ai décidé de me former à Paris à la confection de lingerie et de maillots de bain. Quatre ans chez Pain de Sucre, trois ans chez Noo en tant que prototypiste — des années qui m'ont forgé une exigence du détail et le goût du travail sur mesure.
                </p>
                <p className="font-['Jost'] font-light text-[14px] text-[var(--warm)] leading-[1.9]">
                  Mais l'envie d'entreprendre ne m'a jamais quittée.
                </p>
                <p className="font-['Jost'] font-light text-[14px] text-[var(--warm)] leading-[1.9]">
                  Je crois que j'attendais la bonne rencontre pour me lancer. Et puis il y a eu Chloé.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-['Playfair_Display'] font-black text-[48px] md:text-[56px] text-[var(--moka)] leading-none mb-5 tracking-tight">
                Chloé
              </h2>
              <p className="font-['Playfair_Display'] italic font-normal text-[18px] text-[var(--primary)] leading-[1.65] mb-8">
                Elles m'ont transmis, sans le dire, le goût du beau et le sens de l'harmonie.
              </p>
              <div className="w-10 h-[1px] bg-[var(--pale)] mb-8"></div>
              <div className="space-y-5">
                <p className="font-['Jost'] font-light text-[14px] text-[var(--warm)] leading-[1.9]">
                  J'ai grandi à Marseille, dans un univers où l'esthétique a toujours eu une place importante.
                </p>
                <p className="font-['Jost'] font-light text-[14px] text-[var(--warm)] leading-[1.9]">
                  Très tôt, j'ai été inspirée par deux femmes essentielles dans ma vie, ma mère et ma grand-mère. Je les ai toujours vues attentives aux détails, élégantes, entourées de belles choses. Elles m'ont transmis, sans le dire, le goût du beau et le sens de l'harmonie.
                </p>
                <p className="font-['Jost'] font-light text-[14px] text-[var(--warm)] leading-[1.9]">
                  Après HEC Montréal, mon parcours m'a menée entre Amsterdam et Paris, chez Rituals puis Oh My Cream. En 2023, je reviens à Marseille pour ouvrir un nouveau chapitre, plus personnel, et rejoins Lulli, dans l'univers de la mode.
                </p>
                <p className="font-['Jost'] font-light text-[14px] text-[var(--warm)] leading-[1.9]">
                  Mais au fond, l'envie d'entreprendre ne m'a jamais quittée. Créer, imaginer, donner vie à un projet qui me ressemble.
                </p>
                <p className="font-['Jost'] font-light text-[14px] text-[var(--warm)] leading-[1.9]">
                  Et puis j'ai rencontré Jeanne. Et tout s'est aligné.
                </p>
              </div>
            </div>

            <div className="aspect-[4/5] relative overflow-hidden bg-[var(--linen)] order-1 md:order-2">
              <CanvasImage
                draw={(c) => drawWeave(c, '#C0B4A4', '#90786A')}
                className="absolute inset-0 w-full h-full block"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-['Lato'] font-light text-[10px] tracking-[3px] uppercase text-[var(--muted)]">Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-16 py-24 bg-[var(--linen)]">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <p className="font-['Playfair_Display'] italic font-normal text-[22px] md:text-[28px] text-[var(--moka)] leading-[1.65] max-w-3xl mx-auto">
            Une vision commune, des valeurs partagées, une complémentarité naturelle.
          </p>
          <p className="font-['Playfair_Display'] italic font-normal text-[20px] md:text-[24px] text-[var(--primary)] leading-[1.65] mt-5 max-w-3xl mx-auto">
            La question s'est imposée : et si on créait quelque chose ensemble ?
          </p>
        </div>
        <div className="max-w-5xl mx-auto aspect-[16/7] relative overflow-hidden bg-[var(--grege-p)]">
          <CanvasImage
            draw={(c) => drawFolds(c, '#C8B4A4', '#DCCCC0', '#B0988A', 9)}
            className="absolute inset-0 w-full h-full block"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-['Lato'] font-light text-[10px] tracking-[3px] uppercase text-[var(--muted)]">Photo ou vidéo</span>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-16 py-28 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-['Playfair_Display'] font-black text-[52px] md:text-[64px] text-[var(--moka)] leading-none mb-12 text-center tracking-tight">
            Nuance
          </h2>
          <div className="space-y-7">
            <p className="font-['Jost'] font-light text-[14px] text-[var(--warm)] leading-[1.9]">
              Parce qu'il dit tout de ce que nous sommes, et de ce que nous faisons.
            </p>
            <p className="font-['Jost'] font-light text-[14px] text-[var(--warm)] leading-[1.9]">
              Il y a la nuance des matières — ce moment où un lin change de visage selon la lumière, où un tissu révèle sa profondeur au toucher. Nous le savons : c'est dans l'infime différence qu'une matière devient inoubliable.
            </p>
            <p className="font-['Jost'] font-light text-[14px] text-[var(--warm)] leading-[1.9]">
              Il y a la nuance des espaces — cette façon qu'ont les couleurs, les textures et les volumes de raconter quelque chose de subtil, de juste, d'unique. Nous avons appris à la lire, à la cultiver, à en faire notre signature.
            </p>
            <p className="font-['Jost'] font-light text-[14px] text-[var(--warm)] leading-[1.9]">
              Mais Nuance, c'est aussi ce que nous sommes l'une pour l'autre.
            </p>
            <p className="font-['Jost'] font-light text-[14px] text-[var(--warm)] leading-[1.9]">
              Nous ne voyons pas toujours les choses de la même façon. Et c'est précisément là que naît quelque chose d'intéressant. Entre la main et la vision. Entre le geste et l'intuition. Entre deux lectures d'un même espace.
            </p>
            <p className="font-['Jost'] font-light text-[14px] text-[var(--warm)] leading-[1.9]">
              Ce n'est pas le consensus qui nous guide. C'est la nuance.
            </p>
            <p className="font-['Jost'] font-light text-[14px] text-[var(--warm)] leading-[1.9]">
              Celle qui refuse le noir absolu et le blanc trop propre. Celle qui préfère les entre-deux, les contrastes maîtrisés, les tensions fécondes. Celle qui croit qu'un bel espace, comme une belle rencontre, ne se résume jamais à une seule note.
            </p>
            <p className="font-['Jost'] font-light text-[14px] text-[var(--warm)] leading-[1.9]">
              Nuance, parce que rien de ce que nous créons ne ressemble à autre chose. Parce que chaque client mérite une réponse qui lui appartient. Parce que le beau, le vrai, se loge toujours dans les détails — dans ce léger écart qui fait qu'une pièce devient un endroit où l'on veut rester.
            </p>
          </div>
          <div className="w-16 h-[1px] bg-[var(--primary)] my-12 mx-auto"></div>
          <p className="font-['Playfair_Display'] italic font-normal text-[22px] text-[var(--moka)] leading-[1.65] text-center">
            Nous ne sommes pas une. Nous sommes deux. Et c'est de cet espace entre nous que naît Nuance.
          </p>
        </div>
      </section>

      <section className="px-8 md:px-16 py-20 bg-[var(--moka)] text-center">
        <p className="font-['Playfair_Display'] italic font-normal text-[22px] text-[var(--linen)] leading-[1.65] max-w-3xl mx-auto mb-10">
          Venez nous rencontrer dans notre showroom ou contactez-nous pour discuter de votre projet.
        </p>
        <Link
          to="/contact"
          className="inline-block font-['Lato'] font-light text-[10px] tracking-[3px] uppercase text-[var(--moka)] bg-[var(--linen)] py-4 px-10 no-underline transition-colors hover:bg-white"
        >
          Prendre rendez-vous
        </Link>
      </section>
    </div>
  );
}
