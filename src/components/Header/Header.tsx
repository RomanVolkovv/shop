import { ChangeEvent, useRef, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';
import { GoSearch } from 'react-icons/go';
import { FaDropbox } from 'react-icons/fa';
import { BsCart } from 'react-icons/bs';
import { Button } from '../Button';
import styled from './Header.module.scss';
import clsx from 'clsx';
//@ts-ignore
import logo from '../../assets/react.svg';

const Header = () => {
  const [togglePsBtn, setTogglePsBtn] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>('en');
  const [searchField, setSearchField] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  function toggleBtn() {
    setTogglePsBtn((prevState) => !prevState);
  }

  function toggleLanguage() {
    language === 'en' ? setLanguage('ua') : setLanguage('en');
  }

  function search(e: ChangeEvent<HTMLInputElement>) {
    setSearchField(e.target.value);
  }

  function focus() {
    //typescript condition
    if (null !== inputRef.current) {
      inputRef.current.focus();
    }
  }

  function clearInputField() {
    setSearchField('');
  }

  return (
    <header className={styled.header_wrapper}>
      <AiOutlineMenu className={clsx(styled['icon'], styled['menu'])} />

      <div className={styled.emblem}>
        <img src={logo} alt='logo' />
        <div>Sample</div>
      </div>

      <div className={styled.search_catalog}>
        <div className={styled.ps_btn} onClick={() => toggleBtn()}>
          {togglePsBtn && <IoClose className={styled.icon_btn} />}
          {!togglePsBtn && <FaDropbox className={styled.icon_btn} />}
          <p className={styled.psBtn_text}>Catalog</p>
        </div>

        <div className={styled.search}>
          <GoSearch className={styled.icon_find} onClick={focus} />
          <input
            ref={inputRef}
            placeholder="I'm looking for..."
            className={styled.input}
            onChange={(e) => search(e)}
            value={searchField}
          />
          <IoClose className={styled.cross} onClick={clearInputField} />
          <Button title='Button' />
        </div>
      </div>

      <div className={styled.language} onClick={toggleLanguage}>
        <div className={styled.language_text}>UA</div>
        <div className={styled.language_text}>EN</div>
      </div>

      <BsCart className={clsx(styled['icon'], styled['card'])} />
    </header>
  );
};

export default Header;
