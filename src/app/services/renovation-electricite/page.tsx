import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function RenovationElectricite() {
  return (
    <>
      <Header />
      <main className="bg-white text-gray-900">
        <section className="py-20 px-4 md:px-10 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
            Rénovation électrique
          </h1>

          <p className="text-lg mb-6">
            Vous envisagez de rénover l'installation électrique de votre logement ? Découvrez les informations essentielles sur les coûts, les travaux à prévoir et les conseils pour une rénovation réussie.
          </p>
          <div className="flex flex-col md:flex-row md:items-start md:space-x-10 mt-10">

          <div className="md:w-2/3">

          <h2 className="text-2xl font-semibold mt-10 mb-4">Quel budget prévoir ?</h2>
          <p className="mb-4">
            Le coût d'une rénovation électrique dépend de plusieurs facteurs : l'état de l'installation existante, la surface du logement, le type de pose (apparente ou encastrée), et les équipements choisis. Voici quelques estimations :
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Rénovation partielle : entre <strong>80€ et 120€ / m²</strong></li>
            <li>Rénovation complète sans chauffage électrique : entre <strong>120€ et 150€ / m²</strong></li>
            <li>Rénovation complète avec chauffage électrique : entre <strong>150€ et 200€ / m²</strong></li>
            <li>Budget moyen pour une maison de 100 m² : <strong>entre 9 000€ et 15 000€</strong></li>
          </ul>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
            <Image
              src="https://lhassrenov.s3.eu-north-1.amazonaws.com/electriquien.png"
              alt="Plombier cartoon"
              width={300}
              height={300}
              className="object-contain drop-shadow-md"
            />
            </div>
          </div>
          <h2 className="text-2xl font-semibold mt-10 mb-4">Ce qui influence le coût</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Surface</strong> du logement</li>
            <li><strong>État actuel</strong> de l'installation électrique</li>
            <li><strong>Type de pose</strong> : apparente, semi-encastrée ou encastrée</li>
            <li><strong>Nombre de points lumineux et de prises</strong> à installer</li>
            <li><strong>Choix des équipements</strong> (tableau électrique, interrupteurs, prises, etc.)</li>
            <li><strong>Normes en vigueur</strong> (mise en conformité selon la norme NF C 15-100)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Quelques exemples de prix</h2>
          <div className="overflow-auto">
            <table className="min-w-full border text-sm">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="border px-4 py-2">Travaux</th>
                  <th className="border px-4 py-2">Tarifs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Mise aux normes tableau électrique</td>
                  <td className="border px-4 py-2">250€ à 700€</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Installation d'une prise électrique</td>
                  <td className="border px-4 py-2">40€ à 120€</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Installation d'un interrupteur</td>
                  <td className="border px-4 py-2">60€ à 200€</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Installation d'un éclairage intérieur</td>
                  <td className="border px-4 py-2">20€ à 350€</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Coût horaire d'un électricien</td>
                  <td className="border px-4 py-2">40€ à 50€ HT</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Conseils pour réussir votre rénovation électrique</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Faites réaliser un diagnostic de l'installation existante</li>
            <li>Définissez vos besoins en termes de points lumineux et de prises</li>
            <li>Choisissez des équipements conformes aux normes en vigueur</li>
            <li>Privilégiez une pose encastrée pour un rendu esthétique</li>
            <li>Faites appel à un électricien certifié pour garantir la sécurité</li>
            <li>Demandez plusieurs devis pour comparer les offres</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Exemples de rénovations électriques réalisées par EP services</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <Image src="https://lhassrenov.s3.eu-north-1.amazonaws.com/electricite1.jpeg" alt="Tableau électrique rénové" width={600} height={400} className="rounded-xl w-full h-auto object-cover" />
            <Image src="https://lhassrenov.s3.eu-north-1.amazonaws.com/electricite2.jpeg" alt="Installation électrique moderne" width={600} height={400} className="rounded-xl w-full h-auto object-cover" />
            <Image src="https://lhassrenov.s3.eu-north-1.amazonaws.com/electricite3.jpeg" alt="Prises et interrupteurs design" width={600} height={400} className="rounded-xl w-full h-auto object-cover" />
          </div>

          <div className="bg-red-900 text-white text-center py-12 px-4 rounded-xl">
            <h3 className="text-3xl font-bold mb-4">Vous avez un projet ?</h3>
            <p className="text-lg mb-6">Nous vous accompagnons dans toutes les étapes de votre rénovation électrique en Ile de France.</p>
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
}
