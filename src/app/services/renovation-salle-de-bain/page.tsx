import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function RenovationSalleDeBain() {
  return (
    <>
      <Header />
      <main className="bg-white text-gray-900">
        <section className="py-20 px-4 md:px-10 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
            Rénovation de salle de bain
          </h1>

          <p className="text-lg mb-6">
            Vous vous demandez quel budget prévoir pour la rénovation de votre salle de bain ? Quels sont les travaux possibles et les prix moyens ? Cette page vous guide pour y voir plus clair.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Quel budget prévoir ?</h2>
          <p className="mb-4">
            Le budget dépend fortement de votre projet : rénovation partielle ou complète, choix des matériaux, surface, plomberie, etc. Voici quelques estimations :
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Rénovation partielle : entre <strong>400€ et 800€ / m²</strong></li>
            <li>Rénovation complète : entre <strong>1 000€ et 1 600€ / m²</strong></li>
            <li>Budget moyen pour une salle de bain standard : <strong>entre 8 000€ et 16 000€</strong></li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Ce qui influence le coût</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Surface</strong> de la salle de bain</li>
            <li><strong>État actuel</strong> des installations (plomberie, électricité, etc.)</li>
            <li><strong>Matériaux</strong> choisis (entrée de gamme, haut de gamme, design…)</li>
            <li><strong>Complexité</strong> du chantier</li>
            <li><strong>Niveau de qualification</strong> des professionnels</li>
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
                  <td className="border px-4 py-2">Pose d'une douche à l'italienne</td>
                  <td className="border px-4 py-2">700€ à 13 000€</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Pose baignoire classique</td>
                  <td className="border px-4 py-2">800€ à 1 200€</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Dépose du carrelage</td>
                  <td className="border px-4 py-2">25€ à 80€ / m²</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Pose faïence murale</td>
                  <td className="border px-4 py-2">65€ à 150€ / m²</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Peinture salle de bain</td>
                  <td className="border px-4 py-2">15€ à 120€ / m²</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Conseils pour réussir votre rénovation</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Définissez vos besoins réels</li>
            <li>Priorisez les travaux essentiels</li>
            <li>Demandez plusieurs devis</li>
            <li>Privilégiez des professionnels certifiés</li>
            <li>Choisissez des matériaux adaptés aux pièces humides</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Exemples de salles de bains rénovées par EP Services</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <Image src="https://lhassrenov.s3.eu-north-1.amazonaws.com/salledebain.jpeg" alt="Salle de bain rénovée" width={600} height={400} className="rounded-xl w-full h-auto object-cover" />
            <Image src="https://lhassrenov.s3.eu-north-1.amazonaws.com/salledebain2.jpeg" alt="Salle de bain moderne" width={600} height={400} className="rounded-xl w-full h-auto object-cover" />
            <Image src="https://lhassrenov.s3.eu-north-1.amazonaws.com/evolution.jpeg" alt="Avant / après rénovation" width={600} height={400} className="rounded-xl w-full h-auto object-cover" />
            <Image src="https://lhassrenov.s3.eu-north-1.amazonaws.com/salledebain3.jpeg" alt="Salle de bain moderne" width={600} height={400} className="rounded-xl w-full h-auto object-cover" />
            <Image src="https://lhassrenov.s3.eu-north-1.amazonaws.com/salledebain4.jpeg" alt="Salle de bain moderne" width={600} height={400} className="rounded-xl w-full h-auto object-cover" />
            <Image src="https://lhassrenov.s3.eu-north-1.amazonaws.com/salledebain5.jpeg" alt="Salle de bain moderne" width={600} height={400} className="rounded-xl w-full h-auto object-cover" />
          </div>

          <div className="bg-blue-900 text-white text-center py-12 px-4 rounded-xl">
            <h3 className="text-3xl font-bold mb-4">Vous avez un projet ?</h3>
            <p className="text-lg mb-6">Nous vous accompagnons dans toutes les étapes de votre rénovation de salle de bain à Paris.</p>
            <Link href="/contact">
              <Button className="bg-white text-blue-900 hover:bg-blue-100 font-semibold text-lg px-6 py-3">
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
