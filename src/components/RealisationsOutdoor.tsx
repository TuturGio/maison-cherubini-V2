import { Image } from 'lucide-react';

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

export default function RealisationsOutdoor() {
  return (
    <section className="bg-white px-8 md:px-12 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-['FreeSerif'] font-black text-[40px] text-[var(--moka)] leading-[1.1] mb-4">
            Nos réalisations
          </h2>
          <div className="w-12 h-[1px] bg-[var(--primary)] mx-auto"></div>
        </div>

        {/* Ligne 1 — deux portraits */}
        <div className="grid grid-cols-2 gap-3 aspect-[3/2]">
          <div className="h-full">
            <ImageSlot label="Photo" />
          </div>
          <div className="h-full">
            <ImageSlot label="Photo" />
          </div>
        </div>

        {/* Ligne 2 — deux paysages empilés à gauche + portrait à droite, même hauteur totale */}
        <div className="flex gap-3 mt-3 aspect-[3/2]">
          <div className="grid grid-rows-2 gap-3 flex-1">
            <div className="h-full">
              <ImageSlot label="Photo" />
            </div>
            <div className="h-full">
              <ImageSlot label="Photo" />
            </div>
          </div>
          <div className="flex-1">
            <ImageSlot label="Photo" />
          </div>
        </div>

        {/* Ligne 3 — deux portraits */}
        <div className="grid grid-cols-2 gap-3 mt-3 aspect-[3/2]">
          <div className="h-full">
            <ImageSlot label="Photo" />
          </div>
          <div className="h-full">
            <ImageSlot label="Photo" />
          </div>
        </div>

        {/* Ligne 4 — un paysage */}
        <div className="mt-3 aspect-[3/2]">
          <ImageSlot label="Photo" />
        </div>
      </div>
    </section>
  );
}
