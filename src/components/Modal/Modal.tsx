import React from 'react';
import styled from './Modal.module.scss';

interface Props {
  open: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ open, children }) => {
  if (!open) return null;

  return (
    <>
      <div className={styled.overlay} />
      <div className={styled.modal}>{children}</div>;
    </>
  );
};

export default Modal;
