import LinkButton from '../../ui/LinkButton';
import { motion } from 'framer-motion';

function EmptyCart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="px-4 py-3"
    >
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-7 font-semibold text-stone-700 dark:text-stone-200">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </motion.div>
  );
}

export default EmptyCart;
