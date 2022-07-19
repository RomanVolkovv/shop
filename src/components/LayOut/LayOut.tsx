import React from 'react';
import { Sidebar } from '../Sidebar';
import styles from './LayOut.module.scss';

interface Props {
  children: React.ReactNode;
}

const LayOut: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div>{children}</div>
    </div>
  );
};

export default LayOut;
