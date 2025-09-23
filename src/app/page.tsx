'use client';

import InputComponents from '@/components/InputComponents';
import useInitList from '@/hooks/useInitList';

export default function Home() {
  useInitList();
  return (
    <div>
      <InputComponents />
    </div>
  );
}
