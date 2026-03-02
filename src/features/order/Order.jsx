// Test ID: IIDSAT
import OrderItem from './OrderItem';
import { useFetcher, useLoaderData } from 'react-router-dom';
import { getOrder } from '../../services/apiRestaurant';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import { useEffect } from 'react';
import UpdateOrder from './UpdateOrder';
import { motion } from 'framer-motion';

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

function Order() {
  const order = useLoaderData();
  const fetcher = useFetcher();

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu');
    },
    [fetcher],
  );

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-8 px-4 py-6"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold dark:text-stone-100">
          Order #{id} status
        </h2>

        <div className="space-x-2">
          {priority && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold tracking-wide text-red-50 uppercase">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold tracking-wide text-green-50 uppercase">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 rounded-md bg-stone-200 px-6 py-5 dark:bg-stone-800">
        <p className="font-medium dark:text-stone-200">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className="text-xs text-stone-500 dark:text-stone-400">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <motion.ul
        variants={listVariants}
        initial="hidden"
        animate="visible"
        className="divide-y divide-stone-200 border-t-stone-200 border-b-stone-200 dark:divide-stone-700 dark:border-stone-700"
      >
        {cart.map((item) => (
          <OrderItem
            item={item}
            isLoadingIngredients={fetcher.state === 'loading'}
            key={item.pizzaId}
            ingredients={
              fetcher.data?.find((el) => el.id === item.pizzaId)?.ingredients ??
              []
            }
          />
        ))}
      </motion.ul>

      <div className="space-y-2 rounded-md bg-stone-200 px-6 py-5 dark:bg-stone-800">
        <p className="text-sm font-medium text-stone-600 dark:text-stone-300">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-stone-600 dark:text-stone-300">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold dark:text-stone-100">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      {!priority && <UpdateOrder order={order} />}
    </motion.div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
