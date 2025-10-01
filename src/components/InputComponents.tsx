'use client';

import styled from 'styled-components';
import Dropdown from './Dropdown';
import { useState } from 'react';
import useCreateItem from '@/hooks/useCreateItem';

const InputBox = styled.div`
  padding: 10px;
`;
const Textarea = styled.textarea`
  width: 100%;
`;
const ConfirmBtn = styled.button``;

const InputComponents = () => {
  const { mutate } = useCreateItem();
  const [text, setText] = useState<string>('');
  const [color, setColor] = useState<string>('');
  const [pin, setPin] = useState<string>('');
  const [font, setFont] = useState<string>('');
  const onClickHandler = () => {
    mutate({
      text,
      color,
      pin,
      font,
    });
  };
  return (
    <InputBox>
      <Dropdown data={['red', 'blue', 'black', 'green']} selected={color} setSelected={setColor} />
      <Textarea
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <ConfirmBtn onClick={onClickHandler}>완료!</ConfirmBtn>
    </InputBox>
  );
};

export default InputComponents;
