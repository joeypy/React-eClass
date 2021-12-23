import React from 'react';
import './search-input.scss';

const SearchInput = () => {
  return (
    <>
      <div className="search">
        <input type="text" className="search__input" placeholder="Search song/artist/album" />
      </div>
    </>
  );
};

export default SearchInput;
