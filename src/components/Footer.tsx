import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-garden-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="lovable-uploads/Jardinejando_branco.png"
                alt="Logo Jardinejando"
                className="h-12 w-auto" // Alterado de h-7 para h-12 para aumentar o tamanho
              />
              <span className="text-2xl font-bold text-white">Jardinejando</span>
            </div>
            <p className="text-garden-300 mb-6 max-w-xs">
              Transformando espaços verdes em ambientes harmoniosos e sustentáveis.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-garden-800 hover:bg-garden-700 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5 text-garden-400" />
              </a>
              <a href="#" className="bg-garden-800 hover:bg-garden-700 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5 text-garden-400" />
              </a>
              <a href="#" className="bg-garden-800 hover:bg-garden-700 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5 text-garden-400" />
              </a>
              <a href="#" className="bg-garden-800 hover:bg-garden-700 p-2 rounded-full transition-colors">
                <Linkedin className="h-5 w-5 text-garden-400" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-garden-300 hover:text-garden-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-garden-300 hover:text-garden-400 transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#projetos" className="text-garden-300 hover:text-garden-400 transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-garden-300 hover:text-garden-400 transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-garden-300 hover:text-garden-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-garden-300 hover:text-garden-400 transition-colors cursor-default">
                  Projeto de Jardins
                </span>
              </li>
              {/* Item "Paisagismo Completo" removido */}
              <li>
                <span className="text-garden-300 hover:text-garden-400 transition-colors cursor-default">
                  Manutenção de Jardins
                </span>
              </li>
              <li>
                <span className="text-garden-300 hover:text-garden-400 transition-colors cursor-default">
                  Consultoria Vegetal
                </span>
              </li>
              {/* Item "Irrigação Automatizada" removido */}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-3">
              <li className="text-garden-300">
                Estrada Iolanda Vieira da Silva, s/n - São Pedro de Alcantâra
              </li>
              <li className="text-garden-300">
                contato@verdelar.com
              </li>
              <li className="text-garden-300">
                (48) 98837-4873
              </li>
              {/* Horário de funcionamento removido */}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-garden-800 mt-12 pt-8 text-center">
          <p className="text-garden-400 text-sm">
            © {new Date().getFullYear()} Jardinejando - Jardinagem e Paisagismo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
