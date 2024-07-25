import { useState } from 'react';

const useSearch = () => {
  const [searchValue, setSearchValue] = useState('');
  const [recentSearches, setRecentSearches] = useState(JSON.parse(localStorage.searches || '[]'));
  const [relatedSearches, setRelatedSearches] = useState([]);

  const doSearch = () => {
    const newSearch = { id: Date.now(), text: searchValue };
    const newRecentSearches = [newSearch].concat(recentSearches);

    setRecentSearches(newRecentSearches);
    localStorage.searches = JSON.stringify(newRecentSearches);
  };

  const doDeleteRecentSearches = (id: string) => {
    const newRecentSearches = recentSearches.filter((item) => item.id !== id);

    setRecentSearches(newRecentSearches);
    localStorage.searches = JSON.stringify(newRecentSearches);
  };

  return {
    searchValue,
    setSearchValue,
    recentSearches,
    doSearch,
    doDeleteRecentSearches,
    relatedSearches,
  };
};

export default useSearch;
