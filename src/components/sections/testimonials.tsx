import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Charles Sottet",
    text: "J'ai fait appel à cette entreprise pour le remplacement de mon chauffe eau et la rénovation de ma salle de bain je suis très satisfait du travail réalisé",
    image: "https://ext.same-assets.com/2610736688/1136031990.jpeg"
  },
  {
    id: 2,
    name: "Ludo Schreiner",
    text: "J'ai fais appel à l'entreprise LHASSRENOV pour la rénovation complète de mon appartement je suis ravi du travail réalisé et je vous recommande cette entreprise. La qualité des travaux, la gestion du chantier et les delais ont etaient respectés. Encore merci à vous",
    image: "https://ext.same-assets.com/2610736688/466771147.jpeg"
  },
  {
    id: 3,
    name: "Helena Mulliri",
    text: "Entreprise compétente suite à un dégât des eaux l'entreprise LHASSRENOV a recherché la fuite et réparer et rénover ma salle de bain. Je vous les recommandes sans hésiter",
    image: "https://ext.same-assets.com/2610736688/2108088447.jpeg"
  },
  {
    id: 4,
    name: "Anais Morcillo",
    text: "Yonni est intervenu pour la pose d'une paroi de douche pour un client. Travail de qualité, très professionnel et agréable. Je recommande !!!!!",
    image: "https://ext.same-assets.com/2610736688/1136031990.jpeg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-2">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ce que nos clients disent de nous
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez les retours d'expérience de nos clients satisfaits qui ont fait appel à
            LHASSRENOV pour leurs projets de rénovation à Paris.
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2 pl-4">
                <div className="p-1">
                  <Card className="p-6 h-full flex flex-col">
                    <div className="flex-1">
                      <svg className="h-8 w-8 text-blue-600 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.7 25.4c-1.9 0-3.6-.7-5-2.1-1.4-1.4-2-3-2-5 0-2.1.8-4.2 2.4-6.4 1.6-2.2 3.4-3.9 5.4-5l1.9 2.9c-1.4.8-2.7 1.9-3.8 3.5a6.29 6.29 0 00-1.1 1.9c.7-.3 1.4-.4 2.2-.4 1.7 0 3.1.5 4.1 1.6 1 1.1 1.6 2.4 1.6 4 0 1.7-.6 3.2-1.7 4.3-1.3 1.2-2.7 1.7-4 1.7zm13.3 0c-1.9 0-3.6-.7-5-2.1-1.4-1.4-2-3-2-5 0-2.1.8-4.2 2.4-6.4 1.6-2.2 3.4-3.9 5.4-5l1.9 2.9c-1.4.8-2.7 1.9-3.8 3.5-.4.6-.8 1.2-1.1 1.9.7-.3 1.4-.4 2.2-.4 1.7 0 3.1.5 4.1 1.6 1 1.1 1.6 2.4 1.6 4 0 1.7-.6 3.2-1.7 4.3-1.2 1.2-2.6 1.7-4 1.7z" />
                      </svg>
                      <p className="text-gray-600 mb-6 italic">
                        {testimonial.text}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 relative">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">Client satisfait</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="relative static translate-y-0 bg-blue-600 text-white hover:bg-blue-700" />
            <CarouselNext className="relative static translate-y-0 bg-blue-600 text-white hover:bg-blue-700" />
          </div>
        </Carousel>

        <div className="mt-16 flex flex-wrap justify-center gap-10 items-center opacity-60">
        <Image
                  src="https://images-ext-1.discordapp.net/external/mymNM7ij6eIzzb8KgIM6vkqLcS38dhcDej8su_W35Ac/%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAQGYBPVKALUKEJKD2%252F20250402%252Feu-north-1%252Fs3%252Faws4_request%26X-Amz-Date%3D20250402T131326Z%26X-Amz-Expires%3D300%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjEG0aCmV1LW5vcnRoLTEiSDBGAiEA6fsP%252Bug1JkKIqtGiqYdBkszCDQB5WW4xVmqvD7o8wR4CIQDPb3q4y8LJeKLTZMO74EDbtFQa2JRPambiR8ev48W3vir1AgjW%252F%252F%252F%252F%252F%252F%252F%252F%252F%252F8BEAAaDDAxNDQ5ODYzODQ2NCIMXpwX1Q%252BV9nPUs7TrKskC3RuIilRfvfCdzv21d%252B0uSyxyrThm%252FiFFBqfOcSE1GeUdCNd2XDQaC3H2e9GKg5Gk2uxjE9G9aNsSfwcKq1i3tsO2fDblOX%252BHd9Ia1ET1kRwcv4305CSSirZy0E3Nb6i%252F6mgB0MDC2NQLaGO%252BcE76%252FXbtw6FqhRNuWvtByK%252FX7cTDGAE0v5N7rezfloo2%252FewLLU8Tzy5E6RiF%252F1DlVmjFcF3iFSI5Op20hkptPuzjfs8mpa1Yxofg86SLu2XbPC5I6waiGRY%252F611%252B93krUzJ0VsP1qWc%252FaTm0snFxJ48YuOuZ1ezqmQN5VkpOVqxbKwRsnMQIOr%252FS3ExAH3q3DduvlJO4s8hAlXfKLGncWp6jdIdrLssdu1PbomlwfyiPaWIL3AUKoWt5N3GmXwxE%252B1yyB5%252FLJ%252FB1m%252FcFFVwTez9PGsrwrcTaWNoJ3hIw2u60vwY6sgIvrIAY%252BTIVvdSU3hup2Tbb%252BNctaf5BofNfFJLzFVSpHa3NBt4KGkXnq8YngBdwT5F%252FQO%252Bm8OY4yNxchd7uswac1tNYlDqb0Z1ElquArdy5b%252FY%252FAV4bkSHzp1NgViMcUIjZIFqJ4beyw0bFpuVA2tz1ymDCwLmc%252B07DbjBvMWnZ8%252BL6rrLoW3cYwx1vqu%252FctS93%252BTE%252Bu7jc%252FtOBvv%252BEqV7g3LosUskszucXedUuZMeMzyvHgDzXY6SUqy1kQFRS1mxV8FweByCa6h06C35svVjHVDZ471l8AeeNnk%252Bg4U1QH1MSNB1BvC8RpUhcj5060dJZZKI10aUsSb3Tn34FnF2j%252BoXCXXLVcrC%252B5BXRCu3r%252FUirX%252FZm9Ykz7gy3P2D3INmIOAvGdo9jDRQScqZiXA3YlLQ%253D%26X-Amz-Signature%3Db3e6f1e71ba76c29b503c27492fc32b97ff47606959a0331b006206eb2e69d1d%26X-Amz-SignedHeaders%3Dhost%26response-content-disposition%3Dinline/https/lhassrenov.s3.eu-north-1.amazonaws.com/lhassheder.png?format=webp&quality=lossless&width=1756&height=532"
                  alt="Logo LHASSRENOV"
                  width={180}
                  height={60}
                  className="object-contain"
                  priority
                />
          <Image
            src="https://ext.same-assets.com/2610736688/977228281.jpeg"
            alt="Partner"
            width={120}
            height={50}
            className="grayscale object-contain"
          />
          <Image
            src="https://ext.same-assets.com/2610736688/2912193207.jpeg"
            alt="Partner"
            width={120}
            height={50}
            className="grayscale object-contain"
          />
          <Image
            src="https://ext.same-assets.com/2610736688/2721135817.jpeg"
            alt="Partner"
            width={120}
            height={50}
            className="grayscale object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
