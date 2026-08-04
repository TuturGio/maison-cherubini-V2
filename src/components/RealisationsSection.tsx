import { useState } from 'react';
import { Film, Image, Play } from 'lucide-react';

type MediaItem = {
  type: 'image' | 'video';
  src: string;
  alt?: string;
};

function Placeholder({ label }: { label: string }) {
  const isVideo = label === 'Vidéo';
  return (
    <div
      className={`w-full h-full ${
        isVideo ? 'bg-[#E8E4DC]' : 'bg-[#EDE9E3]'
      } border border-[#D8D0C4] flex flex-col items-center justify-center gap-3`}
    >
      {isVideo ? (
        <Film className="w-7 h-7 text-[var(--primary)] opacity-50" strokeWidth={1.2} />
      ) : (
        <Image className="w-7 h-7 text-[var(--primary)] opacity-50" strokeWidth={1.2} />
      )}
      <span className="font-['MaisonNeue'] font-light text-[10px] tracking-[3px] uppercase text-[var(--warm)] opacity-60">
        {label}
      </span>
    </div>
  );
}

function MediaView({ item }: { item: MediaItem }) {
  const [started, setStarted] = useState(false);

  if (item.type === 'image') {
    return (
      <img
        src={item.src}
        alt={item.alt ?? 'Réalisation'}
        className="w-full h-full object-cover"
      />
    );
  }

  if (!started) {
    return (
      <button
        type="button"
        onClick={() => setStarted(true)}
        className="group relative w-full h-full bg-[var(--moka)]/10 flex items-center justify-center"
      >
        <span className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
          <Play className="w-6 h-6 text-[var(--moka)] ml-1" fill="currentColor" />
        </span>
        <span className="absolute bottom-3 left-3 text-xs font-['MaisonNeue-Book'] text-white/90 bg-black/30 px-2 py-1 rounded">
          Vidéo
        </span>
      </button>
    );
  }

  return (
    <video
      src={item.src}
      controls
      autoPlay
      className="w-full h-full object-cover"
    />
  );
}

function Slot({ item, label }: { item?: MediaItem; label: string }) {
  return item ? <MediaView item={item} /> : <Placeholder label={label} />;
}

export default function RealisationsSection({
  media = [],
}: {
  media?: MediaItem[];
}) {
  const base = import.meta.env.BASE_URL;
  const get = (i: number) => media[i];

  return (
    <section className="bg-white px-8 md:px-12 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-['FreeSerif'] font-black text-[40px] text-[var(--moka)] leading-[1.1] mb-4">
            Nos réalisations
          </h2>
          <div className="w-12 h-[1px] bg-[var(--primary)] mx-auto"></div>
        </div>

        {/* Ligne 1 — photo + vidéo */}
        <div className="flex gap-3 aspect-[3/2]">
          <div className="flex-[3] min-w-0">
            <Slot item={get(0)} label="Photo" />
          </div>
          <div className="flex-[2] min-w-0">
            <Slot item={get(1)} label="Vidéo" />
          </div>
        </div>

        {/* Ligne 2 — panoramique */}
        <div className="mt-3 aspect-[21/9]">
          <Slot item={get(2)} label="Photo" />
        </div>

        {/* Ligne 3 — deux photos */}
        <div className="grid grid-cols-2 gap-3 mt-3 aspect-[3/2]">
          <div className="h-full">
            <Slot item={get(3)} label="Photo" />
          </div>
          <div className="h-full">
            <Slot item={get(4)} label="Photo" />
          </div>
        </div>

        {/* Ligne 4 — panoramique */}
        <div className="mt-3 aspect-[21/9]">
          <Slot item={get(5)} label="Photo" />
        </div>
      </div>
    </section>
  );
}
