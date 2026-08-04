import { useState } from 'react';
import { Play } from 'lucide-react';

type MediaItem = {
  type: 'image' | 'video';
  src: string;
  alt?: string;
};

function VideoMedia({ src }: { src: string }) {
  const [started, setStarted] = useState(false);

  if (!started) {
    return (
      <button
        type="button"
        onClick={() => setStarted(true)}
        className="group relative w-full aspect-[3/4] bg-[var(--moka)] flex items-center justify-center overflow-hidden"
      >
        <span className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
          <Play className="w-6 h-6 text-[var(--moka)] ml-1" fill="currentColor" />
        </span>
        <span className="absolute bottom-3 left-3 text-xs font-['MaisonNeue'] font-light text-white/90 bg-black/30 px-2 py-1 rounded">
          Vidéo
        </span>
      </button>
    );
  }

  return (
    <video
      src={src}
      controls
      autoPlay
      className="w-full h-auto block"
    />
  );
}

function MediaView({ item }: { item: MediaItem }) {
  if (item.type === 'image') {
    return (
      <img
        src={item.src}
        alt={item.alt ?? 'Réalisation'}
        className="w-full h-auto block"
      />
    );
  }
  return <VideoMedia src={item.src} />;
}

export default function RealisationsSection({
  media = [],
}: {
  media?: MediaItem[];
}) {
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
        <div className="flex gap-3 items-start">
          <div className="flex-[3] min-w-0">
            {get(0) && <MediaView item={get(0)!} />}
          </div>
          <div className="flex-[2] min-w-0">
            {get(1) && <MediaView item={get(1)!} />}
          </div>
        </div>

        {/* Ligne 2 — panoramique */}
        <div className="mt-3">
          {get(2) && <MediaView item={get(2)!} />}
        </div>

        {/* Ligne 3 — deux photos */}
        <div className="grid grid-cols-2 gap-3 mt-3 items-start">
          {get(3) && <MediaView item={get(3)!} />}
          {get(4) && <MediaView item={get(4)!} />}
        </div>

        {/* Ligne 4 — panoramique */}
        <div className="mt-3">
          {get(5) && <MediaView item={get(5)!} />}
        </div>
      </div>
    </section>
  );
}
