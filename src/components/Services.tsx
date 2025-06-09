
import { Flower2, LeafyGreen, Shrub } from 'lucide-react';

const serviceItems = [{
  icon: <Flower2 className="h-8 w-8 text-garden-500" />,
  title: "Projeto de Jardins",
  description: "Criamos jardins personalizados que refletem seu estilo e necessidades, com plantas selecionadas para o clima local."
}, {
  icon: <LeafyGreen className="h-8 w-8 text-garden-500" />,
  title: "Manutenção de Jardins",
  description: "Cuidamos da saúde e beleza do seu jardim com serviços regulares de corte de grama, poda, adubação e controle de pragas e muito mais."
}, {
  icon: <Shrub className="h-8 w-8 text-garden-500" />,
  title: "Consultoria Vegetal",
  description: "Orientamos sobre as melhores plantas para cada ambiente, considerando solo, iluminação e manutenção."
}];

const Services = () => {
  return <section id="servicos" className="section-padding bg-garden-50 clip-path-wave">
      <div className="container mx-auto px-6 pt-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block bg-garden-100 text-garden-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-garden-900 mb-4">
            Soluções completas para seu espaço verde
          </h2>
          <p className="text-garden-700 text-balance text-center font-normal px-0 py-0 my-0 mx-0">Oferecemos soluções completas para seu jardim, desde o projeto até a manutenção.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceItems.map((service, index) => <div key={index} className="bg-white rounded-2xl p-6 shadow-sm card-hover" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <div className="bg-garden-100 rounded-xl p-3 inline-block mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-garden-900 mb-3">
                {service.title}
              </h3>
              <p className="text-garden-700 text-sm">
                {service.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};

export default Services;
