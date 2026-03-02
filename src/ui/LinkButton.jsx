import { Link, useNavigate } from 'react-router-dom';

function LinkButton({ children, to }) {
  const className =
    'text-sm text-blue-500 hover:text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300';

  const navigate = useNavigate();

  if (to === '-1')
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
}

export default LinkButton;
