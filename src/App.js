import './styles/App.scss';
import React, {useEffect, useState} from 'react';
import Search from './components/Search';
import List from './components/List';

function App() {
  const [list, setList] = useState([]);
  const [isFirst, setIsFirst] = useState(true);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    const input = document.querySelector('.search__block input');
    document.body.addEventListener('click', (e) => {
      if (!/search/gi.test(e.target.className)) input.style.flex = '0 1 auto';
    });
  }, []);

  return (
    <div className='App'>
      <Search
        list={list}
        setList={setList}
        setIsFirst={setIsFirst}
        setIsSearch={setIsSearch}
        isFirst={isFirst}
      />
      <List list={list} isFirst={isFirst} isSearch={isSearch} />
    </div>
  );
}

export default App;
