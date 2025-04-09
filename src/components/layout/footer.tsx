import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="mb-6">
              <Link href="/" className="text-2xl font-bold text-white flex items-center">
              <Image
                  src="https://lhassrenov.s3.eu-north-1.amazonaws.com/lhassheder.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAQGYBPVKALFMG37SE%2F20250408%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250408T222520Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCmV1LW5vcnRoLTEiRzBFAiB3gMyG8qh7IX8gEqtlJifoYPKC1z2lMdV283iMGJxwUQIhAOZVn92xYvHWWKA5BHpfMh6yLhK7or4p0%2F7QAL%2BrPk12KvUCCID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMDE0NDk4NjM4NDY0IgypTResfPcV9tDLAmkqyQLmnJ6Y5Bg%2ByqYKBqYJPjU2jR4lvwT2ioXa7YBxaNvQASdkIp6L2E0sj0h5BEG7PVSuzr%2FyXbl9%2B51JWBEOVGICRXHxWpRRFqFCi%2FEjFo9rvGd8ya4hW8tzELDBtg1FQkSu7p9FXsBpcG5A6MkZDCUXAnce8nyQzNVxkIEWTdNAGMifEwbqsEbDB%2F1S5myqYKXMIeDeDBWpZlARj85EFxht6efJwUOQrfl4ppE5vixORzQF8rQJu6QCcgWYMDkl%2BmMurc1WsDqjxwV5NUDOgG6E9r226PQUiJKbzU6SU34KGt5ClQFNV6gVUsnekIILgGuaIaOrFfvelTiz6VYnXVuT5UsLlkrhKgpHx%2F9NA1QKr1qBmHz2ew11tdFUvcG6pKiSBgArO6TuC5vNb3%2FxwP0pScn0Rv99guDtUituieeg52C9dc2e6FK7jjCnw9a%2FBjqzAvIU76UBqyS%2FndsiF6wFExsSeoRfMfwl7ZBLDhl1TiHnJnEEvwGJlC7%2FPT92c%2BBx898qZMxMFVxHjtapP%2FPKXfN3D8AC3w5qGilGfGyGIrQwdGYfcEH0fJAT3oMhQGbTSbwQA7MODis%2FpNWkNc1gkacIhwXa7xzJcAExqTHm1P3zpwhzREfaJxncLMloHFGjN6na6HwNr10bZZDXtArbjfRyD3yQO21rU7rzqTcuxkseQBGEkddtKkBELW50nSl551jkacmmI0LPrCfYma15bnsCnl%2B0IosLcHPoZ5lel4q6f1Fr1kiF%2Fy4yTvAqf9at0abUDltGphdpr10Y8wkELEVJCJlQ6FuADK8USScv%2FnRfOUASG1ZZ%2BKCRGHuirHlK%2BIEQlY3gyO1ieL7nvHKESHrq6S4%3D&X-Amz-Signature=a7d7f23fada5323ae69ce46db1491e068b41615400fa3be9bceac0f744e32fee&X-Amz-SignedHeaders=host&response-content-disposition=inline"
                  alt="Logo LHASSRENOV"
                  width={180}
                  height={60}
                  className="object-contain"
                  priority
                />
              </Link>
            </div>
            <p className="text-gray-400 mb-4">
              LHASSRENOV est votre entreprise tout corps d'état de rénovation et décoration
              intérieure à Paris.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              Nos Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/renovation-salle-de-bain" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Rénovation de salle de bain
                </Link>
              </li>
              <li>
                <Link href="/services/renovation-appartement" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Rénovation appartement
                </Link>
              </li>
              <li>
                <Link href="/services/renovation-maison" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Rénovation maison
                </Link>
              </li>
              <li>
                <Link href="/services/renovation-chauffage-climatisation" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Rénovation Chauffage et Climatisation
                </Link>
              </li>
              <li>
                <Link href="/services/renovation-electricite" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Rénovation Électricité
                </Link>
              </li>
              <li>
                <Link href="/services/renovation-plomberie" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Rénovation Plomberie
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              Menu
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Contact
                </Link>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-8 mb-6 relative">
              Newsletter
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h3>
            <p className="text-gray-400 mb-4">
              Inscrivez-vous à la newsletter de LHASSRENOV pour un accès à nos dernières promotions !
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Votre adresse E-mail"
                className="rounded-r-none text-black"
              />
              <Button className="rounded-l-none bg-blue-600 hover:bg-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </div>
            <p className="text-gray-400 mt-3 text-sm">
              Une Question ? <Link href="/contact" className="text-blue-400 hover:underline">Cliquez ici</Link>
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} LHASSRENOV
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/mentions-legales" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Mentions légales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
