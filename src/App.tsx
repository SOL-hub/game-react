import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import * as PATH from './utils/path';
import { css } from '@emotion/react';
import styled from 'styled-components';

function App() {
  console.log(process.env);

  return (
    <div>
      <Routes>
        <Route path={PATH.HOME} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
