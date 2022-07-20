import React from 'react';
import { useSelector } from 'react-redux';
import { Sidebar } from '../Sidebar';
import styles from './LayOut.module.scss';

interface Props {
  children: React.ReactNode;
}

const LayOut: React.FC<Props> = ({ children }) => {
  //@ts-ignore
  const isOpenSidebar = useSelector((state) => state.sidebar.isOpenSidebar);

  return (
    <div className={styles.layout}>
      {isOpenSidebar && <Sidebar />}
      <div>{children}</div>
    </div>
  );
};

export default LayOut;
