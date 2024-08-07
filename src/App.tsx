import { Route, Navigate, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import * as PATH from './utils/path';
import { css } from '@emotion/react';
import CategoryExplain from './pages/CategoryExplain';
import SalesDetail from 'pages/SalesDetail';
import GameCategory from 'pages/GameCategory';
import Search from 'pages/Search';
import Login from 'pages/Login';

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path={PATH.HOME} element={<Home />} /> */}
        <Route path={PATH.TEST} element={<Test />} />
        <Route path={PATH.CATEGORYEXPLAIN} element={<CategoryExplain />} />
        <Route path={PATH.GAME_CATEGORY} element={<GameCategory />} />
        <Route path={PATH.SALES_INTRO} element={<Search />} />
        <Route path={`${PATH.SALES_DETAIL}/:salesId`} element={<SalesDetail />} />
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path="*" element={<Navigate to={PATH.SEARCH} />} />
      </Routes>
    </div>
  );
}

export default App;
