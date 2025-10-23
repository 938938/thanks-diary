'use client';

import useAddLikes from '@/hooks/useAddLikes';
import useDeleteItem from '@/hooks/useDeleteItem';
import useSetId from '@/hooks/useSetId';
import { Item } from '@/model/type';
import { useState } from 'react';

const ThanksPost = ({ data }: { data: Item }) => {
  const id = useSetId();
  const { mutate: deleteMutate } = useDeleteItem();
  const { mutate: likesMutate } = useAddLikes();
  const [isLikes, setIsLikes] = useState<boolean>(false);
  const likesHandler = () => {
    setIsLikes(() => true);
    likesMutate({ id: data.id, likes: data.likes+=1 });
  };
  const deleteHandler = () => {
    deleteMutate(data.id);
  };
  return (
    <div>
      <p>{data.text}</p>
      <div>
        <button
          onClick={likesHandler}
          disabled={id === data.writter || isLikes}
        >
          💕
        </button>
        <p>{data.likes || 0}</p>
      </div>
      {id === data.writter && <button onClick={deleteHandler}>삭제</button>}
    </div>
  );
};

export default ThanksPost;
