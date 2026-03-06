import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import {
  Dumbbell, Target, TrendingDown, CalendarDays, LogOut,
  Check, X as XIcon, Minus, Sun, User, Lock, Eye, EyeOff,
} from 'lucide-react';
import SectionWrapper from '../components/ui/SectionWrapper';
import Button from '../components/ui/Button';
import { DASHBOARD_DATA, SITE } from '../data/mockData';

/* ───── Login ───── */
function LoginForm({ onLogin }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary/90 pt-12 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Minha Área
          </h1>
          <p className="text-gray-300 text-lg">
            Acesse seu painel de acompanhamento exclusivo
          </p>
        </div>
      </section>

      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto bg-surface rounded-2xl border border-gray-100 p-8 shadow-sm"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-primary">Entrar</h2>
            <p className="text-text-muted text-sm mt-1">Acesse com seus dados de aluno</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="login-email" className="block text-sm font-medium text-primary mb-1.5">
                E-mail
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted/40" />
                <input
                  type="email"
                  id="login-email"
                  defaultValue="joao@email.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-bg text-text focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="login-password" className="block text-sm font-medium text-primary mb-1.5">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted/40" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="login-password"
                  defaultValue="123456"
                  className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-200 bg-bg text-text focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted/40 hover:text-text-muted transition-colors"
                  aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-text-muted cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300" />
                Lembrar de mim
              </label>
              <button type="button" className="text-secondary hover:underline">
                Esqueci minha senha
              </button>
            </div>

            <Button type="submit" className="w-full">
              Entrar
            </Button>
          </form>

          <p className="text-center text-xs text-text-muted mt-6">
            Área exclusiva para alunos. <br />
            <span className="text-secondary">Clique em "Entrar" para ver o dashboard de demonstração.</span>
          </p>
        </motion.div>
      </SectionWrapper>
    </>
  );
}

