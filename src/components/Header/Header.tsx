import styled from './Header.module.scss';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsCart } from 'react-icons/bs';
import { Button } from '../Button';

const Header = () => {
  return (
    <header className={styled.header_wrapper}>
      <AiOutlineMenu className={styled.icon} />
      <div className={styled.ps_btn}></div>
      <input placeholder='placeholder' />
      <Button title='Button' />
      <BsCart className={styled.icon} />
    </header>
  );
};

export default Header;
