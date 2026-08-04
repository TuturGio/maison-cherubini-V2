export default function RealisationsIndoor() {
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
          <div className="h-full overflow-hidden">
            <img src="/naunces-177.jpg" alt="Réalisation indoor" className="w-full h-full object-cover block" />
          </div>
          <div className="h-full overflow-hidden">
            <img src="/naunces-189.jpg" alt="Réalisation indoor" className="w-full h-full object-cover block" />
          </div>
        </div>

        {/* Ligne 2 — deux portraits */}
        <div className="grid grid-cols-2 gap-3 mt-3 aspect-[3/2]">
          <div className="h-full overflow-hidden">
            <img src="/naunces-202.jpg" alt="Réalisation indoor" className="w-full h-full object-cover block" />
          </div>
          <div className="h-full overflow-hidden">
            <img src="/naunces-200.jpg" alt="Réalisation indoor" className="w-full h-full object-cover block" />
          </div>
        </div>
      </div>
    </section>
  );
}
