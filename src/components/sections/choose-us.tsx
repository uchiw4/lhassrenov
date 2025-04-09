"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

function FadeInSection({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

const ChooseUs = () => {
  return (
    <FadeInSection>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="flex justify-center mb-6">
              <Link href="/">
                <Image
                  src="https://lhassrenov.s3.eu-north-1.amazonaws.com/lhassheder.png"
                  alt="Logo LHASSRENOV"
                  width={180}
                  height={60}
                  className="object-contain"
                  priority
                />
              </Link>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choisissez la bonne entreprise de rénovation à Paris
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              La rénovation d'une maison ou d'un appartement est un projet incontournable
              lorsque vous constatez que votre bien s'est défraîchi au fil des années.
              Face aux nouvelles réglementations en vigueur en vue de mieux protéger
              l'environnement et d'améliorer le confort des habitations, vous avez besoin
              d'une entreprise de rénovation à Paris pour la remise aux normes des
              installations, mais aussi pour valoriser votre bien immobilier. LHASSRENOV
              vous informe et vous conseille à toutes les étapes de votre projet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center shadow-md hover:shadow-lg transition-shadow border-t-4 border-t-blue-600">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Équipe qualifiée</h3>
              <p className="text-gray-600">
                Notre équipe est composée de professionnels qualifiés et expérimentés
                dans tous les corps de métier de la rénovation.
              </p>
            </Card>

            <Card className="p-8 text-center shadow-md hover:shadow-lg transition-shadow border-t-4 border-t-blue-600">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6 mx-auto">
                <div className="text-2xl font-bold">259+</div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Projets réalisés</h3>
              <p className="text-gray-600">
                Plus de 259 projets de rénovation réalisés avec succès à
                Paris et ses environs.
              </p>
            </Card>

            <Card className="p-8 text-center shadow-md hover:shadow-lg transition-shadow border-t-4 border-t-blue-600">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6 mx-auto">
                <div className="text-2xl font-bold">10+</div>
              </div>
              <h4 className="text-lg font-semibold mb-2">Années</h4>
              <p className="text-gray-600">
                Plus de 10 ans d'expérience dans la rénovation d'appartements
                et maisons à Paris.
              </p>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl overflow-hidden relative h-[400px]">
              <Image
                src="https://ext.same-assets.com/2610736688/484915847.jpeg"
                alt="Rénovation intérieure"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Une réalisation clé en main pour vos travaux de rénovation à Paris
              </h3>
              <p className="text-gray-600 mb-6">
                Si vous souhaitez réaliser des travaux à l'intérieur de votre bien immobilier,
                choisissez un prestataire qualifié qui veille aussi bien au confort qu'à la
                qualité esthétique et à l'harmonie visuelle. Grâce aux compétences variées
                et à l'expertise des techniciens de terrain, votre entreprise de rénovation
                à Paris peut facilement répondre à tous vos besoins.
              </p>

              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Plusieurs spécialités avec votre entreprise de rénovation à Paris
              </h4>
              <p className="text-gray-600 mb-6">
                Nous mettons à votre disposition des carreleurs, des peintres, des plaquistes,
                des chauffagistes prêts à intervenir après une étude du chantier. Nous rédigeons
                un cahier des charges précis en tenant compte de vos envies. Profitez de ces
                travaux pour optimiser l'espace habitable. Nous pouvons créer un dressing et
                des espaces de rangement supplémentaires dans les chambres, dans la salle de
                bain et dans la cuisine.
              </p>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default ChooseUs;
