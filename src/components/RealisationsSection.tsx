import { Film, Image } from 'lucide-react';

function ImageSlot({ label }: { label: string }) {
  return (
    <div className="w-full h-full bg-[#EDE9E3] border border-[#D8D0C4] flex flex-col items-center justify-center gap-3">
      <Image className="w-7 h-7 text-[var(--primary)] opacity-50" strokeWidth={1.2} />
      <span className="font-['MaisonNeue'] font-light text-[10px] tracking-[3px] uppercase text-[var(--warm)] opacity-60">
        {label}
      </span>
    </div>
  );
}

function VideoSlot({ label }: { label: string }) {
  return (
    <div className="w-full h-full bg-[#E8E4DC] border border-[#D8D0C4] flex flex-col items-center justify-center gap-3">
      <Film className="w-7 h-7 text-[var(--primary)] opacity-50" strokeWidth={1.2} />
      <span className="font-['MaisonNeue'] font-light text-[10px] tracking-[3px] uppercase text-[var(--warm)] opacity-60">
        {label}
      </span>
    </div>
  );
}

export default function RealisationsSection() {
  return (
    <section className="bg-white px-8 md:px-12 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-['FreeSerif'] font-black text-[40px] text-[var(--moka)] leading-[1.1] mb-4">
            Nos réalisations
          </h2>
          <div className="w-12 h-[1px] bg-[var(--primary)] mx-auto"></div>
        </div>

        {/* Ligne 1 — photo + vidéo, même hauteur que ligne 4 */}
        <div className="flex gap-3 aspect-[3/2]">
          <div className="flex-[3] min-w-0">
            <ImageSlot label="Photo" />
          </div>
          <div className="flex-[2] min-w-0">
            <VideoSlot label="Vidéo" />
          </div>
        </div>

        {/* Ligne 2 — panoramique */}
        <div className="mt-3 aspect-[21/9]">
          <ImageSlot label="Photo" />
        </div>

        {/* Ligne 3 — vidéo + photo, même hauteur que ligne 4 */}
        <div className="grid grid-cols-2 gap-3 mt-3 aspect-[3/2]">
          <div className="h-full">
            <VideoSlot label="Vidéo" />
          </div>
          <div className="h-full">
            <ImageSlot label="Photo" />
          </div>
        </div>

        {/* Ligne 4 — deux photos portrait (référence de hauteur) */}
        <div className="grid grid-cols-2 gap-3 mt-3 aspect-[3/2]">
          <div className="h-full">
            <ImageSlot label="Photo" />
          </div>
          <div className="h-full">
            <ImageSlot label="Photo" />
          </div>
        </div>

        {/* Ligne 5 — panoramique */}
        <div className="mt-3 aspect-[21/9]">
          <ImageSlot label="Photo" />
        </div>
      </div>
    </section>
  );
}
