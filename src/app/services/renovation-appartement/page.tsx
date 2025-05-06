"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const RenovationAppartement = () => {
  return (
    <>
      <Header />
      <main className="bg-white text-gray-900">
        <section className="py-20 px-4 md:px -10 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
            Rénovation d'Appartement
          </h1>

          <p className="text-lg mb-6">
            Vous envisagez de rénover votre appartement en Ile de France ? Découvrez les coûts estimatifs, des conseils pratiques et des exemples de réalisations pour vous guider dans votre projet.
          </p>
          <div className="flex flex-col md:flex-row md:items-start md:space-x-10 mt-10">

          <div className="md:w-2/3">

          <h2 className="text-2xl font-semibold mt-10 mb-4">Quel budget prévoir ?</h2>
          <p className="mb-4">
            Le coût d'une rénovation d'appartement en Ile de France varie en fonction de l'ampleur des travaux :
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Rafraîchissement léger</strong> : entre 800 € et 1 200 € par m²</li>
            <li><strong>Rénovation complète</strong> : entre 1 500 € et 2 500 € par m²</li>
            <li><strong>Rénovation lourde</strong> : jusqu'à 3 200 € par m²</li>
          </ul>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
            <Image
              src="https://lhassrenov.s3.eu-north-1.amazonaws.com/renoveur1.png"
              alt="Plombier cartoon"
              width={300}
              height={300}
              className="object-contain drop-shadow-md"
            />
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Conseils pour réussir votre rénovation</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Évaluation de l'état actuel</strong> : réalisez un diagnostic complet de votre appartement pour identifier les travaux nécessaires.</li>
            <li><strong>Planification précise</strong> : élaborez un plan détaillé des modifications souhaitées, en tenant compte des contraintes structurelles.</li>
            <li><strong>Choix des matériaux</strong> : optez pour des matériaux adaptés à vos besoins et à votre budget, en privilégiant la qualité pour une durabilité accrue.</li>
            <li><strong>Sélection des professionnels</strong> : faites appel à des artisans qualifiés et demandez plusieurs devis pour comparer les offres.</li>
            <li><strong>Suivi des travaux</strong> : assurez un suivi régulier du chantier pour veiller au respect des délais et de la qualité des prestations.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Exemples de rénovations d'appartements par EP Services</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <Image
              src="https://lhassrenov.s3.eu-north-1.amazonaws.com/renovation-appartement1.jpeg"
              alt="Rénovation Appartement Paris"
              width={600}
              height={400}
              className="rounded-xl w-full h-auto object-cover"
            />
            <Image
              src="https://lhassrenov.s3.eu-north-1.amazonaws.com/renovation-appartement2.jpeg"
              alt="Rénovation Appartement Moderne"
              width={600}
              height={400}
              className="rounded-xl w-full h-auto object-cover"
            />
            <Image
              src="https://lhassrenov.s3.eu-north-1.amazonaws.com/renovation-appartement3.jpeg"
              alt="Avant/Après Rénovation"
              width={600}
              height={400}
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>

          <div className="bg-red-900 text-white text-center py-12 px-4 rounded-xl">
            <h3 className="text-3xl font-bold mb-4">Vous avez un projet ?</h3>
            <p className="text-lg mb-6">
              Notre équipe de professionnels est à votre écoute pour vous accompagner de la conception à la réalisation de vos travaux.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-red-900 hover:bg-red-100 font-semibold text-lg px-6 py-3">
                Prendre rendez-vous
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default RenovationAppartement;
