import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/users/UserName';
import { useEffect, useState } from 'react';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(function () {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    },
    [isDarkMode],
  );
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast react pizza Co.
      </Link>
      <SearchOrder />
      <UserName />
      <button
        onClick={() => setIsDarkMode((isDark) => !isDark)}
        className="text-2xl transition-transform hover:scale-110 focus:outline-none"
        aria-label="Toggle Dark Mode"
      >
        {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
      </button>
    </header>
  );
}

export default Header;
