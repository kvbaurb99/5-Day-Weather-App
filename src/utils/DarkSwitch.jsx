import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function DarkSwitch({isDark, setIsDark}) {

  const handleToggle = () => {
    setIsDark(!isDark);
  };

  const styles = {
    dark: 'dark bg-black text-yellow-500',
    light: 'light bg-white-900 text-black',
  };

  return (
    <button onClick={handleToggle} className={`rounded-full p-2 text-xl ${styles[isDark ? 'dark' : 'light']}`}>
        {isDark ? <FaSun /> : <FaMoon />}
    </button>
  );
}
