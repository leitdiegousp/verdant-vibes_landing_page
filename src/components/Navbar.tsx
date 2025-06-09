
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${(isMobileMenuOpen || isScrolled) ? 'glass-effect shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <img src="/lovable-uploads/a17e1d23-ce76-40ba-85c4-092641b4a1d9.png" alt="Jardinejando Logo" className="h-16 object-fill" />
            
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-sm font-medium hover:text-garden-500 transition-colors">
              Início
            </a>
            <a href="#servicos" className="text-sm font-medium hover:text-garden-500 transition-colors">
              Serviços
            </a>
            <a href="#projetos" className="text-sm font-medium hover:text-garden-500 transition-colors">
              Projetos
            </a>
            <a href="#depoimentos" className="text-sm font-medium hover:text-garden-500 transition-colors">
              Depoimentos
            </a>
            <a href="#contato" className="text-sm font-medium hover:text-garden-500 transition-colors">
              Contato
            </a>
          </nav>

          <a href="#contato">
            <Button className="hidden md:flex bg-garden-500 hover:bg-garden-600 text-white" size="sm">
              Orçamento
            </Button>
          </a>

          {/* Mobile menu button */}
          <button className="md:hidden text-garden-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <nav className="md:hidden py-4 flex flex-col space-y-4 mt-4">
            <a href="#inicio" className="text-sm font-medium hover:text-garden-500 transition-colors">
              Início
            </a>
            <a href="#servicos" className="text-sm font-medium hover:text-garden-500 transition-colors">
              Serviços
            </a>
            <a href="#projetos" className="text-sm font-medium hover:text-garden-500 transition-colors">
              Projetos
            </a>
            <a href="#depoimentos" className="text-sm font-medium hover:text-garden-500 transition-colors">
              Depoimentos
            </a>
            <a href="#contato" className="text-sm font-medium hover:text-garden-500 transition-colors">
              Contato
            </a>
            <a href="#contato">
              <Button className="w-full bg-garden-500 hover:bg-garden-600 text-white" size="sm">
                Orçamento
              </Button>
            </a>
          </nav>}
      </div>
    </header>;
};
export default Navbar;
