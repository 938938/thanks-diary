'use client';

import useAddLikes from '@/hooks/useAddLikes';
import useDeleteItem from '@/hooks/useDeleteItem';
import useSetId from '@/hooks/useSetId';
import { Item } from '@/model/type';
import { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const COLOR_MAP: Record<string, string> = {
  rose: 'mistyrose',
  pink: 'minipink',
  mint: 'mintcream',
  blue: 'lightblue',
  isabelline: 'isabelline',
  lavender: 'lavenderweb',
  winkle: 'periwinkle',
};

const PostBox = styled.div<{ bgColor: string }>`
  width: 90%;
  margin: 10px auto;
  border-radius: 10px;
  background-color: ${(props) => props.bgColor};
  padding: 10px;
`;
const PostBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

const ThanksPost = ({ data }: { data: Item }) => {
  const id = useSetId();
  const { mutate: deleteMutate } = useDeleteItem();
  const { mutate: likesMutate } = useAddLikes();
  const [isLikes, setIsLikes] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const likesHandler = () => {
    setIsLikes(true);
    likesMutate({ id: data.id, likes: data.likes + 1 });
  };
  const deleteHandler = () => {
    deleteMutate(data.id);
  };

  const bgColor = COLOR_MAP[data.color] ?? 'mistyrose';

  return (
    <PostBox bgColor={bgColor}>
      <p>{data.text}</p>
      <PostBottom>
        <button
          onClick={likesHandler}
          disabled={id === data.writter || isLikes}
        >
          💕
        </button>
        <p>{data.likes || 0}</p>
        {id === data.writter && (
          <button onClick={() => setIsOpen(true)}>삭제</button>
        )}
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <p>정말로 삭제하시겠습니까?</p>
          <button onClick={() => setIsOpen(false)}>취소</button>
          <button onClick={deleteHandler}>삭제</button>
        </Modal>
      </PostBottom>
    </PostBox>
  );
};

export default ThanksPost;
