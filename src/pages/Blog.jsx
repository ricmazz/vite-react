import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import SectionWrapper from '../components/ui/SectionWrapper';
import SectionTitle from '../components/ui/SectionTitle';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../data/mockData';
import { formatDate } from '../utils/formatters';

const categoryColors = {
  Treino: 'bg-accent/10 text-accent',
  Nutrição: 'bg-secondary/10 text-secondary',
  'Bem-estar': 'bg-accent-warm/10 text-accent-warm',
  Motivação: 'bg-primary/10 text-primary',
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filtered = activeCategory === 'Todos'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/90 pt-12 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Blog & Dicas
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Conteúdos exclusivos sobre treino, nutrição, bem-estar e motivação
            para ajudar na sua jornada fitness.
          </p>
        </div>
      </section>

      <SectionWrapper>
        {/* Filtros de categoria */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {BLOG_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-surface text-text-muted border border-gray-200 hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de artigos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Imagem placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white/30 text-sm">
                  Imagem do artigo
                </div>
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[post.category] || 'bg-gray-100 text-gray-600'}`}>
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-text-muted mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime} min de leitura
                  </span>
                </div>

                <h2 className="font-heading font-semibold text-lg text-primary mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-secondary font-semibold text-sm hover:gap-2 transition-all"
                >
                  Ler artigo completo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-text-muted">
            <p className="text-lg">Nenhum artigo encontrado nesta categoria.</p>
          </div>
        )}
      </SectionWrapper>
    </>
  );
}
