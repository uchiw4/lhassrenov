import type { Metadata } from "next";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = {
  title: "À propos - EP Services",
  description:
    "Découvrez EP Services une entreprise de rénovation en Ile de France. Notre expertise, nos valeurs et notre équipe professionnelle à votre service.",
};

const stats = [
  { id: 1, value: "359", label: "Projets réalisés" },
  { id: 2, value: "4", label: "Années" },
  { id: 3, value: "6", label: "Experts" },
  { id: 4, value: "411", label: "Clients satisfaits" },
];

const values = [
  {
    id: 1,
    title: "Réactivité",
    description:
      "Vos problèmes ne peuvent pas attendre ! Nous intervenons en urgence à votre domicile dans notre zone d'intervention. Nous sommes à votre écoute et prêts à intervenir de façon fiable et réactive ! N'hésitez pas à joindre notre entreprise de rénovation en Ile de France.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Fiabilité",
    description:
      "Votre satisfaction est au cœur de nos préoccupations. Vos problèmes sont les nôtres. Nous parions sur la fidélité de nos clients, et sur le bouche à oreille. La qualité de notre service, la robustesse de nos installations, et votre satisfaction sont nos meilleures publicités !",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Qualité-prix",
    description:
      "Un tarif attractif. Nous bénéficions de tarifs avantageux auprès de nos distributeurs, ce qui nous permet de proposer du matériel à prix réduit, non accessible sur le marché public. Nous sommes ravis d'en faire bénéficier nos clients.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Transparence",
    description:
      "Un devis adapté à vos besoins. Nos devis sont clairs et simples à comprendre et surtout adaptés à chaque situation. Nous nous engageons à être le plus transparents possible avec nos clients.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Page() {
  return <AboutClient stats={stats} values={values} />;
}
