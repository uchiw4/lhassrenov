import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function RenovationChauffageClimatisation() {
  return (
    <>
      <Header />
      <main className="bg-white text-gray-900">
        <section className="py-20 px-4 md:px-10 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
            Rénovation Chauffage & Climatisation
          </h1>

          <p className="text-lg mb-6">
            Vous envisagez de rénover votre système de chauffage ou d'installer une climatisation ? Quels sont les coûts à prévoir, les options disponibles et les conseils pour réussir votre projet ? Cette page vous guide pas à pas.
          </p>
          <div className="flex flex-col md:flex-row md:items-start md:space-x-10 mt-10">

          <div className="md:w-2/3">
          <h2 className="text-2xl font-semibold mt-10 mb-4">Quel budget prévoir ?</h2>
          <p className="mb-4">
            Le coût d'une rénovation de chauffage ou de climatisation dépend du type de système choisi, de la surface à couvrir et des spécificités de votre logement. Voici quelques estimations :
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Installation d'une chaudière à condensation gaz : entre <strong>3 800€ et 6 500€</strong></li>
            <li>Installation d'une pompe à chaleur air-eau : entre <strong>8 000€ et 16 000€</strong></li>
            <li>Installation d'une climatisation réversible : entre <strong>2 000€ et 15 000€</strong></li>
          </ul>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
            <Image
              src="https://lhassrenov.s3.eu-north-1.amazonaws.com/renoveur3.png"
              alt="Plombier cartoon"
              width={300}
              height={300}
              className="object-contain drop-shadow-md"
            />
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Ce qui influence le coût</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Surface</strong> du logement à chauffer ou climatiser</li>
            <li><strong>Type de système</strong> choisi (chaudière, pompe à chaleur, climatisation réversible...)</li>
            <li><strong>État actuel</strong> des installations existantes</li>
            <li><strong>Complexité</strong> de l'installation (accessibilité, modifications nécessaires...)</li>
            <li><strong>Qualité</strong> des équipements et des matériaux utilisés</li>
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
                  <td className="border px-4 py-2">Installation d'une chaudière à condensation gaz</td>
                  <td className="border px-4 py-2">3 800€ à 6 500€</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Pose de climatisation réversible</td>
                  <td className="border px-4 py-2">1600 à 6 000€</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Installation d'une pompe à chaleur air-eau</td>
                  <td className="border px-4 py-2">8 000€ à 16 000€</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Installation d'une climatisation réversible</td>
                  <td className="border px-4 py-2">2 000€ à 15 000€</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Pose de robinets thermostatiques</td>
                  <td className="border px-4 py-2">85€ à 170€ l'unité</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Installation d'une régulation programmable</td>
                  <td className="border px-4 py-2">260€ à 650€</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Conseils pour réussir votre rénovation</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Faites réaliser un audit énergétique pour identifier les besoins spécifiques de votre logement</li>
            <li>Choisissez des équipements adaptés à la taille et à l'isolation de votre habitation</li>
            <li>Privilégiez des systèmes performants et économes en énergie</li>
            <li>Assurez-vous que l'installation est réalisée par des professionnels qualifiés</li>
            <li>Entretenez régulièrement vos équipements pour garantir leur efficacité et leur longévité</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Exemples de rénovations réalisées par EP Services</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <Image src="https://lhassrenov.s3.eu-north-1.amazonaws.com/chauffage-clim1.png" alt="Installation de chaudière" width={600} height={400} className="rounded-xl w-full h-auto object-cover" />
            <Image src="https://lhassrenov.s3.eu-north-1.amazonaws.com/chauffage-clim2.jpg" alt="Pose de climatisation réversible" width={600} height={400} className="rounded-xl w-full h-auto object-cover" />
            <Image src="https://lhassrenov.s3.eu-north-1.amazonaws.com/chauffage-clim3.jpg" alt="Système de chauffage moderne" width={600} height={400} className="rounded-xl w-full h-auto object-cover" />
          </div>

          <div className="bg-red-900 text-white text-center py-12 px-4 rounded-xl">
            <h3 className="text-3xl font-bold mb-4">Vous avez un projet de rénovation ?</h3>
            <p className="text-lg mb-6">Notre équipe vous accompagne dans toutes les étapes de la rénovation de votre système de chauffage et de climatisation en Ile de France.</p>
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
