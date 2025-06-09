import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"; // Removido useEffect
const Hero = () => {
  // Atualizando para incluir todas as imagens solicitadas
  const gardenImages = [
    "/lovable-uploads/de5d3ebc-54e1-414c-9625-fa22978501cd.png", 
    "/lovable-uploads/4cc5e5df-8d46-46d4-8fa1-2fd5de67417c.png",
    "/lovable-uploads/foto_3.png",
    "/lovable-uploads/foto_4.png",
    "/lovable-uploads/foto_7.png"
  ];
  
  // Removido apiRef e useEffect para usar o plugin Autoplay

  return (
    <section id="inicio" className="w-full relative overflow-hidden py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Transformamos espaços em <span className="text-garden-600">jardins</span> cheios de <span className="text-garden-600">vida</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Cuidamos do seu jardim com dedicação e expertise, para que você possa desfrutar de um espaço verde exuberante durante todo o ano.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contato">
                <Button size="lg" className="bg-garden-600 hover:bg-garden-700 w-full sm:w-auto">
                  Agendar visita
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#servicos">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Ver serviços
                </Button>
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="scribble-mask overflow-hidden p-0 animate-image-glow">
              <Carousel
                className="w-full"
                opts={{
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 2000, // Mantém o delay de 2 segundos
                    stopOnInteraction: true, // Para quando o usuário interagir
                  }),
                ]}
              >
                <CarouselContent>
                  {gardenImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="h-full w-full">
                        <img 
                          src={image} 
                          alt={`Serviços de jardinagem ${index + 1}`} 
                          className="w-full h-full object-cover" 
                          loading={index === 0 ? "eager" : "lazy"} 
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
