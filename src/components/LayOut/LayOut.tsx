import React from 'react';
import { useSelector } from 'react-redux';
import { Sidebar } from '../Sidebar';
import styled from './LayOut.module.scss';

interface Props {
  children: React.ReactNode;
}

const LayOut: React.FC<Props> = ({ children }) => {
  //@ts-ignore
  const isOpenSidebar = useSelector((state) => state.sidebar.isOpenSidebar);

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
