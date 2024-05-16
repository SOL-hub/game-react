import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import * as PATH from './utils/path';
import { css } from '@emotion/react';
import styled from 'styled-components';

const containerStyles = css`
  background-color: pink;
`;

const Button = styled.button`
  width: 200px;
  height: 100px;
`;

function App() {
  console.log(process.env);

  return (
    <div>
      <Button>test</Button>
      <Routes>
        <Route path={PATH.HOME} element={<Home />} />
      </Routes>
      <div css={containerStyles}>test</div>
    </div>
  );
}

export default App;
