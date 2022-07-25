import { FC } from 'react';
import styled from './TextError.module.scss';

const TextError: FC<any> = ({ children }) => {
  return <div className={styled.error}>{children}</div>;
};

export default TextError;
