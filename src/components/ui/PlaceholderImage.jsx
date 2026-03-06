const gradients = [
  'from-primary to-secondary',
  'from-secondary to-accent-warm',
  'from-accent to-accent-warm',
  'from-primary to-accent',
  'from-secondary to-primary',
  'from-accent-warm to-secondary',
];

export default function PlaceholderImage({
  width = '100%',
  height = '300px',
  text = '',
  icon: Icon,
  gradientIndex = 0,
  className = '',
  rounded = 'rounded-xl',
}) {
  const gradient = gradients[gradientIndex % gradients.length];

  return (
    <div
      className={`bg-gradient-to-br ${gradient} flex items-center justify-center ${rounded} overflow-hidden ${className}`}
      style={{ width, height }}
      role="img"
      aria-label={text || 'Imagem ilustrativa'}
    >
      <div className="text-center text-white/80 p-4">
        {Icon && <Icon className="w-12 h-12 mx-auto mb-2" strokeWidth={1.5} />}
        {text && <span className="text-sm font-medium">{text}</span>}
      </div>
    </div>
  );
}
