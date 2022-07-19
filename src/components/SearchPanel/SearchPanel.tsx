import React, { ChangeEvent, useRef, useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { IoClose } from 'react-icons/io5';
import { Button } from '../Button';
import styled from './SearchPanel.module.scss';

const SearchPanel = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchField, setSearchField] = useState<string>('');

  function focusInput() {
    //typescript condition
    if (null !== inputRef.current) {
      inputRef.current.focus();
    }
  }

  function searchInput(e: ChangeEvent<HTMLInputElement>) {
    setSearchField(e.target.value);
  }

  function clearInputField() {
    setSearchField('');
  }

  return (
    <div className={styled.search}>
      <GoSearch className={styled.icon_find} onClick={focusInput} />
      <input
        ref={inputRef}
        placeholder="I'm looking for..."
        className={styled.input}
        onChange={(e) => searchInput(e)}
        value={searchField}
      />
      <IoClose className={styled.icon_cross} onClick={clearInputField} />
      <Button title='Button' />
    </div>
  );
};

export default SearchPanel;
