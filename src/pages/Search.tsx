import React from 'react';
import { DefaultLayout } from 'components/common/Layout';
import SearchBanner from 'domain/Search/SearchBanner';
import SalesList from 'domain/Search/SalesList';
import BottomNavigation from 'components/template/BottomNavigation';
import useSearch from 'hooks/sales/useSearch';

const Search = () => {
  const { searchResults } = useSearch();

  return (
    <DefaultLayout padding="0 0 7.125rem">
      <SearchBanner />
      {searchResults.map((item, idx) => (
        <SalesList key={idx} item={item} />
      ))}
      <BottomNavigation />
    </DefaultLayout>
  );
};

export default Search;
