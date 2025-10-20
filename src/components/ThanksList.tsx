'use client';

import useInitList from '@/hooks/useInitList';
import ThanksPost from './ThanksPost';

const ThanksList = () => {
  const { data } = useInitList();
  return (
    <div>
      {data &&
        data.length > 0 &&
        data?.map((item) => <ThanksPost key={item.id} data={item} />)}
    </div>
  );
};

export default ThanksList;
