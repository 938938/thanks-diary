'use client';

import useDeleteItem from '@/hooks/useDeleteItem';
import useSetId from '@/hooks/useSetId';
import { Item } from '@/model/type';

const ThanksPost = ({ data }: { data: Item }) => {
  const id = useSetId();
  const { mutate } = useDeleteItem();
  const deleteHandler = () => {
    mutate(data.id);
  };
  return (
    <div>
      <p>{data.text}</p>
      <p>{data.likes}</p>
      {id === data.writter && <button onClick={deleteHandler}>삭제</button>}
    </div>
  );
};

export default ThanksPost;
