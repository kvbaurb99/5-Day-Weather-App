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
    <button onClick={handleToggle} className={`rounded-full ${isDark ? 'hover:bg-white' : 'hover:bg-black'} ${isDark ? 'hover:text-black' : 'hover:text-white'} duration-500 p-2 text-xl ${styles[isDark ? 'dark' : 'light']}`}>
        {isDark ? <FaSun /> : <FaMoon />}
    </button>
  );
}
