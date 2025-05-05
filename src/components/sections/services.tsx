"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
  );}

  const services = [
    {
      id: 1,
      title: "Rénovation Électricité",
      description: "Mise aux normes, installation électrique et dépannage par des électriciens qualifiés.",
      image: "https://lhassrenov.s3.eu-north-1.amazonaws.com/travaux-renovation-maison-640x360.jpg",
      link: "/services/renovation-electricite"
    },
    {
      id: 2,
      title: "Rénovation Plomberie",
      description: "Changements de canalisations, réparations et installations sanitaires de qualité.",
      image: "https://lhassrenov.s3.eu-north-1.amazonaws.com/PHOTO-2022-09-07-18-17-50_1.jpg",
      link: "/services/renovation-plomberie"
    },
    {
      id: 3,
      title: "Rénovation Salle de Bain",
      description: "La rénovation d'une salle de bain en Ile de France nécessite une bonne préparation pour déterminer les différents types de travaux à réaliser.",
      image: "https://lhassrenov.s3.eu-north-1.amazonaws.com/salledebain.jpeg",
      link: "/services/renovation-salle-de-bain"
    },
    {
      id: 4,
      title: "Rénovation Appartement",
      description: "EP Services vous conseille et vous guide pour vous aider à réaliser vos projets dans les meilleures conditions.",
      image: "https://lhassrenov.s3.eu-north-1.amazonaws.com/appartement.jpeg",
      link: "/services/renovation-appartement"
    },
    {
      id: 5,
      title: "Rénovation Maison",
      description: "Les travaux de rénovation d'une maison en Ile de France ne s'improvisent pas. L'intervention d'un expert qualifié est indispensable pour ce genre de projet",
      image: "https://lhassrenov.s3.eu-north-1.amazonaws.com/maison-ancienne-vs-maison-renovee.jpg",
      link: "/services/renovation-maison"
    },
    {
      id: 6,
      title: "Rénovation Chauffage et Climatisation",
      description: "Installation et rénovation de systèmes de chauffage et climatisation sur mesure",
      image: "https://lhassrenov.s3.eu-north-1.amazonaws.com/chauffage-sol-renovation.jpg",
      link: "/services/renovation-chauffage-climatisation"
    }
  ];
const Services = () => {
  return (
    <FadeInSection>
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-2">
            Nos Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Découvrez nos différents services<br />
            proposés par EP Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden border-0 shadow-lg transition-transform hover:-translate-y-1">
              <div className="relative h-60">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <Link href={service.link} className="inline-flex items-center text-blue-600 hover:text-blue-800">
                  En savoir plus
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-blue-600 rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Contactez-nous pour plus d'informations !
            </h3>
            <div className="flex items-center mt-4">
              <div className="mr-3 rounded-full bg-blue-500 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <span className="block text-blue-200 text-sm">Téléphone</span>
                <a href="tel:0651604595" className="text-white font-semibold hover:text-blue-100 transition-colors">
                07 61 18 90 56
                </a>
              </div>
            </div>
          </div>
          <div>
            <Link href="/contact">
              <Button className="w-full md:w-auto bg-white text-blue-600 hover:bg-blue-50">
                Contactez-nous
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
    </FadeInSection>
  );
};

export default Services;
