import { Link } from 'react-router-dom';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function Showroom() {
  return (
    <div className="min-h-screen">
      {/* Bannière — texte gauche, visuel droite */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[60vh] bg-[var(--grege-p)]">
        <div className="flex flex-col justify-center px-8 py-16 md:px-16 md:py-20 order-2 md:order-1">
          <span className="font-['MaisonNeue'] font-thin text-[9px] tracking-[4px] uppercase text-[var(--primary)] mb-5 block">
            Notre showroom
          </span>
          <h1 className="font-['FreeSerif'] font-black text-[44px] md:text-[60px] text-[var(--moka)] leading-[1.05] mb-6">
            Un espace dédié
            <br />à vos inspirations
          </h1>
          <div className="w-16 h-[2px] bg-[var(--primary)] mb-8"></div>
          <p className="font-['MaisonNeue'] font-light text-[14px] text-[var(--warm)] leading-[1.9] max-w-md">
            200&nbsp;m² de tissus nobles, d'échantillons et de réalisations finies pour vous aider
            à visualiser et concrétiser votre projet sur mesure.
          </p>
        </div>
        <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto order-1 md:order-2">
          <img
            src={`${import.meta.env.BASE_URL}showroom1.jpg`}
            alt="Notre showroom"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Infos + carte */}
      <section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Colonne gauche — adresse, horaires, tél, conseil */}
          <div className="px-8 py-14 md:px-16 md:py-20 flex flex-col justify-center space-y-8 border-r border-[var(--pale)]">
            <div className="flex gap-4">
              <MapPin size={22} className="text-[var(--primary)] flex-shrink-0 mt-1" />
              <div>
                <p className="font-['MaisonNeue'] font-light text-[10px] tracking-[2px] uppercase text-[var(--primary)] mb-2">
                  Adresse
                </p>
                <p className="font-['MaisonNeue'] font-light text-[14px] text-[var(--warm)] leading-[1.7]">
                  15 Rue de la République
                  <br />
                  13001 Marseille, France
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock size={22} className="text-[var(--primary)] flex-shrink-0 mt-1" />
              <div>
                <p className="font-['MaisonNeue'] font-light text-[10px] tracking-[2px] uppercase text-[var(--primary)] mb-2">
                  Horaires d'ouverture
                </p>
                <p className="font-['MaisonNeue'] font-light text-[14px] text-[var(--warm)] leading-[1.7]">
                  Lundi – Vendredi : 9h00 – 18h00
                  <br />
                  Samedi : 10h00 – 17h00
                  <br />
                  Dimanche : Fermé
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone size={22} className="text-[var(--primary)] flex-shrink-0 mt-1" />
              <div>
                <p className="font-['MaisonNeue'] font-light text-[10px] tracking-[2px] uppercase text-[var(--primary)] mb-2">
                  Téléphone
                </p>
                <p className="font-['MaisonNeue'] font-light text-[14px] text-[var(--warm)] leading-[1.7]">
                  04 91 XX XX XX
                </p>
              </div>
            </div>

            <div className="bg-[var(--linen)] p-6">
              <p className="font-['MaisonNeue'] font-light text-[10px] tracking-[2px] uppercase text-[var(--primary)] mb-3">
                Bon à savoir
              </p>
              <p className="font-['MaisonNeue'] font-light text-[13px] text-[var(--warm)] leading-[1.8]">
                Nous vous recommandons de prendre rendez-vous pour bénéficier d'un conseil
                personnalisé et d'une attention entièrement dédiée à votre projet.
              </p>
              <Link
                to="/contact"
                className="inline-block mt-5 font-['MaisonNeue'] font-light text-[9px] tracking-[3px] uppercase text-[var(--moka)] border-b border-[var(--primary)] pb-[3px] no-underline transition-colors hover:text-[var(--primary)]"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </div>

          {/* Colonne droite — Google Maps embed */}
          <div className="relative min-h-[400px] md:min-h-0">
            <iframe
              title="Localisation Nuance Décoration"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.5!2d5.3705!3d43.2965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c0b7c4e7b5b5%3A0x0!2s15%20Rue%20de%20la%20R%C3%A9publique%2C%2013001%20Marseille!5e0!3m2!1sfr!2sfr!4v1699000000000!5m2!1sfr!2sfr"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--linen)] px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-['FreeSerif'] font-black text-[40px] text-[var(--moka)] leading-[1.1] mb-4">
              Ce que vous découvrirez
            </h2>
            <div className="w-12 h-[1px] bg-[var(--primary)] mx-auto"></div>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="aspect-square relative overflow-hidden mb-6">
                <img
                  src={`${import.meta.env.BASE_URL}showroom1.jpg`}
                  alt="Collections de tissus"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <h3 className="font-['FreeSerif'] font-black text-[22px] text-[var(--moka)] leading-[1.1] mb-3">
                Collections de tissus
              </h3>
              <p className="font-['MaisonNeue'] font-light text-[13px] text-[var(--warm)] leading-[1.8]">
                Plus de 500 références de tissus d'ameublement, voilages et matières techniques
              </p>
            </div>

            <div className="text-center">
              <div className="aspect-square relative overflow-hidden mb-6">
                <img
                  src={`${import.meta.env.BASE_URL}revetement_interieur.jpg`}
                  alt="Réalisations finies"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <h3 className="font-['FreeSerif'] font-black text-[22px] text-[var(--moka)] leading-[1.1] mb-3">
                Réalisations finies
              </h3>
              <p className="font-['MaisonNeue'] font-light text-[13px] text-[var(--warm)] leading-[1.8]">
                Exemples de nos créations pour vous inspirer et visualiser les possibilités
              </p>
            </div>

            <div className="text-center">
              <div className="aspect-square relative overflow-hidden mb-6">
                <img
                  src={`${import.meta.env.BASE_URL}showroom2.jpg`}
                  alt="Conseil personnalisé"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <h3 className="font-['FreeSerif'] font-black text-[22px] text-[var(--moka)] leading-[1.1] mb-3">
                Conseil personnalisé
              </h3>
              <p className="font-['MaisonNeue'] font-light text-[13px] text-[var(--warm)] leading-[1.8]">
                Nos experts vous accompagnent pour définir le projet qui vous correspond
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-12 py-16 bg-[var(--moka)] text-center">
        <h2 className="font-['FreeSerif'] italic font-normal text-[32px] text-[var(--linen)] leading-[1.5] mb-8">
          Venez nous rencontrer
        </h2>
        <p className="font-['MaisonNeue'] font-light text-[14px] text-[rgba(248,244,240,0.8)] leading-[1.9] max-w-2xl mx-auto mb-8">
          Notre équipe vous accueille avec plaisir pour échanger sur votre projet et vous faire découvrir
          notre univers.
        </p>
        <Link
          to="/contact"
          className="inline-block font-['MaisonNeue'] font-light text-[10px] tracking-[3px] uppercase text-[var(--moka)] bg-[var(--linen)] py-4 px-8 no-underline transition-colors hover:bg-[var(--pale)]"
        >
          Prendre rendez-vous
        </Link>
      </section>
    </div>
  );
}
