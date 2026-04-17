import { Instagram } from 'lucide-react';

const INSTAGRAM_HANDLE = 'nuancedecoration_';
const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;

export default function InstagramFeed() {
  return (
    <section className="bg-white border-t border-[var(--pale)] px-12 py-14">
      <div className="flex items-center justify-center gap-3 mb-6">
        <Instagram size={24} className="text-[var(--primary)]" />
        <h3 className="font-['Lora'] text-[22px] font-normal text-[var(--moka)]">
          Suivez-nous sur Instagram
        </h3>
      </div>

      <div className="text-center mb-8">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-['Lato'] text-[14px] font-light tracking-[1px] text-[var(--primary)] no-underline transition-colors hover:text-[var(--moka)]"
        >
          @{INSTAGRAM_HANDLE}
        </a>
      </div>

      <div className="max-w-5xl mx-auto">
        <iframe
          src={`${INSTAGRAM_URL}embed`}
          className="w-full h-[500px] border-0 rounded-sm"
          scrolling="no"
          title="Instagram Feed"
        />
      </div>
    </section>
  );
}
