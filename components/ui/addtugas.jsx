'use client';
import { useEffect, useState } from 'react';

export default function AddTugas() {
  const [name, setName] = useState('');
  useEffect(() => {
    const cachedName = document.cookie.replace(/(?:(?:^|.*;\s*)matkul\s*\=\s*([^;]*).*$)|^.*$/, '$1');
    if (cachedName) {
      setName(cachedName);
    }
  }, []);
  const handleNameChange = () => {
    document.cookie = `matkul=${name}`;
    window.location.reload();
  };
  return (
    <div>
      <input
        id="MyName"
        type="text"
        placeholder="Masukan Nama"
        className="p-4 w-[38%] max-lg:w-full rounded-xl transition-all duration-150 text-dark dark:text-light bg-light border-slate-700 border-2 dark:bg-dark"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={handleNameChange} className="p-4 w-[24%] max-lg:w-full rounded-xl text-dark dark:text-light transition-all duration-200 bg-light border-slate-700 border-2 dark:bg-dark hover:bg-slate-300 active:translate-y-1">
        Submit
      </button>
    </div>
  );
}
