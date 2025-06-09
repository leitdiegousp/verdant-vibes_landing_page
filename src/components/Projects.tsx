
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const projectItems = [
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Jardim Residencial",
    description: "Projeto completo de paisagismo para área externa residencial, incluindo área de lazer e jardim vertical."
  },
  {
    image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3",
    title: "Praça Corporativa",
    description: "Revitalização de área verde em espaço corporativo, criando um ambiente de descanso para colaboradores."
  },
  {
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    title: "Jardim Botânico",
    description: "Manutenção e conservação de espécies raras em jardim botânico municipal, com foco em sustentabilidade."
  }
];

const Projects = () => {
  return (
    <section id="projetos" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-block bg-garden-100 text-garden-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Nossos Projetos
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-garden-900 mb-4">
              Transformamos sonhos em jardins reais
            </h2>
            <p className="text-garden-700 text-balance">
              Conheça alguns dos nossos trabalhos realizados e veja como podemos transformar seu espaço.
            </p>
          </div>
          <Button 
            variant="outline" 
            className="border-garden-300 text-garden-700 hover:bg-garden-50"
          >
            Ver todos <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectItems.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl overflow-hidden shadow-sm card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-garden-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-garden-700 text-sm mb-4">
                  {project.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="text-garden-500 hover:text-garden-600 hover:bg-garden-50 p-0 font-medium text-sm"
                >
                  Ver projeto <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
