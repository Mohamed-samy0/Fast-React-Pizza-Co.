import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartQuantity, getTotalCartPrice } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';
import { motion } from 'framer-motion';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  if (!totalCartQuantity) return null;

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm text-stone-200 uppercase sm:px-6 md:text-base"
    >
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </motion.div>
  );
}

export default CartOverview;
