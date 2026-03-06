import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Instagram, MessageCircle, Clock, CheckCircle } from 'lucide-react';
import SectionWrapper from '../components/ui/SectionWrapper';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { SITE, SCHEDULE, CONTACT_OBJECTIVES } from '../data/mockData';
import { formatPhone } from '../utils/formatters';

const initialForm = { nome: '', email: '', telefone: '', objetivo: '', mensagem: '' };

function validateField(name, value) {
  switch (name) {
    case 'nome':
      return value.length < 3 ? 'Nome deve ter pelo menos 3 caracteres' : '';
    case 'email':
      return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'E-mail inválido' : '';
    case 'telefone':
      return value.replace(/\D/g, '').length < 10 ? 'Telefone inválido' : '';
    case 'objetivo':
      return !value ? 'Selecione um objetivo' : '';
    case 'mensagem':
      return value.length < 10 ? 'Mensagem deve ter pelo menos 10 caracteres' : '';
    default:
      return '';
  }
}

export default function Contato() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const processed = name === 'telefone' ? formatPhone(value) : value;
    setForm((prev) => ({ ...prev, [name]: processed }));

    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, processed) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(form).forEach((key) => {
      const err = validateField(key, form[key]);
      if (err) newErrors[key] = err;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched(Object.fromEntries(Object.keys(form).map((k) => [k, true])));
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <section className="bg-gradient-to-br from-primary to-primary/90 pt-12 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Contato</h1>
          </div>
        </section>
        <SectionWrapper>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-lg mx-auto text-center"
          >
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-secondary" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-primary mb-3">
              Mensagem Enviada com Sucesso!
            </h2>
            <p className="text-text-muted mb-6">
              Obrigado, {form.nome.split(' ')[0]}! Recebemos sua mensagem e entraremos em contato em até 24 horas.
            </p>
            <Button to="/">Voltar ao Início</Button>
          </motion.div>
        </SectionWrapper>
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/90 pt-12 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Entre em Contato
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Estamos prontos para ajudar você a começar sua transformação.
            Preencha o formulário ou entre em contato diretamente.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid lg:grid-cols-[1fr_400px] gap-12">
          {/* Formulário */}
          <div className="bg-surface rounded-2xl border border-gray-100 p-6 md:p-8">
            <SectionTitle title="Envie Sua Mensagem" subtitle="Responderemos em até 24 horas" align="left" />

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Nome */}
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-primary mb-1.5">
                  Nome completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Seu nome completo"
                  className={`w-full px-4 py-3 rounded-xl border bg-bg text-text placeholder:text-text-muted/50 transition-colors focus:ring-2 focus:ring-secondary focus:border-secondary ${
                    errors.nome && touched.nome ? 'border-accent' : 'border-gray-200'
                  }`}
                />
                {errors.nome && touched.nome && (
                  <p className="mt-1 text-xs text-accent">{errors.nome}</p>
                )}
              </div>

              {/* Email + Telefone */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-1.5">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="seu@email.com"
                    className={`w-full px-4 py-3 rounded-xl border bg-bg text-text placeholder:text-text-muted/50 transition-colors focus:ring-2 focus:ring-secondary focus:border-secondary ${
                      errors.email && touched.email ? 'border-accent' : 'border-gray-200'
                    }`}
                  />
                  {errors.email && touched.email && (
                    <p className="mt-1 text-xs text-accent">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-primary mb-1.5">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={form.telefone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="(11) 99999-9999"
                    maxLength={15}
                    className={`w-full px-4 py-3 rounded-xl border bg-bg text-text placeholder:text-text-muted/50 transition-colors focus:ring-2 focus:ring-secondary focus:border-secondary ${
                      errors.telefone && touched.telefone ? 'border-accent' : 'border-gray-200'
                    }`}
                  />
                  {errors.telefone && touched.telefone && (
                    <p className="mt-1 text-xs text-accent">{errors.telefone}</p>
                  )}
                </div>
              </div>

              {/* Objetivo */}
              <div>
                <label htmlFor="objetivo" className="block text-sm font-medium text-primary mb-1.5">
                  Objetivo *
                </label>
                <select
                  id="objetivo"
                  name="objetivo"
                  value={form.objetivo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 rounded-xl border bg-bg text-text transition-colors focus:ring-2 focus:ring-secondary focus:border-secondary ${
                    errors.objetivo && touched.objetivo ? 'border-accent' : 'border-gray-200'
                  } ${!form.objetivo ? 'text-text-muted/50' : ''}`}
                >
                  <option value="">Selecione seu objetivo</option>
                  {CONTACT_OBJECTIVES.map((obj) => (
                    <option key={obj} value={obj}>{obj}</option>
                  ))}
                </select>
                {errors.objetivo && touched.objetivo && (
                  <p className="mt-1 text-xs text-accent">{errors.objetivo}</p>
                )}
              </div>

              {/* Mensagem */}
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-primary mb-1.5">
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={form.mensagem}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Conte-nos um pouco sobre seus objetivos e expectativas..."
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl border bg-bg text-text placeholder:text-text-muted/50 transition-colors focus:ring-2 focus:ring-secondary focus:border-secondary resize-none ${
                    errors.mensagem && touched.mensagem ? 'border-accent' : 'border-gray-200'
                  }`}
                />
                {errors.mensagem && touched.mensagem && (
                  <p className="mt-1 text-xs text-accent">{errors.mensagem}</p>
                )}
              </div>

              <Button type="submit" className="w-full sm:w-auto">
                <Send className="w-4 h-4" />
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Sidebar de contato */}
          <div className="space-y-6">
            {/* Contatos diretos */}
            <div className="bg-surface rounded-2xl border border-gray-100 p-6">
              <h3 className="font-heading font-semibold text-lg text-primary mb-5">Contato Direto</h3>
              <div className="space-y-4">
                {[
                  { icon: Phone, label: SITE.phone, href: `tel:${SITE.phone.replace(/\D/g, '')}` },
                  { icon: MessageCircle, label: 'WhatsApp', href: `https://wa.me/${SITE.whatsapp}`, color: 'text-green-500' },
                  { icon: Mail, label: SITE.email, href: `mailto:${SITE.email}` },
                  { icon: Instagram, label: SITE.instagram, href: `https://instagram.com/${SITE.instagram.replace('@', '')}` },
                ].map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 text-text-muted hover:text-secondary transition-colors group"
                  >
                    <div className="w-10 h-10 bg-bg rounded-xl flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                      <Icon className={`w-5 h-5 ${color || 'text-secondary'}`} />
                    </div>
                    <span className="text-sm">{label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Endereço */}
            <div className="bg-surface rounded-2xl border border-gray-100 p-6">
              <h3 className="font-heading font-semibold text-lg text-primary mb-3">Localização</h3>
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <p className="text-sm text-text-muted">{SITE.address}</p>
              </div>
              {/* Mapa placeholder */}
              <div className="h-40 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl flex items-center justify-center border border-gray-100">
                <div className="text-center text-text-muted/50 text-sm">
                  <MapPin className="w-8 h-8 mx-auto mb-1 text-secondary/30" />
                  Mapa da localização
                </div>
              </div>
            </div>

            {/* Horários */}
            <div className="bg-surface rounded-2xl border border-gray-100 p-6">
              <h3 className="font-heading font-semibold text-lg text-primary mb-4">Horário de Atendimento</h3>
              <div className="space-y-3">
                {SCHEDULE.map((item) => (
                  <div key={item.day} className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-secondary" />
                      <span className="font-medium text-primary">{item.day}</span>
                    </span>
                    <span className={`${item.hours === 'Fechado' ? 'text-accent' : 'text-text-muted'}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
