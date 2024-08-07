import React from 'react';
import { DefaultLayout } from 'components/atom/Layout';
import SearchBanner from 'domain/Search/SearchBanner';
import SalesList from 'domain/Search/SalesList';
import BottomNavigation from 'components/template/BottomNavigation';
import useSearch from 'hooks/search/useSearch';
import { PageControlNumber } from 'components/template/PageNavigation';

const Search = () => {
  const { searchResults, totalPages, currentPage, setCurrentPage } = useSearch();

  return (
    <DefaultLayout padding="0 0 7.125rem">
      <SearchBanner />
      {searchResults.map((item, idx) => (
        <SalesList key={idx} item={item} />
      ))}
      <PageControlNumber
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <BottomNavigation />
    </DefaultLayout>
  );
};

export default Search;
