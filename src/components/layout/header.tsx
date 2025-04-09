import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="relative z-50">
      {/* Top Header */}
      <div className="bg-white py-2 border-b border-gray-100">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center">
            <Image
              src="https://lhassrenov.s3.eu-north-1.amazonaws.com/lhassheder.png"
              alt="Logo LHASSRENOV"
              width={140}
              height={40}
              className="object-contain"
              priority
            />
          </Link>
            <div className="hidden md:block text-sm ml-8">
              <p className="text-gray-700">
                LHASSRENOV, entreprise de rénovation basée à Paris. Nous intervenons tous
                les jours pour tous vos projets de rénovation intérieure, organisation, gestion,
                coordination de vos travaux mais aussi pour tous vos travaux de dépannage en
                électricité et plomberie.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-sm py-2">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-blue-100 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-xs font-medium">Adresse</p>
                <p className="text-sm font-medium">60, rue François 1er, Paris, 75008</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-blue-100 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-xs font-medium">E-mail</p>
                <a href="mailto:lhassrenov@gmail.com" className="text-sm font-medium hover:text-blue-600 transition-colors">
                  lhassrenov@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-blue-100 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-xs font-medium">Horaires</p>
                <p className="text-sm font-medium">Lundi - Dimanche / 7h30 - 18h</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-blue-100 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-xs font-medium">Téléphone</p>
                <a href="tel:0651604595" className="text-sm font-medium hover:text-blue-600 transition-colors">
                  07 61 18 90 56
                </a>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </Link>
            <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Link>
            <Link href="/contact" className="ml-4">
              <Button variant="default" className="bg-blue-600 hover:bg-blue-700 text-white">
                Obtenir un Devis
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-blue-600 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <ul className="flex space-x-6 text-white">
            <li>
              <Link href="/" className="hover:text-blue-200 transition-colors">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/a-propos" className="hover:text-blue-200 transition-colors">
                À propos
              </Link>
            </li>
            <li className="relative group">
              <span className="cursor-pointer hover:text-blue-200 transition-colors flex items-center">
                Nos Services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden z-20 transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 origin-top-left hidden group-hover:block">
                <div className="py-2">
                  <Link href="/services/renovation-salle-de-bain" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Rénovation de salle de bain
                  </Link>
                  <Link href="/services/renovation-appartement" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Rénovation appartement
                  </Link>
                  <Link href="/services/renovation-maison" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Rénovation maison
                  </Link>
                  <Link href="/services/renovation-chauffage-climatisation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Rénovation Chauffage et Climatisation
                  </Link>
                  <Link href="/services/renovation-electricite" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Rénovation Électricité
                  </Link>
                  <Link href="/services/renovation-plomberie" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Rénovation Plomberie
                  </Link>
                  <Link href="/services/installation-climatisation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Installation climatisation à Paris
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-200 transition-colors">
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex items-center">
            <button className="text-white hover:text-blue-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
