import React from "react";
import MainPage from "./pages/MainPage";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import TodoList from "./pages/Todo";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/todo" element={<TodoList />}></Route>
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
