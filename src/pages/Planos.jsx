import { motion } from 'framer-motion';
import { Check, X, Shield, ArrowRight, Star } from 'lucide-react';
import SectionWrapper from '../components/ui/SectionWrapper';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { PLANS } from '../data/mockData';
import { formatCurrency } from '../utils/formatters';

function PlanCard({ plan, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      viewport={{ once: true }}
      className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
        plan.popular
          ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-105 z-10'
          : 'bg-surface border border-gray-100 shadow-sm'
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-accent-warm text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
            <Star className="w-3 h-3 fill-white" />
            Mais Popular
          </span>
        </div>
      )}

      <h3 className={`font-heading text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-primary'}`}>
        {plan.name}
      </h3>

      <div className="mb-6">
        <span className={`font-heading text-4xl font-extrabold ${plan.popular ? 'text-secondary' : 'text-primary'}`}>
          {formatCurrency(plan.price)}
        </span>
        <span className={`text-sm ${plan.popular ? 'text-gray-300' : 'text-text-muted'}`}>
          {plan.period}
        </span>
      </div>

      <div className="space-y-3 mb-8">
        {plan.features.map((feature) => (
          <div key={feature.text} className="flex items-start gap-3">
            {feature.included ? (
              <div className="w-5 h-5 bg-secondary/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-secondary" />
              </div>
            ) : (
              <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.popular ? 'bg-white/10' : 'bg-gray-100'}`}>
                <X className={`w-3 h-3 ${plan.popular ? 'text-gray-400' : 'text-gray-300'}`} />
              </div>
            )}
            <span className={`text-sm ${
              feature.included
                ? plan.popular ? 'text-gray-200' : 'text-text'
                : plan.popular ? 'text-gray-500 line-through' : 'text-gray-300 line-through'
            }`}>
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      <Button
        to="/contato"
        variant={plan.popular ? 'primary' : 'secondary'}
        className="w-full"
      >
        Quero Este Plano
        <ArrowRight className="w-4 h-4" />
      </Button>
    </motion.div>
  );
}

function ComparisonTable() {
  const allFeatures = [...new Set(PLANS.flatMap(p => p.features.map(f => f.text)))];

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b-2 border-gray-200">
            <th className="text-left py-4 px-4 font-heading font-semibold text-primary">Recurso</th>
            {PLANS.map(plan => (
              <th key={plan.id} className="text-center py-4 px-4 font-heading font-semibold text-primary">
                {plan.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allFeatures.map((feature) => (
            <tr key={feature} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
              <td className="py-3 px-4 text-text-muted">{feature}</td>
              {PLANS.map(plan => {
                const f = plan.features.find(ff => ff.text === feature);
                return (
                  <td key={plan.id} className="text-center py-3 px-4">
                    {f?.included ? (
                      <Check className="w-5 h-5 text-secondary mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-gray-200 mx-auto" />
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
          <tr className="border-t-2 border-gray-200">
            <td className="py-4 px-4 font-heading font-semibold text-primary">Preço</td>
            {PLANS.map(plan => (
              <td key={plan.id} className="text-center py-4 px-4 font-heading font-bold text-primary text-lg">
                {formatCurrency(plan.price)}<span className="text-xs text-text-muted font-normal">/mês</span>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default function Planos() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/90 pt-12 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Planos e Preços
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Escolha o plano ideal para seus objetivos. Todos incluem treino personalizado
            e acompanhamento profissional.
          </p>
        </div>
      </section>

      {/* Cards de Planos */}
      <section className="-mt-10 px-4 relative z-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 items-start">
          {PLANS.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>
      </section>

      {/* Tabela Comparativa */}
      <SectionWrapper>
        <SectionTitle title="Comparativo de Planos" subtitle="Veja em detalhes o que cada plano oferece" />
        <div className="bg-surface rounded-2xl border border-gray-100 p-4 md:p-6">
          <ComparisonTable />
        </div>
      </SectionWrapper>

      {/* Garantia */}
      <SectionWrapper className="bg-bg">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-secondary" />
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
            Garantia de Satisfação
          </h2>
          <p className="text-text-muted leading-relaxed mb-4">
            Acreditamos tanto na qualidade do nosso trabalho que oferecemos uma garantia
            simples e transparente: se em até 30 dias você não estiver satisfeito com o
            acompanhamento, devolvemos 100% do valor investido. Sem burocracia.
          </p>
          <div className="bg-surface rounded-xl p-6 border border-gray-100 text-left mt-8">
            <h3 className="font-heading font-semibold text-primary mb-3">Política de Cancelamento</h3>
            <ul className="space-y-2 text-text-muted text-sm">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                Fidelidade mínima de 30 dias após a contratação
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                Cancelamento com aviso prévio de 7 dias úteis
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                Sem multa ou taxa de cancelamento após o período de fidelidade
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                Reembolso proporcional em caso de cancelamento antecipado justificado
              </li>
            </ul>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
