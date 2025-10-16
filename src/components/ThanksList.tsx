'use client';

import useInitList from '@/hooks/useInitList';

const ThanksList = () => {
  const { data } = useInitList();
  return (
    <div>
      {data &&
        data.length > 0 &&
        data?.map((item) => <div key={item.id}>{item.text}</div>)}
    </div>
  );
};

export default ThanksList;
