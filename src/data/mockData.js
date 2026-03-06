import {
  Dumbbell, Monitor, Apple, Activity, Users, HeartPulse,
} from 'lucide-react';

export const SITE = {
  name: 'Rafael Mendes',
  title: 'Personal Trainer',
  cref: 'CREF 012345-G/SP',
  phone: '(11) 99876-5432',
  whatsapp: '5511998765432',
  email: 'contato@rafaelmendes.com.br',
  instagram: '@rafaelmendes.pt',
  address: 'Av. Paulista, 1000 — Sala 305, Bela Vista, São Paulo — SP',
  yearsExperience: 12,
  studentsCount: 1500,
  transformations: 800,
  certifications: ['CREF 012345-G/SP', 'Pós-graduação em Fisiologia do Exercício', 'Certificação NSCA-CPT', 'Especialista em Biomecânica'],
};

export const NAV_LINKS = [
  { label: 'Início', path: '/' },
  { label: 'Planos', path: '/planos' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contato', path: '/contato' },
  { label: 'Minha Área', path: '/minha-area' },
];

export const SERVICES = [
  { icon: Dumbbell, title: 'Treino Presencial', description: 'Acompanhamento individual em estúdio equipado com foco total na sua evolução.' },
  { icon: Monitor, title: 'Consultoria Online', description: 'Treinos personalizados e suporte remoto para você treinar de qualquer lugar.' },
  { icon: Apple, title: 'Planos Alimentares', description: 'Orientação nutricional integrada ao seu treino para resultados acelerados.' },
  { icon: Activity, title: 'Avaliação Física', description: 'Análise completa de composição corporal, postura e capacidade funcional.' },
  { icon: Users, title: 'Treino em Grupo', description: 'Sessões em pequenos grupos com energia coletiva e atenção personalizada.' },
  { icon: HeartPulse, title: 'Pós-operatório', description: 'Reabilitação segura e progressiva com protocolos especializados.' },
];

export const METHODOLOGY_STEPS = [
  { step: 1, title: 'Avaliação', description: 'Análise completa do seu estado físico, objetivos e histórico de saúde.' },
  { step: 2, title: 'Planejamento', description: 'Montagem do programa de treino e nutrição personalizado para você.' },
  { step: 3, title: 'Execução', description: 'Acompanhamento presencial ou online com correção técnica em tempo real.' },
  { step: 4, title: 'Acompanhamento', description: 'Monitoramento contínuo de progresso com ajustes periódicos no plano.' },
  { step: 5, title: 'Resultados', description: 'Conquista de metas com manutenção sustentável e novos objetivos.' },
];

export const TESTIMONIALS = [
  { id: 1, name: 'Mariana Costa', text: 'Em 6 meses perdi 18kg e ganhei uma qualidade de vida que não imaginava. O Rafael é extremamente profissional e atencioso.', rating: 5, role: 'Empresária' },
  { id: 2, name: 'Carlos Eduardo', text: 'Depois de anos tentando sozinho, finalmente consegui o shape que sempre quis. O acompanhamento faz toda a diferença!', rating: 5, role: 'Engenheiro' },
  { id: 3, name: 'Ana Beatriz', text: 'Recuperei minha mobilidade após a cirurgia no joelho. Tratamento cuidadoso e eficiente. Recomendo demais!', rating: 5, role: 'Professora' },
  { id: 4, name: 'Pedro Henrique', text: 'Treino online que funciona de verdade. Mesmo à distância, sinto que tenho um personal do meu lado.', rating: 4, role: 'Designer' },
  { id: 5, name: 'Juliana Alves', text: 'Minha autoestima mudou completamente. O método do Rafael não é só físico, é uma transformação completa.', rating: 5, role: 'Advogada' },
];

export const TRANSFORMATIONS = [
  { id: 1, name: 'Ricardo S.', result: '-22kg em 8 meses', detail: 'De 98kg para 76kg', tag: 'Emagrecimento' },
  { id: 2, name: 'Fernanda L.', result: '+8kg massa magra', detail: 'Definição e força', tag: 'Hipertrofia' },
  { id: 3, name: 'Bruno M.', result: '-15kg em 5 meses', detail: 'Mudança total de hábitos', tag: 'Emagrecimento' },
  { id: 4, name: 'Camila R.', result: 'Recuperação total', detail: 'Pós-cirurgia de joelho', tag: 'Reabilitação' },
  { id: 5, name: 'Thiago P.', result: '-30kg em 12 meses', detail: 'Transformação de vida', tag: 'Emagrecimento' },
  { id: 6, name: 'Patrícia G.', result: '+12kg massa magra', detail: 'Competição de bikini', tag: 'Hipertrofia' },
];

export const FAQ_ITEMS = [
  { question: 'Quanto tempo leva para ver resultados?', answer: 'Os primeiros resultados são perceptíveis entre 4 a 6 semanas, dependendo da frequência de treino e alimentação. Transformações significativas ocorrem a partir de 3 meses de acompanhamento consistente.' },
  { question: 'Preciso ter experiência prévia com musculação?', answer: 'Não! Atendo alunos de todos os níveis, desde iniciantes completos até atletas avançados. O programa é 100% personalizado para o seu nível atual.' },
  { question: 'Como funciona a consultoria online?', answer: 'Você recebe um programa de treino detalhado com vídeos explicativos, planilha de progressão e suporte via WhatsApp. Fazemos check-ins semanais por videochamada para ajustes.' },
  { question: 'O plano alimentar é feito por nutricionista?', answer: 'A orientação nutricional é feita em parceria com nutricionistas esportivos credenciados. Eu forneço diretrizes gerais e o nutricionista monta o plano detalhado.' },
  { question: 'Posso cancelar o plano a qualquer momento?', answer: 'Sim. Trabalhamos com fidelidade mínima de 30 dias. Após esse período, você pode cancelar com aviso prévio de 7 dias, sem multas.' },
  { question: 'Qual a diferença entre os planos Básico, Premium e VIP?', answer: 'O plano Básico inclui treino programado e suporte por mensagem. O Premium adiciona acompanhamento presencial e avaliações mensais. O VIP inclui tudo mais nutricionista, suplementação e acesso prioritário.' },
];

export const PLANS = [
  {
    id: 'basico',
    name: 'Básico',
    price: 197,
    period: '/mês',
    popular: false,
    features: [
      { text: 'Programa de treino personalizado', included: true },
      { text: 'Suporte via WhatsApp', included: true },
      { text: 'Atualização mensal do treino', included: true },
      { text: 'Vídeos explicativos dos exercícios', included: true },
      { text: 'Acompanhamento presencial', included: false },
      { text: 'Avaliação física mensal', included: false },
      { text: 'Plano alimentar', included: false },
      { text: 'Acesso prioritário', included: false },
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 397,
    period: '/mês',
    popular: true,
    features: [
      { text: 'Programa de treino personalizado', included: true },
      { text: 'Suporte via WhatsApp', included: true },
      { text: 'Atualização quinzenal do treino', included: true },
      { text: 'Vídeos explicativos dos exercícios', included: true },
      { text: '2x acompanhamento presencial/semana', included: true },
      { text: 'Avaliação física mensal', included: true },
      { text: 'Plano alimentar', included: false },
      { text: 'Acesso prioritário', included: false },
    ],
  },
  {
    id: 'vip',
    name: 'VIP',
    price: 697,
    period: '/mês',
    popular: false,
    features: [
      { text: 'Programa de treino personalizado', included: true },
      { text: 'Suporte via WhatsApp 24h', included: true },
      { text: 'Atualização semanal do treino', included: true },
      { text: 'Vídeos explicativos dos exercícios', included: true },
      { text: '5x acompanhamento presencial/semana', included: true },
      { text: 'Avaliação física quinzenal', included: true },
      { text: 'Plano alimentar com nutricionista', included: true },
      { text: 'Acesso prioritário e horários flexíveis', included: true },
    ],
  },
];

export const BLOG_CATEGORIES = ['Todos', 'Treino', 'Nutrição', 'Bem-estar', 'Motivação'];

export const BLOG_POSTS = [
  {
    id: 1,
    slug: 'como-montar-treino-hipertrofia',
    title: 'Como Montar um Treino de Hipertrofia Eficiente',
    excerpt: 'Descubra os princípios fundamentais para estruturar um treino que realmente promova o ganho de massa muscular de forma progressiva e segura.',
    category: 'Treino',
    date: '2025-02-15',
    readTime: 8,
    content: `A hipertrofia muscular é um processo que exige planejamento, consistência e sobrecarga progressiva. Neste artigo, vamos abordar os principais pilares para montar um treino eficiente.\n\n## Volume de Treino\n\nO volume total de séries por grupo muscular por semana é um dos fatores mais importantes. Estudos recentes indicam que 10 a 20 séries semanais por grupo muscular são ideais para a maioria das pessoas.\n\n## Seleção de Exercícios\n\nPriorize exercícios compostos como agachamento, supino, levantamento terra e remada. Eles recrutam mais fibras musculares e permitem maior sobrecarga. Complemente com exercícios isolados para pontos fracos.\n\n## Progressão de Carga\n\nAplique o princípio da sobrecarga progressiva: aumente gradualmente o peso, as repetições ou o volume ao longo das semanas. Mantenha um diário de treino para acompanhar sua evolução.\n\n## Descanso e Recuperação\n\nO músculo cresce durante o descanso, não durante o treino. Garanta 48 a 72 horas de recuperação entre sessões do mesmo grupo muscular e durma pelo menos 7 horas por noite.\n\n## Periodização\n\nAlterne fases de maior volume com fases de maior intensidade. A periodização ondulada é uma excelente estratégia para manter os ganhos consistentes e evitar platôs.`,
  },
  {
    id: 2,
    slug: 'alimentacao-pre-treino',
    title: '5 Alimentos Essenciais no Pré-Treino',
    excerpt: 'Saiba o que comer antes de treinar para maximizar sua energia, desempenho e resultados na musculação.',
    category: 'Nutrição',
    date: '2025-02-10',
    readTime: 5,
    content: `A alimentação pré-treino é fundamental para garantir energia e desempenho durante o exercício. Veja os 5 alimentos indispensáveis.\n\n## 1. Banana\n\nRica em carboidratos de rápida absorção e potássio, a banana é o combustível perfeito para treinos intensos. Consuma 30 minutos antes do treino.\n\n## 2. Aveia\n\nFonte de carboidratos complexos que liberam energia gradualmente. Ideal para treinos mais longos.\n\n## 3. Batata-doce\n\nCarboidrato de baixo índice glicêmico que fornece energia sustentada. Consuma 1 a 2 horas antes do treino.\n\n## 4. Ovos\n\nExcelente fonte de proteína e gorduras saudáveis. Podem ser consumidos cozidos ou mexidos como parte de uma refeição pré-treino completa.\n\n## 5. Café\n\nA cafeína melhora o foco, disposição e pode aumentar a força em até 5%. Uma xícara 30 minutos antes do treino pode fazer a diferença.`,
  },
  {
    id: 3,
    slug: 'importancia-sono-resultados',
    title: 'Como o Sono Impacta Seus Resultados na Academia',
    excerpt: 'Entenda por que dormir bem é tão importante quanto treinar e como melhorar a qualidade do seu sono para potencializar seus ganhos.',
    category: 'Bem-estar',
    date: '2025-02-05',
    readTime: 6,
    content: `O sono é frequentemente subestimado quando falamos em resultados fitness, mas ele é absolutamente essencial.\n\n## Hormônios Anabólicos\n\nDurante o sono profundo, o corpo libera a maior parte do GH (hormônio do crescimento) e a testosterona atinge seus picos. Sem sono adequado, esses hormônios ficam comprometidos.\n\n## Recuperação Muscular\n\nÉ durante o sono que ocorre a maior parte da síntese proteica muscular. Privação de sono pode reduzir a recuperação em até 60%.\n\n## Dicas para Melhorar o Sono\n\n- Mantenha um horário regular para dormir e acordar\n- Evite telas azuis 1 hora antes de dormir\n- Mantenha o quarto escuro e em temperatura agradável\n- Evite cafeína após as 14h\n- Pratique técnicas de respiração ou meditação antes de deitar`,
  },
  {
    id: 4,
    slug: 'mentalidade-vencedora-fitness',
    title: 'Mentalidade Vencedora: O Segredo dos que Transformam o Corpo',
    excerpt: 'Descubra como a mentalidade correta pode ser o diferencial entre alcançar ou não seus objetivos de transformação corporal.',
    category: 'Motivação',
    date: '2025-01-28',
    readTime: 7,
    content: `A maioria das transformações corporais falham não por falta de treino ou dieta, mas por falta de mentalidade adequada.\n\n## Defina Metas Claras\n\nObjetivos vagos geram resultados vagos. Em vez de "quero emagrecer", defina "quero perder 10kg em 6 meses treinando 4x por semana".\n\n## Foque no Processo\n\nPare de se pesar todos os dias. Foque em cumprir o treino, seguir a alimentação e dormir bem. Os resultados são consequência.\n\n## Aceite os Dias Ruins\n\nNem todo treino será incrível. Nem toda semana será perfeita. O que importa é a consistência a longo prazo, não a perfeição diária.\n\n## Cerque-se de Apoio\n\nTer um personal trainer, amigos que treinam ou uma comunidade online pode fazer toda a diferença na sua motivação e accountability.`,
  },
  {
    id: 5,
    slug: 'treino-funcional-beneficios',
    title: 'Treino Funcional: Benefícios Além da Estética',
    excerpt: 'Conheça os benefícios do treino funcional para o dia a dia e entenda por que essa modalidade está em alta.',
    category: 'Treino',
    date: '2025-01-20',
    readTime: 6,
    content: `O treino funcional vai muito além da estética. Ele prepara seu corpo para os movimentos do dia a dia com eficiência e segurança.\n\n## O que é Treino Funcional?\n\nÉ uma metodologia que utiliza movimentos naturais do corpo humano — agachar, empurrar, puxar, girar, saltar — para desenvolver força, equilíbrio e mobilidade.\n\n## Benefícios Principais\n\n- Melhora da postura e equilíbrio\n- Prevenção de lesões\n- Aumento da mobilidade articular\n- Melhora da coordenação motora\n- Queima calórica elevada\n- Aplicabilidade no dia a dia`,
  },
  {
    id: 6,
    slug: 'suplementacao-iniciantes',
    title: 'Guia de Suplementação para Iniciantes',
    excerpt: 'Saiba quais suplementos realmente funcionam e quais são dispensáveis para quem está começando a treinar.',
    category: 'Nutrição',
    date: '2025-01-15',
    readTime: 9,
    content: `O mercado de suplementação é enorme e confuso. Vamos separar o que funciona do que é marketing.\n\n## Suplementos Essenciais\n\n### Whey Protein\nPrático e eficiente para atingir suas metas de proteína diária. 1 a 2 doses por dia são suficientes.\n\n### Creatina\nO suplemento mais estudado e comprovado pela ciência. 3 a 5g por dia, todos os dias, sem necessidade de ciclar.\n\n### Vitamina D\nA maioria dos brasileiros tem deficiência. Suplementar pode melhorar força, imunidade e disposição.\n\n## Suplementos Opcionais\n\n### Cafeína\nBoa para pré-treino, mas o café já cumpre essa função.\n\n### Ômega 3\nBenéfico para quem não consome peixes regularmente.\n\n## Evite Gastar Dinheiro Com\n\n- BCAAs (se você já consome proteína suficiente)\n- Glutamina (exceto em casos específicos)\n- Pré-treinos com fórmulas proprietárias`,
  },
];

export const SCHEDULE = [
  { day: 'Segunda a Sexta', hours: '06:00 — 21:00' },
  { day: 'Sábado', hours: '07:00 — 14:00' },
  { day: 'Domingo', hours: 'Fechado' },
];

export const DASHBOARD_DATA = {
  studentName: 'João Silva',
  nextWorkout: 'Treino A — Peito e Tríceps',
  nextWorkoutTime: 'Hoje às 18:00',
  monthlyGoal: 'Perder 2kg de gordura',
  goalProgress: 65,
  weeklyProgress: 4,
  weeklyTarget: 5,
  weightHistory: [
    { month: 'Set', peso: 88.5 },
    { month: 'Out', peso: 86.2 },
    { month: 'Nov', peso: 84.8 },
    { month: 'Dez', peso: 83.1 },
    { month: 'Jan', peso: 81.5 },
    { month: 'Fev', peso: 80.2 },
  ],
  todayWorkout: [
    { exercise: 'Supino Reto', sets: 4, reps: '8-10', weight: '70kg' },
    { exercise: 'Supino Inclinado', sets: 3, reps: '10-12', weight: '50kg' },
    { exercise: 'Crucifixo', sets: 3, reps: '12-15', weight: '16kg' },
    { exercise: 'Tríceps Pulley', sets: 4, reps: '10-12', weight: '30kg' },
    { exercise: 'Tríceps Francês', sets: 3, reps: '12-15', weight: '12kg' },
    { exercise: 'Mergulho', sets: 3, reps: 'Até falha', weight: 'Corporal' },
  ],
  attendanceCalendar: [
    1, 1, 0, 1, 1, 2, 2,
    1, 1, 0, 1, 1, 2, 2,
    1, 0, 1, 1, 0, 2, 2,
    1, 1, 0, 1, 0, 2, 2,
    0, 0, 0, 0, 0, 0, 0,
  ],
};

export const CONTACT_OBJECTIVES = [
  'Emagrecimento',
  'Hipertrofia',
  'Saúde e Qualidade de Vida',
  'Reabilitação',
  'Preparação Esportiva',
  'Outro',
];
