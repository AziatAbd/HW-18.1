import { Navigate, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import AuthPage from "./page/AuthPage";
import TodoPage from "./page/TodoPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route path="/todos" element={<TodoPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      <GlobalStyle />
    </div>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
    body{
      background-color: aliceblue;
    }
`;
