import { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from './ModalAuth.module.scss';

interface Props {
  children: React.ReactNode;
}

const ModalAuth: FC<Props> = ({ children }) => {
  //@ts-ignore
  const isOpenAuth = useSelector((state) => state.auth.isOpenAuthModal);

  if (!isOpenAuth) return null;

  return (
    <>
      <div className={styled.overlay} />
      <div className={styled.modal}>{children}</div>
    </>
  );
};

export default ModalAuth;
