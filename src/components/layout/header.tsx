"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, Phone, Clock } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50">
      {/* Top Header */}
      <div className="bg-white py-2 border-b border-gray-100">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center">
              <Image
                src="https://lhassrenov.s3.eu-north-1.amazonaws.com/logoep.png"
                alt="Logo lhassrenov"
                width={140}
                height={40}
                className="object-contain"
                priority
              />
            </Link>
            <div className="hidden md:block text-sm ml-8">
              <p className="text-gray-700">
                EP Services entreprise de rénovation basée en Ile de France. Nous intervenons tous
                les jours pour vos projets de rénovation, électricité et plomberie.
              </p>
            </div>
          </div>

          {/* Mobile burger button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-red-600 transition"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-blue-600 py-4 md:py-4">
      <div className="text-center text-white text-sm font-semibold tracking-wide py-1">
    Dépannage - Installation - Travaux Électricité - Plomberie - Appelez Nous
  </div>
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 text-white">
            <li><Link href="/" className="hover:text-red-200">Accueil</Link></li>
            <li><Link href="/a-propos" className="hover:text-red-200">À propos</Link></li>
            <li className="relative group">
  <div className="flex flex-col">
    <Link href="/services">
      <span className="cursor-pointer hover:text-red-200 flex items-center">
        Nos Services
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </Link>
    
    {/* Sous-menu */}
    <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-md overflow-hidden z-20 opacity-0 group-hover:opacity-100 transition-all duration-200 invisible group-hover:visible">
      <div className="py-2">
        {[
          { name: "Rénovation Électricité", path: "/services/renovation-electricite" },
          { name: "Rénovation Plomberie", path: "/services/renovation-plomberie" },
          { name: "Rénovation de salle de bain", path: "/services/renovation-salle-de-bain" },
          { name: "Rénovation appartement", path: "/services/renovation-appartement" },
          { name: "Rénovation maison", path: "/services/renovation-maison" },
          { name: "Rénovation Chauffage et Climatisation", path: "/services/renovation-chauffage-climatisation" },
          { name: "Installation climatisation en Ile de France", path: "/services/installation-climatisation" },
        ].map((link) => (
          <Link key={link.path} href={link.path} className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  </div>
</li>


            <li><Link href="/contact" className="hover:text-red-200">Contact</Link></li>
          </ul>

          {/* Desktop Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-8 text-white text-sm">
            <div className="flex items-center space-x-2 bg-white text-blue-600 px-2 py-1 rounded">
              <Phone className="h-4 w-4" />
              <span>07 61 18 90 56</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>60, rue François 1er, Paris 75008</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Lundi – Dimanche / 7h30 – 18h</span>
            </div>
            <Link href="/contact">
              <Button variant="default" className="bg-white text-blue-600 hover:bg-gray-100">
                Obtenir un Devis
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
  <div
    className="md:hidden px-4 py-4 space-y-2 bg-white text-gray-800 rounded-md shadow-lg mx-4 mt-2 transition-all duration-300 ease-in-out transform origin-top animate-slide-down"
  >
    <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block py-2">
      Accueil
    </Link>
    <Link href="/a-propos" onClick={() => setMobileMenuOpen(false)} className="block py-2">
      À propos
    </Link>
    <details className="py-2">
      <summary className="cursor-pointer">Nos Services</summary>
      <div className="pl-4 mt-2 space-y-1">
        {[
          { name: "Rénovation Électricité", path: "/services/renovation-electricite" },
          { name: "Rénovation Plomberie", path: "/services/renovation-plomberie" },
          { name: "Rénovation de salle de bain", path: "/services/renovation-salle-de-bain" },
          { name: "Rénovation appartement", path: "/services/renovation-appartement" },
          { name: "Rénovation maison", path: "/services/renovation-maison" },
          { name: "Rénovation Chauffage et Climatisation", path: "/services/renovation-chauffage-climatisation" },
          { name: "Installation climatisation en Ile de France", path: "/services/installation-climatisation" },
        ].map((link) => (
          <Link
            key={link.path}
            href={link.path}
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm py-1 hover:text-blue-600"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </details>

    {/* Bloc contact mobile */}
    <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
      <div className="flex items-center space-x-2">
        <MapPin className="h-5 w-5 text-blue-600" />
        <span className="text-sm">60, rue François 1er, Paris 75008</span>
      </div>
      <div className="flex items-center space-x-2">
        <Phone className="h-5 w-5 text-blue-600" />
        <span className="text-sm">07 61 18 90 56</span>
      </div>
      <div className="flex items-center space-x-2">
        <Clock className="h-5 w-5 text-blue-600" />
        <span className="text-sm">Lundi – Dimanche / 7h30 – 18h</span>
      </div>
    </div>

    {/* Bouton Devis mobile */}
    <Link href="/contact">
      <Button
        variant="default"
        className="w-full mt-4 bg-blue-600 text-white hover:bg-blue-700"
      >
        Obtenir un Devis
      </Button>
    </Link>
  </div>
)}

      </nav>
    </header>
  );
};

export default Header;
