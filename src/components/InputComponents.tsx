'use client';

import styled from 'styled-components';
import Dropdown from './Dropdown';
import { useState } from 'react';
import useCreateItem from '@/hooks/useCreateItem';
import useSetId from '@/hooks/useSetId';

const InputBox = styled.div`
  padding: 10px;
`;
const Textarea = styled.textarea`
  width: 100%;
`;
const DropBoxs = styled.div`
  display: flex;
`;
const ConfirmBtn = styled.button``;

const InputComponents = () => {
  const { mutate } = useCreateItem();
  const id = useSetId();
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
      writter: id,
    });
    setText(() => '');
  };
  return (
    <InputBox>
      <DropBoxs>
        <Dropdown
          data={['red', 'blue', 'black', 'green']}
          selected={color}
          setSelected={setColor}
        />
        <Dropdown
          data={['star', 'flower', 'abc', 'def']}
          selected={pin}
          setSelected={setPin}
        />
        <Dropdown
          data={['red', 'blue', 'black', 'green']}
          selected={font}
          setSelected={setFont}
        />
      </DropBoxs>
      <Textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <ConfirmBtn onClick={onClickHandler}>완료!</ConfirmBtn>
    </InputBox>
  );
};

export default InputComponents;
