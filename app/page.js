'use client';
import Image from 'next/image';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, onValue } from 'firebase/database';
import Boxing from '@/components/ui/boxing';
import AddTugas from '@/components/ui/addTugas';
import { use, useState, useEffect, useCallback } from 'react';

export default function Home() {
  const [cacheMatkul, setCacheMatkul] = useState();
  const [dataTodo, setDataTodo] = useState();
  const firebaseConfig = {
    apiKey: 'AIzaSyACI_GmBYaMyfiATLd_hWepxT-xzA5XqfA',
    authDomain: 'todo-college.firebaseapp.com',
    databaseURL: 'https://todo-college-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'todo-college',
    storageBucket: 'todo-college.appspot.com',
    messagingSenderId: '194920428824',
    appId: '1:194920428824:web:ec434b930399c5fccc1a6d',
    measurementId: 'G-0TLVDWQ2EY',
  };
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const readDB = useCallback(
    (matkul) => {
      const todoRef = ref(db, 'todo/' + matkul);
      onValue(todoRef, (snapshot) => {
        const data = snapshot.val();
        setDataTodo(data);
      });
    },
    [db, setDataTodo]
  );

  useEffect(() => {
    const cachedName = document.cookie.replace(/(?:(?:^|.*;\s*)matkul\s*\=\s*([^;]*).*$)|^.*$/, '$1');
    if (cachedName) {
      setCacheMatkul(cachedName);
      readDB(cacheMatkul);
    }
  }, [cacheMatkul, readDB]);

  return (
    <>
      <div className="h-lvh">
        <h1>Todo College</h1>
      </div>
      <div>{cacheMatkul && dataTodo ? Object.keys(dataTodo).map((key) => <Boxing key={key} matkul={cacheMatkul} tugas={dataTodo[key].tugas} deadline={dataTodo[key].deadline} />) : null}</div>
      <AddTugas />
    </>
  );
}
