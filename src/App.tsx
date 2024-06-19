import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import SignInPage from './pages/Signin';
import SignUpPage from './pages/Signup';

import * as PATH from './utils/path';
import CategoryExplain from './pages/CategoryExplain';

function App() {
  return (
    // <BrowserRouter>
    <Routes>
      <Route path={PATH.HOME} element={<Home />} />
      <Route path={PATH.TEST} element={<Test />} />
      <Route path={PATH.SIGNIN} element={<SignInPage />} />
      <Route path={PATH.SIGNUP} element={<SignUpPage />} />
      <Route path={PATH.CATEGORYEXPLAIN} element={<CategoryExplain />} />
    </Routes>
    // </BrowserRouter>
  );
}

export default App;
