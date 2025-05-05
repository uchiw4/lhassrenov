import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function RenovationPlomberie() {
  return (
    <>
      <Header />
      <main className="bg-white text-gray-900">
        <section className="py-20 px-4 md:px-10 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
            Rénovation de plomberie
          </h1>

          <p className="text-lg mb-6">
            Vous envisagez de rénover la plomberie de votre logement ? Découvrez les informations essentielles pour estimer votre budget, comprendre les travaux nécessaires et planifier efficacement votre projet.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Quel budget prévoir ?</h2>
          <p className="mb-4">
            Le coût d'une rénovation de plomberie dépend de plusieurs facteurs, notamment l'état de l'installation existante, la superficie du logement et les équipements choisis. Voici quelques estimations :
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Rénovation partielle : entre <strong>70€ et 150€ / m²</strong></li>
            <li>Rénovation complète d'une maison de 100 m² : entre <strong>8 000€ et 20 000€</strong></li>
            <li>Remplacement de canalisations : entre <strong>30€ et 100€ / mètre linéaire</strong></li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Ce qui influence le coût</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>État de la plomberie existante</strong> : vétusté, conformité aux normes</li>
            <li><strong>Superficie du logement</strong> : nombre de pièces à desservir</li>
            <li><strong>Choix des matériaux</strong> : cuivre, PER, multicouche, etc.</li>
            <li><strong>Complexité du chantier</strong> : accessibilité, nécessité de démolition</li>
            <li><strong>Tarif horaire du plombier</strong> : entre 40€ et 90€</li>
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
                  <td className="border px-4 py-2">Remplacement tuyauterie PER</td>
                  <td className="border px-4 py-2">9€ à 13€ / mètre linéaire</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Remplacement tuyauterie cuivre</td>
                  <td className="border px-4 py-2">11€ à 41€ / mètre linéaire</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Installation d'un WC suspendu</td>
                  <td className="border px-4 py-2">300€ à 3 000€</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Pose d'un chauffe-eau électrique</td>
                  <td className="border px-4 py-2">500€ à 2 500€</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Installation d'une douche</td>
                  <td className="border px-4 py-2">1 600€ à 8 000€</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Conseils pour réussir votre rénovation</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Faites un diagnostic complet de l'installation existante</li>
            <li>Privilégiez des matériaux durables et conformes aux normes</li>
            <li>Demandez plusieurs devis pour comparer les offres</li>
            <li>Anticipez les éventuels travaux annexes (maçonnerie, carrelage)</li>
            <li>Vérifiez les certifications et assurances des professionnels</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Exemples de rénovations de plomberie</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <Image src="https://lhassrenov.s3.eu-north-1.amazonaws.com/PHOTO-2022-09-07-18-17-50_1.jpg" alt="Rénovation plomberie 1" width={600} height={400} className="rounded-xl w-full h-auto object-cover" />
            <Image src="https://lhassrenov.s3.eu-north-1.amazonaws.com/plomberie.jpg" alt="Rénovation plomberie 2" width={600} height={400} className="rounded-xl w-full h-auto object-cover" />
            <Image src="https://lhassrenov.s3.eu-north-1.amazonaws.com/Installation-plomberie.jpeg" alt="Rénovation plomberie 3" width={600} height={400} className="rounded-xl w-full h-auto object-cover" />
          </div>

          <div className="bg-red-900 text-white text-center py-12 px-4 rounded-xl">
            <h3 className="text-3xl font-bold mb-4">Vous avez un projet de rénovation de plomberie ?</h3>
            <p className="text-lg mb-6">Notre équipe vous accompagne dans toutes les étapes de votre projet, de l'étude à la réalisation.</p>
            <Link href="/contact">
              <Button className="bg-white text-red-900 hover:bg-red-100 font-semibold text-lg px-6 py-3">
                Prendre rendez-vous
              </Button>
            </Link>
          </div>
          <div className="md:w-1/3 mt-10 md:mt-0 flex justify-center items-start">
      <Image
        src="https://lhassrenov.s3.eu-north-1.amazonaws.com/plombier.png"
        alt="Plombier cartoon"
        width={400}
        height={400}
        className="object-contain"
      />
    </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
