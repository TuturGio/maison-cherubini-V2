import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Info } from 'lucide-react';
import CanvasImage from '../components/CanvasImage';
import { drawShowroom } from '../utils/canvasDrawing';

export default function Contact() {
  const [appointmentType, setAppointmentType] = useState('');

  return (
    <div className="min-h-screen">
      <section className="px-12 py-20 bg-[var(--linen)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-['Lato'] font-thin text-[9px] tracking-[4px] uppercase text-[var(--primary)] mb-4 block">
              Contact
            </span>
            <h1 className="font-['Playfair_Display'] font-black text-[52px] text-[var(--moka)] leading-[1.05] mb-6">
              Donnons vie
              <br />à votre projet
            </h1>
            <div className="w-16 h-[1px] bg-[var(--primary)] mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <h2 className="font-['Playfair_Display'] font-black text-[32px] text-[var(--moka)] leading-[1.1] mb-8">
                Prenez rendez-vous
              </h2>

              <form className="space-y-6">
                <div>
                  <label className="block font-['Lato'] font-light text-[10px] tracking-[2px] uppercase text-[var(--warm)] mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    className="w-full border border-[var(--pale)] bg-white px-4 py-3 font-['Jost'] font-light text-[14px] text-[var(--charcoal)] transition-colors focus:outline-none focus:border-[var(--primary)]"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label className="block font-['Lato'] font-light text-[10px] tracking-[2px] uppercase text-[var(--warm)] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border border-[var(--pale)] bg-white px-4 py-3 font-['Jost'] font-light text-[14px] text-[var(--charcoal)] transition-colors focus:outline-none focus:border-[var(--primary)]"
                    placeholder="jean.dupont@email.com"
                  />
                </div>

                <div>
                  <label className="block font-['Lato'] font-light text-[10px] tracking-[2px] uppercase text-[var(--warm)] mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    className="w-full border border-[var(--pale)] bg-white px-4 py-3 font-['Jost'] font-light text-[14px] text-[var(--charcoal)] transition-colors focus:outline-none focus:border-[var(--primary)]"
                    placeholder="06 12 34 56 78"
                  />
                </div>

                <div>
                  <label className="block font-['Lato'] font-light text-[10px] tracking-[2px] uppercase text-[var(--warm)] mb-2">
                    Type de rendez-vous
                  </label>
                  <select
                    value={appointmentType}
                    onChange={(e) => setAppointmentType(e.target.value)}
                    className="w-full border border-[var(--pale)] bg-white px-4 py-3 font-['Jost'] font-light text-[14px] text-[var(--charcoal)] transition-colors focus:outline-none focus:border-[var(--primary)]"
                  >
                    <option value="">Choisir un type de rendez-vous</option>
                    <option value="showroom">Au showroom</option>
                    <option value="domicile">À domicile</option>
                  </select>
                  {appointmentType === 'domicile' && (
                    <div className="mt-3 flex gap-3 bg-[var(--grege-p)] border border-[var(--pale)] px-4 py-3">
                      <Info size={16} className="text-[var(--primary)] flex-shrink-0 mt-[2px]" />
                      <p className="font-['Jost'] font-light text-[13px] text-[var(--warm)] leading-[1.7]">
                        Le déplacement à domicile est un service payant. Des frais de déplacement vous seront communiqués lors de la confirmation de votre rendez-vous.
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block font-['Lato'] font-light text-[10px] tracking-[2px] uppercase text-[var(--warm)] mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full border border-[var(--pale)] bg-white px-4 py-3 font-['Jost'] font-light text-[14px] text-[var(--charcoal)] transition-colors focus:outline-none focus:border-[var(--primary)] resize-none"
                    placeholder="Décrivez-nous votre projet..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-['Lato'] font-light text-[10px] tracking-[3px] uppercase text-[var(--linen)] bg-[var(--moka)] py-4 px-8 cursor-pointer transition-colors hover:bg-[var(--charcoal)] border-none"
                >
                  Envoyer ma demande
                </button>
              </form>
            </div>

            <div>
              <h2 className="font-['Playfair_Display'] font-black text-[32px] text-[var(--moka)] leading-[1.1] mb-8">
                Nos coordonnées
              </h2>

              <div className="space-y-8 mb-12">
                <div className="flex gap-4">
                  <MapPin size={20} className="text-[var(--primary)] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-['Lato'] font-light text-[11px] tracking-[2px] uppercase text-[var(--primary)] mb-2">
                      Adresse
                    </p>
                    <p className="font-['Jost'] font-light text-[14px] text-[var(--warm)] leading-[1.7]">
                      15 Rue de la République
                      <br />
                      13001 Marseille, France
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone size={20} className="text-[var(--primary)] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-['Lato'] font-light text-[11px] tracking-[2px] uppercase text-[var(--primary)] mb-2">
                      Téléphone
                    </p>
                    <p className="font-['Jost'] font-light text-[14px] text-[var(--warm)] leading-[1.7]">
                      04 91 XX XX XX
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail size={20} className="text-[var(--primary)] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-['Lato'] font-light text-[11px] tracking-[2px] uppercase text-[var(--primary)] mb-2">
                      Email
                    </p>
                    <p className="font-['Jost'] font-light text-[14px] text-[var(--warm)] leading-[1.7]">
                      contact@nuance-decoration.fr
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock size={20} className="text-[var(--primary)] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-['Lato'] font-light text-[11px] tracking-[2px] uppercase text-[var(--primary)] mb-2">
                      Horaires
                    </p>
                    <p className="font-['Jost'] font-light text-[14px] text-[var(--warm)] leading-[1.7]">
                      Lundi - Vendredi : 9h00 - 18h00
                      <br />
                      Samedi : 10h00 - 17h00
                      <br />
                      Dimanche : Fermé
                    </p>
                  </div>
                </div>
              </div>

              <div className="aspect-[4/3] relative overflow-hidden">
                <CanvasImage draw={drawShowroom} className="absolute inset-0 w-full h-full block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-12 py-16 bg-[var(--moka)] text-center">
        <p className="font-['Playfair_Display'] italic font-normal text-[26px] text-[var(--linen)] leading-[1.6] max-w-3xl mx-auto">
          Nous répondons généralement dans les 24 heures. Pour une demande urgente, n'hésitez pas à nous
          appeler directement.
        </p>
      </section>
    </div>
  );
}
