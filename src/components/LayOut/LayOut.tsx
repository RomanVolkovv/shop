import React from 'react';
import { useAppSelector } from '../../hook';
import { Sidebar } from '../Sidebar';
import styled from './LayOut.module.scss';

interface Props {
  children: React.ReactNode;
}

const LayOut: React.FC<Props> = ({ children }) => {
  const isOpenSidebar = useAppSelector((state) => state.sidebar.isOpenSidebar);

  return (
    <div className={styled.layout}>
      {isOpenSidebar && <Sidebar />}
      <div className={styled.children}>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default LayOut;
