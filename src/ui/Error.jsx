import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function Error() {
  const error = useRouteError();

  return (
    <div className="px-4 py-6">
      <h1 className="mb-4 text-xl font-semibold dark:text-stone-100">
        Something went wrong 😢
      </h1>
      <p className="mb-4 text-stone-500 dark:text-stone-400">
        {error.data || error.message}
      </p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
