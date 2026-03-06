import { Link } from 'react-router-dom';

const variants = {
  primary: 'bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/25',
  secondary: 'bg-secondary hover:bg-secondary/90 text-white shadow-lg shadow-secondary/25',
  outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  'outline-light': 'border-2 border-white text-white hover:bg-white hover:text-primary',
  ghost: 'text-primary hover:bg-primary/5',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-xl
    transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]
    ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return <Link to={to} className={classes} {...props}>{children}</Link>;
  }

  if (href) {
    return <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
  }

  return <button className={classes} {...props}>{children}</button>;
}
