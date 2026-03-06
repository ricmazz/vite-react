import { motion } from 'framer-motion';
import { ArrowRight, Star, ChevronDown, ChevronLeft, ChevronRight, Award, Users, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import SectionWrapper from '../components/ui/SectionWrapper';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import PlaceholderImage from '../components/ui/PlaceholderImage';
import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation';
import {
  SITE, SERVICES, METHODOLOGY_STEPS, TESTIMONIALS,
  TRANSFORMATIONS, FAQ_ITEMS,
} from '../data/mockData';

/* ───── Hero ───── */
function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/80" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 25% 50%, rgba(27,153,139,0.4) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(230,57,70,0.3) 0%, transparent 50%)',
      }} />

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="inline-block bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            {SITE.cref} — {SITE.yearsExperience}+ anos de experiência
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Transforme Seu Corpo,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent-warm">
              Eleve Sua Vida
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
            Treinos personalizados com acompanhamento profissional para você alcançar seus objetivos
            de forma eficiente, segura e sustentável.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button to="/contato" size="lg">
              Agende Sua Avaliação Gratuita
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button to="/planos" variant="outline-light" size="lg">
              Ver Planos
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="hidden lg:block"
        >
          <div className="relative">
            <div className="w-full h-[500px] bg-gradient-to-br from-secondary/30 to-accent/30 rounded-3xl flex items-center justify-center border border-white/10">
              <div className="text-center text-white/60">
                <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-12 h-12" />
                </div>
                <p className="text-sm font-medium">Foto do Profissional</p>
              </div>
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold text-primary">{SITE.transformations}+</p>
                  <p className="text-xs text-text-muted">Transformações</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-white/40" />
      </motion.div>
    </section>
  );
}

/* ───── Sobre Mim ───── */
function AboutSection() {
  const [ref, isVisible] = useScrollAnimation();
  const students = useCountUp(SITE.studentsCount, 2000, true, isVisible);
  const transforms = useCountUp(SITE.transformations, 2000, true, isVisible);
  const years = useCountUp(SITE.yearsExperience, 1500, true, isVisible);

  return (
    <SectionWrapper id="sobre">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <PlaceholderImage
          height="450px"
          text="Foto do Personal Trainer"
          icon={Award}
          gradientIndex={0}
          className="w-full"
        />
        <div ref={ref}>
          <SectionTitle title="Sobre Mim" subtitle="Conheça o profissional por trás das transformações" align="left" />
          <p className="text-text-muted leading-relaxed mb-6">
            Sou o Rafael Mendes, Personal Trainer com mais de {SITE.yearsExperience} anos de experiência em
            treinamento personalizado. Minha missão é ajudar cada aluno a descobrir seu potencial
            máximo, respeitando seus limites e transformando seus objetivos em conquistas reais.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {SITE.certifications.map((cert) => (
              <span key={cert} className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                {cert}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: years, suffix: '+', label: 'Anos de Experiência', icon: Award },
              { value: students, suffix: '+', label: 'Alunos Atendidos', icon: Users },
              { value: transforms, suffix: '+', label: 'Transformações', icon: TrendingUp },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 bg-bg rounded-xl">
                <stat.icon className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-3xl font-heading font-bold text-primary">{stat.value}{stat.suffix}</p>
                <p className="text-xs text-text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ───── Serviços ───── */
function ServicesSection() {
  return (
    <SectionWrapper className="bg-bg">
      <SectionTitle title="Serviços" subtitle="Soluções completas para cada etapa da sua jornada fitness" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-surface p-6 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
              <service.icon className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-primary mb-2">{service.title}</h3>
            <p className="text-text-muted text-sm leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

/* ───── Metodologia ───── */
function MethodologySection() {
  return (
    <SectionWrapper dark>
      <SectionTitle title="Metodologia" subtitle="Um processo estruturado para resultados consistentes" light />
      <div className="relative">
        {/* Desktop line */}
        <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-white/10" />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {METHODOLOGY_STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-heading font-bold text-xl relative z-10">
                {step.step}
              </div>
              <h4 className="font-heading font-semibold text-white mb-2">{step.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ───── Depoimentos ───── */
function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const visibleCount = 3;
  const maxIndex = TESTIMONIALS.length - visibleCount;

  return (
    <SectionWrapper>
      <SectionTitle title="Depoimentos" subtitle="O que nossos alunos dizem sobre a experiência" />
      <div className="relative">
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: `-${current * (100 / visibleCount)}%` }}
            transition={{ type: 'spring', stiffness: 200, damping: 30 }}
          >
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="min-w-full sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] bg-surface p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < t.rating ? 'text-accent-warm fill-accent-warm' : 'text-gray-200'}`} />
                  ))}
                </div>
                <p className="text-text-muted text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm text-primary">{t.name}</p>
                    <p className="text-xs text-text-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          <button
            onClick={() => setCurrent(Math.max(0, current - 1))}
            disabled={current === 0}
            className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 disabled:opacity-30 transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrent(Math.min(maxIndex, current + 1))}
            disabled={current >= maxIndex}
            className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 disabled:opacity-30 transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ───── Resultados (Antes e Depois) ───── */
function TransformationsSection() {
  return (
    <SectionWrapper className="bg-bg">
      <SectionTitle title="Resultados Reais" subtitle="Transformações que falam por si" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TRANSFORMATIONS.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl"
          >
            <div className="h-72 bg-gradient-to-br from-primary via-primary/90 to-secondary/80 flex items-center justify-center">
              <div className="text-center text-white/40 text-sm">
                <div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8" />
                </div>
                Antes → Depois
              </div>
            </div>
            {/* Overlay info */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
              <span className="inline-block bg-secondary/90 text-white text-xs px-2.5 py-1 rounded-full mb-2 w-fit">
                {t.tag}
              </span>
              <h4 className="font-heading font-bold text-white text-xl mb-1">{t.result}</h4>
              <p className="text-gray-300 text-sm">{t.name} — {t.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

/* ───── FAQ ───── */
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <SectionWrapper>
      <SectionTitle title="Perguntas Frequentes" subtitle="Tire suas dúvidas sobre nossos serviços" />
      <div className="max-w-3xl mx-auto">
        {FAQ_ITEMS.map((item, i) => (
          <div key={i} className="border-b border-gray-100 last:border-0">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full py-5 flex items-center justify-between text-left gap-4 group"
              aria-expanded={openIndex === i}
            >
              <span className="font-heading font-semibold text-primary group-hover:text-secondary transition-colors">
                {item.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-text-muted shrink-0 transition-transform duration-300 ${
                  openIndex === i ? 'rotate-180' : ''
                }`}
              />
            </button>
            <motion.div
              initial={false}
              animate={{
                height: openIndex === i ? 'auto' : 0,
                opacity: openIndex === i ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="pb-5 text-text-muted leading-relaxed">{item.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

/* ───── CTA Final ───── */
function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-warm" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
          Pronto Para Começar Sua Transformação?
        </h2>
        <p className="text-white/80 text-lg mb-8">
          Agende sua avaliação gratuita e dê o primeiro passo rumo ao corpo e à vida que você merece.
        </p>
        <Button to="/contato" variant="outline-light" size="lg">
          Agendar Avaliação Gratuita
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}

/* ───── Home Page ───── */
export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <MethodologySection />
      <TestimonialsSection />
      <TransformationsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
