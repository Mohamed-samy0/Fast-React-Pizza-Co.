import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';

function AppLayout() {
  const navigition = useNavigation();
  const isLoading = navigition.state === 'loading';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-stone-100 transition-colors duration-300 dark:bg-stone-900">
      {isLoading && <Loader />}

      <Header />
      <div className="overflow-auto">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
