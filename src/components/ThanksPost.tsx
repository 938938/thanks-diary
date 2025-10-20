'use client';

import useSetId from '@/hooks/useSetId';
import { Item } from '@/model/type';

const ThanksPost = ({ data }: { data: Item }) => {
  const id = useSetId();
  return (
    <div>
      <p>{data.text}</p>
      <p>{data.likes}</p>
      {id === data.writter && <button>삭제</button>}
    </div>
  );
};

export default ThanksPost;
