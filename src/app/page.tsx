import Layout from "@/components/layout/layout";
import Hero from "@/components/sections/hero";
import ChooseUs from "@/components/sections/choose-us";
import Services from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EP Services- Entreprise de rénovation en Ile de France",
  description: "EP Services votre entreprise de rénovation en Ile de France. Rénovation appartement, maison, salle de bain, plomberie, électricité, chauffage et climatisation.",
};

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ChooseUs />
      <Services />
      <Testimonials />
    </Layout>
  );
}
