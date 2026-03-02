import { useSelector } from 'react-redux';
import CreateUser from '../features/users/CreateUser';
import Button from './Button';
import { motion } from 'framer-motion';

function Home() {
  const username = useSelector((state) => state.user.userName);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="my-10 px-4 text-center sm:my-16"
    >
      <h1 className="mb-8 text-xl font-semibold md:text-3xl dark:text-stone-100">
        The best pizza.
        <br />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-yellow-500"
        >
          Straight out of the oven, straight to you.
        </motion.span>
      </h1>
      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {username}
        </Button>
      )}
    </motion.div>
  );
}

export default Home;
