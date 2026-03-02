import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { cleareCart, getCart } from './cartSlice';
import EmptyCart from './EmptyCart';
import { motion } from 'framer-motion';

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Cart() {
  const cart = useSelector(getCart);
  const username = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="px-4 py-3"
    >
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold dark:text-stone-100">
        Your cart, {username}
      </h2>

      <motion.ul
        variants={listVariants}
        initial="hidden"
        animate="visible"
        className="mt-3 divide-y divide-stone-200 border-b border-stone-200 dark:divide-stone-700 dark:border-stone-700"
      >
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </motion.ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={() => dispatch(cleareCart())}>
          Clear cart
        </Button>
      </div>
    </motion.div>
  );
}

export default Cart;
