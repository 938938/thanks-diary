'use client';

import ReactDOM from 'react-dom';
import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: #00000060;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 4px 20px #00000030;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 14px;
  border: none;
  background: none;
  font-size: 1.4rem;
  cursor: pointer;
`;

const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  if (typeof window === 'undefined' || !isOpen) return null;

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={onClose}>×</CloseBtn>
        {children}
      </ModalContainer>
    </Overlay>,
    document.body
  );
};

export default Modal;
