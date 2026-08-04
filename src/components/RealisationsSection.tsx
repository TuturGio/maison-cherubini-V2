import { useState } from 'react';
import { Play } from 'lucide-react';

type MediaItem = {
  type: 'image' | 'video';
  src: string;
  alt?: string;
};

type LayoutSpan = 'full' | 'half';

const LAYOUT: LayoutSpan[] = [
  'half',  // 0 — naunces-177 (portrait)
  'half',  // 1 — video
  'full',  // 2 — naunces-180 (landscape)
  'half',  // 3 — video
  'half',  // 4 — IMG_1555 (portrait)
  'half',  // 5 — naunces-198 (portrait)
  'half',  // 6 — naunces-200 (portrait)
  'full',  // 7 — naunces-192 (landscape)
];

function VideoMedia({ src }: { src: string }) {
  const [started, setStarted] = useState(false);

  if (!started) {
    return (
      <button
        type="button"
        onClick={() => setStarted(true)}
        className="group relative w-full block bg-[var(--moka)] overflow-hidden"
        style={{ aspectRatio: '3 / 4' }}
      >
        <span className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 absolute inset-0 m-auto">
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
  return (
    <section className="bg-white px-8 md:px-12 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-['FreeSerif'] font-black text-[40px] text-[var(--moka)] leading-[1.1] mb-4">
            Nos réalisations
          </h2>
          <div className="w-12 h-[1px] bg-[var(--primary)] mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {media.map((item, i) => (
            <div
              key={i}
              className={LAYOUT[i] === 'full' ? 'col-span-2' : 'col-span-1'}
            >
              <MediaView item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
