'use client';

import { Dispatch, useState } from 'react';
import styled from 'styled-components';

const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const SelectButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 2rem;
`;

const Select = styled.div`
  outline: none;
  border: none;
  text-align: left;
`;

const DropDown = styled.div`
  z-index: 99;
  position: absolute;
  top: 2rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  @keyframes dropdown {
    0% {
      transform: translateY(-5%);
    }
    100% {
      transform: translateY(0);
    }
  }
  animation: dropdown 0.4s ease;
`;

const Option = styled.button`
  height: 2rem;
  border: 0;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;

const Dropdown = ({
  data,
  setSelected,
  selected,
}: {
  data: string[];
  selected: string;
  setSelected: Dispatch<React.SetStateAction<string>>;
}) => {
  const [isDropDown, setIsDropDown] = useState<boolean>(false);

  const onClickOptionHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelected(e.currentTarget.innerText);
    setIsDropDown(false);
  };

  const onClickSelect = () => {
    setIsDropDown(!isDropDown);
  };
  return (
    <Component>
      <SelectButton type='button' onClick={onClickSelect}>
        <Select>{selected || data[0]}</Select>
      </SelectButton>
      {isDropDown && (
        <DropDown>
          {data.map((item) => (
            <Option key={item} onClick={onClickOptionHandler}>
              {item}
            </Option>
          ))}
        </DropDown>
      )}
    </Component>
  );
};

export default Dropdown;
