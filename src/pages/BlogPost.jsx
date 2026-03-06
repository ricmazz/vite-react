import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import SectionWrapper from '../components/ui/SectionWrapper';
import { BLOG_POSTS, SITE } from '../data/mockData';
import { formatDate } from '../utils/formatters';

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <SectionWrapper>
        <div className="text-center py-20">
          <h1 className="font-heading text-3xl font-bold text-primary mb-4">Artigo não encontrado</h1>
          <Link to="/blog" className="text-secondary font-semibold hover:underline">
            Voltar ao blog
          </Link>
        </div>
      </SectionWrapper>
    );
  }

  const related = BLOG_POSTS.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3);

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary/90 pt-12 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Início</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-300">{post.category}</span>
          </nav>

          <span className="inline-block bg-secondary/20 text-secondary text-xs font-bold px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {SITE.name}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime} min de leitura
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-[1fr_320px] gap-12">
        {/* Conteúdo principal */}
        <article className="prose prose-lg max-w-none">
          <div className="bg-surface rounded-2xl border border-gray-100 p-6 md:p-10">
            {post.content.split('\n\n').map((paragraph, i) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={i} className="font-heading text-2xl font-bold text-primary mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.startsWith('### ')) {
                return <h3 key={i} className="font-heading text-xl font-semibold text-primary mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
              }
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n');
                return (
                  <ul key={i} className="space-y-2 my-4">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-text-muted">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0" />
                        {item.replace('- ', '')}
                      </li>
                    ))}
                  </ul>
                );
              }
              return <p key={i} className="text-text-muted leading-relaxed mb-4">{paragraph}</p>;
            })}
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 mt-8 text-secondary font-semibold hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao blog
          </Link>
        </article>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Autor */}
          <div className="bg-surface rounded-2xl border border-gray-100 p-6">
            <h3 className="font-heading font-semibold text-primary mb-4">Sobre o Autor</h3>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center text-white font-bold">
                RM
              </div>
              <div>
                <p className="font-heading font-semibold text-primary">{SITE.name}</p>
                <p className="text-xs text-text-muted">{SITE.title} — {SITE.cref}</p>
              </div>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              Personal Trainer com {SITE.yearsExperience}+ anos de experiência, especialista em
              treinamento personalizado e transformação corporal.
            </p>
          </div>

          {/* Artigos relacionados */}
          {related.length > 0 && (
            <div className="bg-surface rounded-2xl border border-gray-100 p-6">
              <h3 className="font-heading font-semibold text-primary mb-4">Artigos Relacionados</h3>
              <div className="space-y-4">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    to={`/blog/${r.slug}`}
                    className="block group"
                  >
                    <div className="h-24 bg-gradient-to-br from-primary/60 to-secondary/60 rounded-xl mb-2" />
                    <h4 className="font-heading font-semibold text-sm text-primary group-hover:text-secondary transition-colors line-clamp-2">
                      {r.title}
                    </h4>
                    <span className="text-xs text-text-muted">{r.readTime} min</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </>
  );
}
