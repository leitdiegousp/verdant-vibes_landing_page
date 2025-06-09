
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contato" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-garden-100 text-garden-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Entre em Contato
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-garden-900 mb-4">
              Vamos transformar seu espaço juntos
            </h2>
            <p className="text-garden-700 mb-8 text-balance">
              Entre em contato conosco para uma consulta inicial gratuita. 
              Estamos ansiosos para conhecer seu projeto e ajudar a torná-lo realidade.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-garden-100 p-3 rounded-lg mr-4">
                  <MapPin className="h-5 w-5 text-garden-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-garden-900 mb-1">Endereço</h4>
                  <p className="text-sm text-garden-700">Estrada Iolanda Vieira da Silva, s/n - São Pedro de Alcantâra</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-garden-100 p-3 rounded-lg mr-4">
                  <Phone className="h-5 w-5 text-garden-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-garden-900 mb-1">Telefone</h4>
                  <p className="text-sm text-garden-700">(48) 98837-4873</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-garden-100 p-3 rounded-lg mr-4">
                  <Mail className="h-5 w-5 text-garden-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-garden-900 mb-1">Email</h4>
                  {/* Email já está correto, mantendo contato@verdelar.com */}
                  <p className="text-sm text-garden-700">contato@verdelar.com</p>
                </div>
              </div>
              
              {/* Seção Horário de Atendimento removida */}
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-garden-100">
            <h3 className="text-2xl font-bold text-garden-900 mb-6">
              Envie sua mensagem
            </h3>
            <form
              action="mailto:diegojacobleite@gmail.com"
              method="POST"
              encType="text/plain"
              className="space-y-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-garden-800 mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-garden-200 focus:outline-none focus:ring-2 focus:ring-garden-500"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-garden-800 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-garden-200 focus:outline-none focus:ring-2 focus:ring-garden-500"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-garden-800 mb-1">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-garden-200 focus:outline-none focus:ring-2 focus:ring-garden-500"
                  placeholder="Assunto da mensagem"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-garden-800 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-garden-200 focus:outline-none focus:ring-2 focus:ring-garden-500"
                  placeholder="Descreva seu projeto ou dúvida"
                ></textarea>
              </div>
              
              <Button className="w-full bg-garden-500 hover:bg-garden-600 text-white py-6">
                Enviar Mensagem <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
