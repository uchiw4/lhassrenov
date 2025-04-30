import Layout from "@/components/layout/layout";
import ContactForm from "@/components/contact-form";

export const metadata = {
  title: "Contact - LHASSRENOV",
  description: "Contactez LHASSRENOV, votre entreprise de rénovation à Paris pour obtenir un devis gratuit ou des informations sur nos services.",
};

export default function ContactPage() {
  return (
    <Layout>
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-2">
              Contact
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Demandez un devis pour vos travaux de rénovation à Paris
            </h1>
            <p className="text-gray-600">
              La rénovation partielle ou intégrale d'un bien immobilier à Paris est un projet qui ne s'improvise pas.
              Contactez-nous pour discuter de votre projet et obtenir un devis gratuit et personnalisé.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Formulaire à gauche */}
            <ContactForm />

            {/* Coordonnées à droite */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos coordonnées</h2>
                <div className="space-y-4">
                  <InfoItem
                    title="Adresse"
                    icon="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    content="60, rue François 1er, Paris, 75008"
                  />
                  <InfoItem
                    title="Téléphone"
                    icon="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    content={
                      <a href="tel:0651604595" className="hover:text-blue-600 transition-colors">
                        07 61 18 90 56
                      </a>
                    }
                  />
                  <InfoItem
                    title="E-mail"
                    icon="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    content={
                      <a href={`mailto:${"lhassrenov"}@${"gmail.com"}`} className="hover:text-blue-600 transition-colors">
                        lhassrenov@gmail.com
                      </a>
                    }
                  />
                  <InfoItem
                    title="Horaires"
                    icon="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    content="Lundi - Dimanche / 7h30 - 18h"
                  />
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

// Petite fonction pour éviter la répétition des blocs coordonnées
function InfoItem({
  title,
  content,
  icon,
}: {
  title: string;
  content: React.ReactNode;
  icon: string;
}) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 rounded-full bg-blue-100 p-3 mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-gray-600">{content}</p>
      </div>
    </div>
  );
}
