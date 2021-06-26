import { useContext, useState } from 'react';

import { ListsContext } from '../providers/ListsProvider';

import Button from './Button';

import './SearchBar.css';

const SearchBar = () => {
  const [text, setText] = useState('');
  const { searchList, resetSearch } = useContext(ListsContext);

  function handleSearch() {
    if (text !== '')
      searchList(text);
    else
      resetSearch();
  }

  function handleResetSearch() {
    setText('');
    resetSearch();
  }

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <Button
          type="button"
          className="btn--search-bar"
          onClick={handleSearch}
        >
          <span className="material-icons">search</span>
        </Button>
        <input
          className="search-bar-input"
          type="text"
          placeholder="Buscar"
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleSearch()}
        />
        {
          text !== '' &&
          <Button
            type="button"
            className="btn--search-bar"
            onClick={handleResetSearch}
          >
            <span className="material-icons">close</span>
          </Button>
        }
      </div>
    </div>
  );
}

export default SearchBar;
