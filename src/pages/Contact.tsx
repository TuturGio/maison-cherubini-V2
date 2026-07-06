import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Info } from 'lucide-react';

export default function Contact() {
  const [appointmentType, setAppointmentType] = useState('');

  return (
    <div className="min-h-screen">
      <section className="px-6 md:px-12 py-16 md:py-20 bg-[var(--linen)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="font-['MaisonNeue'] font-thin text-[9px] tracking-[4px] uppercase text-[var(--primary)] mb-4 block">
              Contact
            </span>
            <h1 className="font-['FreeSerif'] font-black text-[38px] md:text-[52px] text-[var(--moka)] leading-[1.05] mb-6">
              Donnons vie
              <br />à votre projet
            </h1>
            <div className="w-16 h-[1px] bg-[var(--primary)] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            <div>
              <h2 className="font-['FreeSerif'] font-black text-[32px] text-[var(--moka)] leading-[1.1] mb-8">
                Prenez rendez-vous
              </h2>

              <form className="space-y-6">
                <div>
                  <label className="block font-['MaisonNeue'] font-light text-[10px] tracking-[2px] uppercase text-[var(--warm)] mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-[var(--pale)] bg-white px-4 py-3 font-['MaisonNeue'] font-light text-[14px] text-[var(--charcoal)] transition-colors focus:outline-none focus:border-[var(--primary)]"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label className="block font-['MaisonNeue'] font-light text-[10px] tracking-[2px] uppercase text-[var(--warm)] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border border-[var(--pale)] bg-white px-4 py-3 font-['MaisonNeue'] font-light text-[14px] text-[var(--charcoal)] transition-colors focus:outline-none focus:border-[var(--primary)]"
                    placeholder="jean.dupont@email.com"
                  />
                </div>

                <div>
                  <label className="block font-['MaisonNeue'] font-light text-[10px] tracking-[2px] uppercase text-[var(--warm)] mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full border border-[var(--pale)] bg-white px-4 py-3 font-['MaisonNeue'] font-light text-[14px] text-[var(--charcoal)] transition-colors focus:outline-none focus:border-[var(--primary)]"
                    placeholder="06 12 34 56 78"
                  />
                </div>

                <div>
                  <label className="block font-['MaisonNeue'] font-light text-[10px] tracking-[2px] uppercase text-[var(--warm)] mb-2">
                    Type de rendez-vous
                  </label>
                  <select
                    value={appointmentType}
                    onChange={(e) => setAppointmentType(e.target.value)}
                    required
                    className="w-full border border-[var(--pale)] bg-white px-4 py-3 font-['MaisonNeue'] font-light text-[14px] text-[var(--charcoal)] transition-colors focus:outline-none focus:border-[var(--primary)]"
                  >
                    <option value="">Choisir un type de rendez-vous</option>
                    <option value="showroom">Au showroom</option>
                    <option value="domicile">À domicile</option>
                  </select>
                  {appointmentType === 'domicile' && (
                    <div className="mt-3 flex gap-3 bg-[var(--grege-p)] border border-[var(--pale)] px-4 py-3">
                      <Info size={16} className="text-[var(--primary)] flex-shrink-0 mt-[2px]" />
                      <p className="font-['MaisonNeue'] font-light text-[13px] text-[var(--warm)] leading-[1.7]">
                        Le déplacement à domicile est un service payant. Des frais de déplacement vous seront communiqués lors de la confirmation de votre rendez-vous. Ils seront déduits d'un devis signé.
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block font-['MaisonNeue'] font-light text-[10px] tracking-[2px] uppercase text-[var(--warm)] mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="w-full border border-[var(--pale)] bg-white px-4 py-3 font-['MaisonNeue'] font-light text-[14px] text-[var(--charcoal)] transition-colors focus:outline-none focus:border-[var(--primary)] resize-none"
                    placeholder="Décrivez-nous votre projet..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-['MaisonNeue'] font-light text-[10px] tracking-[3px] uppercase text-[var(--linen)] bg-[var(--moka)] py-4 px-8 cursor-pointer transition-colors hover:bg-[var(--charcoal)] border-none"
                >
                  Envoyer ma demande
                </button>
              </form>
            </div>

            <div className="flex flex-col">
              <h2 className="font-['FreeSerif'] font-black text-[32px] text-[var(--moka)] leading-[1.1] mb-8">
                Nos coordonnées
              </h2>

              {/* Coordonnées en 2 colonnes */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-7 mb-8">
                <div className="flex gap-3">
                  <MapPin size={18} className="text-[var(--primary)] flex-shrink-0 mt-[3px]" />
                  <div>
                    <p className="font-['MaisonNeue'] font-light text-[10px] tracking-[2px] uppercase text-[var(--primary)] mb-1">
                      Adresse
                    </p>
                    <p className="font-['MaisonNeue'] font-light text-[13px] text-[var(--warm)] leading-[1.7]">
                      63 Av. de Montredon
                      <br />
                      13008 Marseille, France
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Clock size={18} className="text-[var(--primary)] flex-shrink-0 mt-[3px]" />
                  <div>
                    <p className="font-['MaisonNeue'] font-light text-[10px] tracking-[2px] uppercase text-[var(--primary)] mb-1">
                      Horaires
                    </p>
                    <p className="font-['MaisonNeue'] font-light text-[13px] text-[var(--warm)] leading-[1.7]">
                      Lun – Ven : 9h00 – 18h00
                      <br />
                      Samedi : sur rendez-vous
                      <br />
                      Dimanche : Fermé
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Phone size={18} className="text-[var(--primary)] flex-shrink-0 mt-[3px]" />
                  <div>
                    <p className="font-['MaisonNeue'] font-light text-[10px] tracking-[2px] uppercase text-[var(--primary)] mb-1">
                      Téléphone
                    </p>
                    <p className="font-['MaisonNeue'] font-light text-[13px] text-[var(--warm)] leading-[1.7]">
                      06 43 58 51 62
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Mail size={18} className="text-[var(--primary)] flex-shrink-0 mt-[3px]" />
                  <div>
                    <p className="font-['MaisonNeue'] font-light text-[10px] tracking-[2px] uppercase text-[var(--primary)] mb-1">
                      Email
                    </p>
                    <p className="font-['MaisonNeue'] font-light text-[13px] text-[var(--warm)] leading-[1.7]">
                      contact@nuancesdecoration.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Carte — flex-1 pour remplir la hauteur restante jusqu'au bas du formulaire */}
              <div className="flex-1 relative overflow-hidden min-h-[220px]">
                <iframe
                  title="Localisation Nuance Décoration"
                  src="https://www.google.com/maps?q=63+Avenue+de+Montredon,+13008+Marseille,+France&output=embed"
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-14 md:py-16 bg-[var(--moka)] text-center">
        <p className="font-['FreeSerif'] italic font-normal text-[20px] md:text-[26px] text-[var(--linen)] leading-[1.6] max-w-3xl mx-auto">
          Nous répondons généralement dans les 24 heures. Pour une demande urgente, n'hésitez pas à nous
          appeler directement.
        </p>
      </section>
    </div>
  );
}
