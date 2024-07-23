'use client';
import { use, useEffect, useRef, useState } from 'react';

export default function ModeToggle() {
  const [Darkmode, setDark] = useState(false);

  useEffect(() => {
    // Periksa tema yang disimpan di localStorage saat komponen pertama kali dimuat
    if (typeof window !== 'undefined') {
      const defaultTheme = localStorage.getItem('theme');
      if (defaultTheme === 'dark') {
        setDark(true);
      } else {
        setDark(false);
      }
    }
  }, []);

  useEffect(() => {
    // Terapkan tema saat state Darkmode berubah
    if (Darkmode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [Darkmode]);

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
      <button
        className=" items-center text-xl text-dark dark:text-light"
        onClick={() => {
          setDark(!Darkmode);
        }}
      >
        {!Darkmode ? (
          <i className="w-[80%] h-[80%] opacity-100 fa-solid fa-lightbulb scale-100  transition-all dark:scale-0 dark:opacity-0"></i>
        ) : (
          <i className="w-[80%] h-[80%] opacity-0  fa-regular fa-lightbulb scale-0  transition-all  dark:scale-100 dark:opacity-100"></i>
        )}
      </button>
    </>
  );
}
