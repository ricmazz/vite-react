import { Link } from 'react-router-dom';
import { Dumbbell, Phone, Mail, MapPin, Instagram, Clock } from 'lucide-react';
import { SITE, NAV_LINKS, SCHEDULE } from '../data/mockData';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Coluna 1 — Logo e Bio */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-heading font-bold text-lg block">{SITE.name}</span>
                <span className="text-xs text-secondary">{SITE.title}</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transformando vidas através do exercício físico há mais de {SITE.yearsExperience} anos.
              Treinos personalizados com foco em resultados reais.
            </p>
            <p className="text-xs text-gray-500 mt-3">{SITE.cref}</p>
          </div>

          {/* Coluna 2 — Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Navegação</h4>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-400 hover:text-secondary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Coluna 3 — Contato */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contato</h4>
            <div className="flex flex-col gap-3">
              <a href={`tel:${SITE.phone.replace(/\D/g, '')}`} className="flex items-center gap-3 text-gray-400 hover:text-secondary transition-colors text-sm">
                <Phone className="w-4 h-4 shrink-0" />
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-gray-400 hover:text-secondary transition-colors text-sm">
                <Mail className="w-4 h-4 shrink-0" />
                {SITE.email}
              </a>
              <a href={`https://instagram.com/${SITE.instagram.replace('@', '')}`} className="flex items-center gap-3 text-gray-400 hover:text-secondary transition-colors text-sm" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-4 h-4 shrink-0" />
                {SITE.instagram}
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                {SITE.address}
              </div>
            </div>
          </div>

          {/* Coluna 4 — Horários */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Horário de Atendimento</h4>
            <div className="flex flex-col gap-2">
              {SCHEDULE.map((item) => (
                <div key={item.day} className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-secondary shrink-0" />
                  <span className="text-gray-400">
                    <span className="text-gray-300 font-medium">{item.day}:</span>{' '}
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>

            {/* Mapa placeholder */}
            <div className="mt-6 h-28 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
              <div className="text-center text-gray-500 text-xs">
                <MapPin className="w-6 h-6 mx-auto mb-1 text-secondary/50" />
                Mapa da localização
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {SITE.name} — {SITE.title}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-500 hover:text-secondary text-xs transition-colors">Política de Privacidade</a>
            <a href="#" className="text-gray-500 hover:text-secondary text-xs transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
