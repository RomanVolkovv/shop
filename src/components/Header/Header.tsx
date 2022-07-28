import { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';
import { FaDropbox } from 'react-icons/fa';
import { BsCart } from 'react-icons/bs';
import { FaRegUserCircle } from 'react-icons/fa';
import { Modal } from '../Modal';
import { SearchPanel } from '../SearchPanel';
import { ModalAuth } from '../../pages/LoginPage/ModalAuth';
import styled from './Header.module.scss';
import clsx from 'clsx';
import logo from '../../assets/react.svg';
import { toggleSidebar } from '../../redux/sidebarSlice';
import { openAuthModal } from '../../redux/authSlice';
import { LoginPage } from '../../pages/LoginPage';
import { useAppDispatch } from '../../hook';
import AuthWrapper from '../../pages/LoginPage/AuthWrapper';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>('en');
  const dispatch = useAppDispatch();

  useEffect(() => {
    isOpen
      ? window.addEventListener('keydown', closeModalOnPressEscape)
      : window.removeEventListener('keydown', closeModalOnPressEscape);
    return () => window.removeEventListener('keydown', closeModalOnPressEscape);
  }, [isOpen, setIsOpen]);

  function closeModalOnPressEscape() {
    if ((window.event as KeyboardEvent).key === 'Escape') {
      setIsOpen(false);
    }
  }

  function toggleBtnCatalog() {
    setIsOpen((prevState) => !prevState);
  }

  function toggleLanguage() {
    language === 'en' ? setLanguage('ua') : setLanguage('en');
  }

  return (
    <header className={styled.header_wrapper}>
      <AiOutlineMenu
        className={clsx(styled['icon'], styled['menu'])}
        onClick={() => dispatch(toggleSidebar())}
      />

      <div className={styled.emblem}>
        <img src={logo} alt='logo' />
        <div>Sample</div>
      </div>

      <Modal open={isOpen}>{/* some data for modal */}</Modal>

      <div className={styled.catalog_btn_wrapper}>
        <div className={styled.catalog_btn} onClick={toggleBtnCatalog}>
          {isOpen && <IoClose className={styled.icon_btn} />}
          {!isOpen && <FaDropbox className={styled.icon_btn} />}
          <p className={styled.psBtn_text}>Catalog</p>
        </div>

        <SearchPanel />
      </div>

      <div className={styled.language} onClick={toggleLanguage}>
        <div className={clsx(styled.language_text, language === 'ua' && styled.active)}>UA</div>
        <div className={clsx(styled.language_text, language === 'en' && styled.active)}>EN</div>
      </div>

      <BsCart className={clsx(styled['icon'], styled['card'])} />

      <FaRegUserCircle className={styled.icon} onClick={() => dispatch(openAuthModal())} />
      <ModalAuth>
        <AuthWrapper />
      </ModalAuth>
    </header>
  );
};

export default Header;
