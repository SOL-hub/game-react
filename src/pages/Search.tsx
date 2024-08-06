import React from 'react';
import { DefaultLayout } from 'components/common/Layout';
import SearchBanner from 'domain/Search/SearchBanner';
import SalesList from 'domain/Search/SalesList';
import BottomNavigation from 'components/template/BottomNavigation';

const Search = () => {
  return (
    <DefaultLayout>
      <SearchBanner />
      <SalesList />
      <BottomNavigation />
    </DefaultLayout>
  );
};

export default Search;
