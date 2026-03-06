import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function SectionWrapper({ children, className = '', id, dark = false }) {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={fadeInUp}
      className={`py-16 md:py-24 px-4 ${dark ? 'bg-primary text-white' : ''} ${className}`}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </motion.section>
  );
}
