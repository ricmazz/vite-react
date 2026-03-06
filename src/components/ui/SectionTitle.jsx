export default function SectionTitle({ title, subtitle, light = false, align = 'center' }) {
  const alignment = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`mb-12 ${alignment}`}>
      <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-primary'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-gray-300' : 'text-text-muted'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 bg-secondary rounded-full ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
}
