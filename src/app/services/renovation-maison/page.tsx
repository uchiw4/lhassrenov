import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function RenovationMaison() {
  return (
    <>
      <Header />
      <main className="bg-white text-gray-900">
        <section className="py-20 px-4 md:px-10 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
            Rénovation de maison en Ile de France
          </h1>

          <p className="text-lg mb-6">
            Vous envisagez de rénover votre maison en Ile de France ? Quels sont les coûts à prévoir, les étapes clés et les conseils pour réussir votre projet ? Cette page vous guide pas à pas.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Quel budget prévoir ?</h2>
          <p className="mb-4">
            Le coût d'une rénovation de maison dépend de l'ampleur des travaux, de la surface et des matériaux choisis. Voici quelques estimations :
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Rafraîchissement léger : entre <strong>200€ et 500€ / m²</strong></li>
            <li>Rénovation complète : entre <strong>500€ et 1 000€ / m²</strong></li>
            <li>Rénovation lourde : entre <strong>1 000€ et 1 700€ / m²</strong></li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Ce qui influence le coût</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Surface</strong> totale de la maison</li>
            <li><strong>État actuel</strong> de la structure, de la plomberie et de l'électricité</li>
            <li><strong>Matériaux</strong> choisis (standard, haut de gamme, écologiques…)</li>
            <li><strong>Complexité</strong> des travaux (modification de cloisons, extension…)</li>
            <li><strong>Réglementations</strong> locales et contraintes architecturales</li>
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
                  <td className="border px-4 py-2">Rénovation électrique complète</td>
                  <td className="border px-4 py-2">100€ à 210€ / m²</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Rénovation plomberie</td>
                  <td className="border px-4 py-2">70€ à 150€ / m²</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Isolation thermique par l'extérieur</td>
                  <td className="border px-4 py-2">150€ à 200€ / m²</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Pose de parquet massif</td>
                  <td className="border px-4 py-2">80€ à 150€ / m²</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Rénovation de toiture</td>
                  <td className="border px-4 py-2">180€ à 250€ / m²</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Conseils pour réussir votre rénovation</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Établissez un budget réaliste avec une marge pour les imprévus</li>
            <li>Faites appel à des professionnels qualifiés et expérimentés</li>
            <li>Vérifiez les réglementations locales et les autorisations nécessaires</li>
            <li>Privilégiez des matériaux durables et adaptés à votre environnement</li>
            <li>Planifiez les travaux en fonction de votre calendrier et de vos contraintes</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Exemples de maisons rénovées par EP Services</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <Image src="https://lhassrenov.s3.eu-north-1.amazonaws.com/renovation-maison1.jpeg" alt="Maison rénovée 1" width={600} height={400} className="rounded-xl w-full h-auto object-cover" />
            <Image src="https://lhassrenov.s3.eu-north-1.amazonaws.com/renovation-maison2.jpeg" alt="Maison rénovée 2" width={600} height={400} className="rounded-xl w-full h-auto object-cover" />
            <Image src="https://lhassrenov.s3.eu-north-1.amazonaws.com/renovation-maison3.jpeg" alt="Maison rénovée 3" width={600} height={400} className="rounded-xl w-full h-auto object-cover" />
          </div>

          <div className="bg-red-900 text-white text-center py-12 px-4 rounded-xl">
            <h3 className="text-3xl font-bold mb-4">Vous avez un projet de rénovation ?</h3>
            <p className="text-lg mb-6">Notre équipe vous accompagne dans toutes les étapes de la rénovation de votre maison en Ile de France.</p>
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
