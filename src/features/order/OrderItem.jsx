import { formatCurrency } from '../../utils/helpers';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <motion.li variants={itemVariants} className="space-y-1 py-3">
      <div className="flex items-center justify-between gap-4 text-sm dark:text-stone-200">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold dark:text-stone-100">
          {formatCurrency(totalPrice)}
        </p>
      </div>
      <p className="text-sm text-stone-500 capitalize italic dark:text-stone-400">
        {isLoadingIngredients ? 'Loading...' : ingredients.join(', ')}
      </p>
    </motion.li>
  );
}

export default OrderItem;
