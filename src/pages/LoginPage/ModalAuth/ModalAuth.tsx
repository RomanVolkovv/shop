import { FC } from 'react';
import { Button } from '../../../components/Button';
import { SwitcherButton } from '../../../components/SwitcherButton';
import { useAppDispatch, useAppSelector } from '../../../hook';
import { closeAuthModal } from '../../../redux/authSlice';
import styled from './ModalAuth.module.scss';

interface Props {
  children: React.ReactNode;
}

const ModalAuth: FC<Props> = ({ children }) => {
  const isOpenAuth = useAppSelector((state) => state.auth.isOpenAuthModal);
  const dispatch = useAppDispatch();
  if (!isOpenAuth) return null;

  return (
    <>
      <div className={styled.overlay} />
      <div className={styled.modal}>
        <SwitcherButton />
        {children}
        <Button type='submit' title='Close' onClick={() => dispatch(closeAuthModal())}></Button>
      </div>
    </>
  );
};

export default ModalAuth;
