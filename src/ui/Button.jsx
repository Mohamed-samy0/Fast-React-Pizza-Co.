import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block text-sm cursor-pointer rounded-full bg-yellow-400 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed dark:bg-yellow-500 dark:hover:bg-yellow-400 dark:text-stone-900';

  const styles = {
    primary: base + ' md:px-6 md:py-4 px-4 py-3 ',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
    secondary:
      'inline-block text-sm cursor-pointer rounded-full font-semibold tracking-wide text-stone-400 uppercase transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:ring focus:ring-stone-200 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed border-2 border-stone-300 md:px-6 md:py-3.5 px-4 py-2.5 hover:text-stone-800 focus:text-stone-800 dark:border-stone-600 dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-stone-100 dark:focus:bg-stone-800',
  };

  if (to) {
    return (
      <MotionLink
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        to={to}
        className={styles[type]}
      >
        {children}
      </MotionLink>
    );
  }

  if (onClick) {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        disabled={disabled}
        className={styles[type]}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      disabled={disabled}
      className={styles[type]}
    >
      {children}
    </motion.button>
  );
}

export default Button;
