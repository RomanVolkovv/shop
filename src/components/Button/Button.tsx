import React from 'react';
import styled from './Button.module.scss';
import clsx from 'clsx';
interface Props {
  title: string;
}

const Button: React.FC<Props> = ({ title }) => {
  return (
    <button
      className={clsx(
        styled['button_wrapper'],
        styled['btn'],
        styled['btn_header'],
      )}
      type='button'>
      {title}
    </button>
  );
};

export default Button;
