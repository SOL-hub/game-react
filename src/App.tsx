import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import * as PATH from './utils/path';
import styled from 'styled-components';

const Button = styled.button`
  width: 200px;
  height: 100px;
`;

function App() {
  return (
    <div>
      <Button>test</Button>
      <Routes>
        <Route path={PATH.HOME} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
