import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import * as PATH from './utils/path';
import { css } from '@emotion/react';
import styled from 'styled-components';
import CategoryExplain from './pages/CategoryExplain';
import SalesDetail from 'pages/SalesDetail';
import GameCategory from 'pages/GameCategory';
import SearchIntro from 'pages/SearchIntro';

function App() {
  return (
    <div>
      <Routes>
        <Route path={PATH.HOME} element={<Home />} />
        <Route path={PATH.TEST} element={<Test />} />
        <Route path={PATH.CATEGORYEXPLAIN} element={<CategoryExplain />} />
        <Route path={PATH.SALES_INTRO} element={<SearchIntro />} />
        <Route path={`${PATH.SALES_DETAIL}/:salesId`} element={<SalesDetail />} />
      </Routes>
    </div>
  );
}

export default App;
