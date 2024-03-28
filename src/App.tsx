import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import * as PATH from "./utils/path";

function App() {
  return (
    <Routes>
      <Route path={PATH.HOME} element={<Home />} />
    </Routes>
  );
}

export default App;
