import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import * as PATH from './utils/path';
import CategoryExplain from './pages/CategoryExplain';

function App() {
  return (
    <div>
      <Routes>
        <Route path={PATH.HOME} element={<Home />} />
        <Route path={PATH.TEST} element={<Test />} />
        <Route path={PATH.CATEGORYEXPLAIN} element={<CategoryExplain />} />
      </Routes>
    </div>
  );
}

export default App;
