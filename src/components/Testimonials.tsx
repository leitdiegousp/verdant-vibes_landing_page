
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Ana Silva",
    role: "Proprietária Residencial",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "A equipe superou minhas expectativas! Meu jardim ficou exatamente como eu imaginava, e a manutenção tem sido impecável. Recomendo sem hesitar.",
    rating: 5
  },
  {
    name: "Carlos Mendes",
    role: "Gerente de Facilities",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "Contratamos para revitalizar a área externa da empresa e o resultado transformou completamente o ambiente. Nossos colaboradores adoraram!",
    rating: 5
  },
  {
    name: "Mariana Costa",
    role: "Arquiteta Paisagista",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    content: "Como profissional da área, reconheço o excelente trabalho técnico e criativo. A atenção aos detalhes e o compromisso com a sustentabilidade fazem toda diferença.",
    rating: 5
  },
  {
    name: "Pedro Oliveira",
    role: "Cliente Residencial",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    content: "Transformaram meu pequeno quintal em um verdadeiro refúgio. A escolha das plantas foi perfeita para o espaço limitado que eu tinha.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="section-padding bg-garden-50 clip-path-wave">
      <div className="container mx-auto px-6 pt-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block bg-garden-100 text-garden-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Depoimentos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-garden-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-garden-700 text-balance">
            A satisfação dos nossos clientes é o que nos motiva a continuar criando jardins extraordinários.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-sm h-full flex flex-col card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-garden-700 text-sm italic mb-6 flex-grow">
                "{testimonial.content}"
              </p>
              <div className="flex items-center mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-garden-900">{testimonial.name}</h4>
                  <p className="text-xs text-garden-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