/* ───── Dashboard ───── */
function Dashboard({ onLogout }) {
  const d = DASHBOARD_DATA;
  const weekDays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary/90 pt-8 pb-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-secondary text-sm mb-1">
              <Sun className="w-4 h-4" />
              Bom dia!
            </div>
            <h1 className="font-heading text-2xl md:text-3xl font-bold text-white">
              Olá, {d.studentName.split(' ')[0]}! 💪
            </h1>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
          >
            <LogOut className="w-4 h-4" />
            Sair
          </button>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-6 pb-16">
        {/* Cards de resumo */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Dumbbell, label: 'Próximo Treino', value: d.nextWorkout, sub: d.nextWorkoutTime, color: 'bg-secondary/10 text-secondary' },
            { icon: Target, label: 'Meta do Mês', value: d.monthlyGoal, sub: `${d.goalProgress}% concluído`, color: 'bg-accent-warm/10 text-accent-warm' },
            { icon: TrendingDown, label: 'Peso Atual', value: `${d.weightHistory[d.weightHistory.length - 1].peso}kg`, sub: `${(d.weightHistory[0].peso - d.weightHistory[d.weightHistory.length - 1].peso).toFixed(1)}kg perdidos`, color: 'bg-accent/10 text-accent' },
            { icon: CalendarDays, label: 'Treinos na Semana', value: `${d.weeklyProgress}/${d.weeklyTarget}`, sub: 'sessões completadas', color: 'bg-primary/10 text-primary' },
          ].map((card) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-surface rounded-2xl border border-gray-100 p-5 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${card.color}`}>
                  <card.icon className="w-5 h-5" />
                </div>
                <span className="text-xs text-text-muted font-medium">{card.label}</span>
              </div>
              <p className="font-heading font-bold text-primary text-lg truncate">{card.value}</p>
              <p className="text-xs text-text-muted mt-1">{card.sub}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-8">
          <div className="space-y-8">
            {/* Gráfico de evolução */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-surface rounded-2xl border border-gray-100 p-6 shadow-sm"
            >
              <h3 className="font-heading font-semibold text-lg text-primary mb-6">
                Evolução de Peso (últimos 6 meses)
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={d.weightHistory}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#6B7280' }} />
                    <YAxis
                      domain={['dataMin - 2', 'dataMax + 2']}
                      tick={{ fontSize: 12, fill: '#6B7280' }}
                      tickFormatter={(v) => `${v}kg`}
                    />
                    <Tooltip
                      formatter={(value) => [`${value}kg`, 'Peso']}
                      contentStyle={{
                        borderRadius: '12px',
                        border: '1px solid #e5e7eb',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="peso"
                      stroke="#1B998B"
                      strokeWidth={3}
                      dot={{ fill: '#1B998B', r: 5, strokeWidth: 2, stroke: '#fff' }}
                      activeDot={{ r: 7 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Treino do dia */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-surface rounded-2xl border border-gray-100 p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-heading font-semibold text-lg text-primary">
                  Treino do Dia
                </h3>
                <span className="bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full">
                  {d.nextWorkout.split('—')[0].trim()}
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left py-3 text-text-muted font-medium">Exercício</th>
                      <th className="text-center py-3 text-text-muted font-medium">Séries</th>
                      <th className="text-center py-3 text-text-muted font-medium">Repetições</th>
                      <th className="text-center py-3 text-text-muted font-medium">Carga</th>
                    </tr>
                  </thead>
                  <tbody>
                    {d.todayWorkout.map((ex, i) => (
                      <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                        <td className="py-3 font-medium text-primary flex items-center gap-2">
                          <span className="w-6 h-6 bg-secondary/10 rounded-lg flex items-center justify-center text-xs text-secondary font-bold">
                            {i + 1}
                          </span>
                          {ex.exercise}
                        </td>
                        <td className="text-center py-3 text-text-muted">{ex.sets}</td>
                        <td className="text-center py-3 text-text-muted">{ex.reps}</td>
                        <td className="text-center py-3">
                          <span className="bg-primary/5 text-primary text-xs font-semibold px-2 py-1 rounded-lg">
                            {ex.weight}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>

          {/* Sidebar — calendário e progresso */}
          <div className="space-y-8">
            {/* Progresso da meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="bg-surface rounded-2xl border border-gray-100 p-6 shadow-sm"
            >
              <h3 className="font-heading font-semibold text-lg text-primary mb-4">Meta do Mês</h3>
              <p className="text-sm text-text-muted mb-3">{d.monthlyGoal}</p>
              <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${d.goalProgress}%` }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-secondary to-accent-warm rounded-full"
                />
              </div>
              <p className="text-right text-xs text-text-muted mt-2">{d.goalProgress}%</p>
            </motion.div>

            {/* Calendário de presença */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="bg-surface rounded-2xl border border-gray-100 p-6 shadow-sm"
            >
              <h3 className="font-heading font-semibold text-lg text-primary mb-4">
                Presença — Fevereiro
              </h3>
              <div className="grid grid-cols-7 gap-2">
                {/* Header dias da semana */}
                {weekDays.map((day) => (
                  <div key={day} className="text-center text-xs text-text-muted font-medium py-1">
                    {day}
                  </div>
                ))}
                {/* Calendar cells: 1 = presente, 0 = ausente, 2 = descanso */}
                {d.attendanceCalendar.map((status, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-lg flex items-center justify-center ${
                      status === 1
                        ? 'bg-secondary/10'
                        : status === 2
                        ? 'bg-gray-50'
                        : 'bg-accent/5'
                    }`}
                  >
                    {status === 1 && <Check className="w-4 h-4 text-secondary" />}
                    {status === 0 && <XIcon className="w-3 h-3 text-accent/40" />}
                    {status === 2 && <Minus className="w-3 h-3 text-gray-300" />}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-4 text-xs text-text-muted">
                <span className="flex items-center gap-1"><span className="w-3 h-3 bg-secondary/20 rounded" /> Presente</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 bg-accent/10 rounded" /> Ausente</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 bg-gray-100 rounded" /> Descanso</span>
              </div>
            </motion.div>

            {/* Treinos semanais */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-surface rounded-2xl border border-gray-100 p-6 shadow-sm"
            >
              <h3 className="font-heading font-semibold text-lg text-primary mb-4">
                Treinos na Semana
              </h3>
              <div className="flex items-center gap-2">
                {Array.from({ length: d.weeklyTarget }).map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1 h-3 rounded-full ${
                      i < d.weeklyProgress ? 'bg-secondary' : 'bg-gray-100'
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-text-muted mt-2">
                {d.weeklyProgress} de {d.weeklyTarget} treinos completados
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ───── Minha Área (wrapper) ───── */
export default function MinhaArea() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (loggedIn) {
    return <Dashboard onLogout={() => setLoggedIn(false)} />;
  }

  return <LoginForm onLogin={() => setLoggedIn(true)} />;
}
