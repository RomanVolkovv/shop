import React from 'react';
import styled from './Button.module.scss';
import clsx from 'clsx';
interface Props {
  title: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ title, type, onClick }) => {
  return (
    <button
      className={clsx(styled['button_wrapper'], styled['btn'], styled['btn_header'])}
      type={type}
      onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
