import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeAuthModal } from '../../../redux/authSlice';
import styled from './ModalAuth.module.scss';

interface Props {
  children: React.ReactNode;
}

const ModalAuth: FC<Props> = ({ children }) => {
  //@ts-ignore
  const isOpenAuth = useSelector((state) => state.auth.isOpenAuthModal);
  const dispatch = useDispatch();
  if (!isOpenAuth) return null;

  return (
    <>
      <div className={styled.overlay} />
      <div className={styled.modal}>
        {children}
        {/* @ts-ignore */}
        <button onClick={() => dispatch(closeAuthModal())}>x</button>
      </div>
    </>
  );
};

export default ModalAuth;
