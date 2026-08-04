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

        <div className="columns-1 md:columns-2 gap-4 [&>*]:mb-4 [&>*]:break-inside-avoid">
          {media.map((item, i) => (
            <MediaView key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
