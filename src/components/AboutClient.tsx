'use client';

import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import React from "react";

function StatItem({ value, label }: { value: string; label: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.6 });

  return (
    <div className="text-center" ref={ref}>
      <div className="text-5xl font-bold text-white mb-2">
        {inView ? <CountUp end={parseInt(value)} duration={2} /> : "0"}
      </div>
      <div className="text-blue-100">{label}</div>
    </div>
  );
}

export default function AboutClient({
  stats,
  values,
}: {
  stats: { id: number; value: string; label: string }[];
  values: {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
}) {
  return (
    <Layout>
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-2">
              LHASSRENOV
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quels sont les atouts de notre entreprise de rénovation à Paris ?
            </h1>
            <p className="text-gray-600">
              Nous sommes des professionnels de la rénovation à Paris. Nos clients nous font
              confiance car nous disposons de nombreux atouts, aux services de la qualité de nos
              prestations et de votre satisfaction.
            </p>
          </div>

          {/* Atouts principaux */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16 text-center">
            <Card className="p-4 shadow-md flex flex-col items-center justify-center">
              <div className="rounded-full bg-blue-100 p-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700">Gestion complète du chantier</span>
            </Card>
            <Card className="p-4 shadow-md flex flex-col items-center justify-center">
              <div className="rounded-full bg-blue-100 p-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700">Respect des normes françaises en vigueur</span>
            </Card>
            <Card className="p-4 shadow-md flex flex-col items-center justify-center">
              <div className="rounded-full bg-blue-100 p-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700">Interventions en urgence</span>
            </Card>
            <Card className="p-4 shadow-md flex flex-col items-center justify-center">
              <div className="rounded-full bg-blue-100 p-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700">Tarifs réglementés</span>
            </Card>
            <Card className="p-4 shadow-md flex flex-col items-center justify-center">
              <div className="rounded-full bg-blue-100 p-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700">Étude et conseils personnalisés</span>
            </Card>
          </div>

          <div className="flex justify-center mb-16">
            <Link href="/devis">
              <button className="bg-blue-600 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-lg shadow-md transition">
                Demandez un devis
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Valeurs de l'entreprise */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Les Valeurs d'LHASSRENOV</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <Card key={value.id} className="bg-gray-800 border-gray-700 p-6 shadow-xl">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 text-blue-400">{value.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <StatItem key={stat.id} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Présentation entreprise */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="col-span-1">
              <Image
                src="https://ext.same-assets.com/2610736688/2663493012.jpeg"
                alt="LHASSRENOV - Notre équipe"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre entreprise</h2>
              <p className="text-gray-600 mb-6">
                LHASSRENOV est votre entreprise tout corps d'état de rénovation et décoration intérieure à Paris.
                Avec plusieurs années d'expérience dans le domaine, notre équipe de professionnels qualifiés est
                à votre disposition pour tous vos projets de rénovation.
              </p>
              <p className="text-gray-600 mb-6">
                Nous intervenons pour la rénovation complète d'appartements et de maisons, mais aussi pour des
                travaux spécifiques comme la rénovation de salle de bain, l'électricité, la plomberie, le chauffage
                et la climatisation.
              </p>
              <p className="text-gray-600">
                Notre objectif est de vous offrir des services de qualité, personnalisés et adaptés à vos besoins,
                tout en respectant votre budget et les délais convenus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
