
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github,
  Send
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-hemo-400" />
              <span className="text-2xl font-bold">$HEMO</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Revolucionando o cuidado renal através da tecnologia blockchain 
              e governança descentralizada.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-hemo-400">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-hemo-400">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-hemo-400">
                <Github className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-hemo-400">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Whitepaper</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Tokenomics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Roadmap</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Equipe</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-hemo-400">Recursos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Documentação</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Governança</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Auditoria</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Compliance</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-hemo-400">Newsletter</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Receba atualizações sobre o projeto e oportunidades de investimento.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Seu email" 
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button size="sm" className="bg-hemo-600 hover:bg-hemo-700">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-800 mb-8" />

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex items-center space-x-3 text-gray-300">
            <Mail className="w-5 h-5 text-hemo-400" />
            <span>contato@hemotoken.com</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-300">
            <Phone className="w-5 h-5 text-hemo-400" />
            <span>+55 (11) 9999-0000</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-300">
            <MapPin className="w-5 h-5 text-hemo-400" />
            <span>São Paulo, Brasil</span>
          </div>
        </div>

        <Separator className="bg-gray-800 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2024 $HEMO Token. Todos os direitos reservados.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Aviso Legal</a>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-8 p-4 bg-gray-800/50 rounded-lg">
          <p className="text-xs text-gray-400 leading-relaxed">
            <strong>Aviso Legal:</strong> Esta não é uma oferta de valores mobiliários. 
            $HEMO é um token utilitário para governança da rede de clínicas. 
            Consulte sempre um profissional financeiro antes de investir. 
            Investimentos em criptomoedas envolvem riscos significativos.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
