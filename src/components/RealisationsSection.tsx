import { useState } from 'react';
import { Film, Image, Play } from 'lucide-react';

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

export default function RealisationsSection({
  firstPhoto,
  firstVideo,
}: {
  firstPhoto?: string;
  firstVideo?: string;
}) {
  const [videoStarted, setVideoStarted] = useState(false);

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
            {firstPhoto ? (
              <img
                src={firstPhoto}
                alt="Réalisation"
                className="w-full h-full object-cover"
              />
            ) : (
              <ImageSlot label="Photo" />
            )}
          </div>
          <div className="flex-[2] min-w-0">
            {firstVideo ? (
              videoStarted ? (
                <video
                  src={firstVideo}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setVideoStarted(true)}
                  className="group relative w-full h-full bg-[var(--moka)]/10 flex items-center justify-center"
                >
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Play className="w-6 h-6 text-[var(--moka)] ml-1" fill="currentColor" />
                    </span>
                  </span>
                  <span className="absolute bottom-3 left-3 text-xs font-['MaisonNeue-Book'] text-white/90 bg-black/30 px-2 py-1 rounded">
                    Vidéo
                  </span>
                </button>
              )
            ) : (
              <VideoSlot label="Vidéo" />
            )}
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
