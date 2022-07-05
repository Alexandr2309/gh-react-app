import React, { useRef, useState } from 'react';
import search from '../img/search.svg';
import { searchGitHub } from '../utils/links';
import { onBlurStyles, onFocusStyles } from '../utils/func';

const Search = ({ list, setList, setIsFirst, isFirst, setIsSearch }) => {
  const [value, setValue] = useState('');
  const ref = useRef(null);

  const generateList = (items) => {
    const newList = new Array();
    items.forEach((item) => {
      const objToList = {
        id: item.id,
        owner: { login: item.owner.login, avatar: item.owner.avatar_url },
        title: item.name,
        watchers: item.watchers,
        url: item.html_url,
        lang: item.language,
        fullName: item.full_name,
        description: item.description,
      };
      newList.push(objToList);
    });
    setList([...newList]);
  };

  async function getRepos() {
    if (!value) {
      alert('Проверьте корректность ввода!');
      return;
    }
    setIsSearch(true);
    ref.current.style.flex = '0 1 auto';

    try {
      const response = await fetch(`${searchGitHub}${value}`);
      const result = await response.json();

      if (result.items.length) generateList(result.items);
      else setList([]);

      if (isFirst) setIsFirst(false);
    } catch (e) {
      alert(e.message);
      throw new Error(e);
    } finally {
      setIsSearch(false);
    }
  }

  return (
    <div className='search__block'>
      <input
        ref={ref}
        type='text'
        placeholder='Введите слово для поиска'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlurStyles}
        onFocus={onFocusStyles}
        className='search__input'
      />
      <button className='search__btn' onClick={getRepos}>
        <img src={search} alt='search-icon' />
      </button>
    </div>
  );
};

export default Search;
