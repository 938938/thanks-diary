'use client';

import { useEffect, useState } from 'react';

const useSetId = () => {
  const [id, setId] = useState<string>('');
  useEffect(() => {
    const storedId = localStorage.getItem('userId');

    if (storedId) {
      setId(storedId);
    } else {
      const newId = crypto.randomUUID();
      localStorage.setItem('userId', newId);
      setId(newId);
    }
  }, []);
  return id;
};

export default useSetId;
