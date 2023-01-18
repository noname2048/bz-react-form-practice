import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import Main from "./components/Main";
import FileForm from "./components/FileForm";
import SurveyForm from "./components/SurveyForm.jsx";
import ControllerForm from "./components/ControllerForm.jsx";
import Spinner from "./components/Spinner";
import Kanban from "./components/domain/kanban/Kanban";

import styled from "styled-components";

function App() {
  return (
    <Container className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/file" element={<FileForm />} />
        <Route path="/survey" element={<SurveyForm />} />
        <Route path="/controller" element={<ControllerForm />} />
        <Route path="/spinner" element={<Spinner />} />
        <Route path="/kanban" element={<Kanban />} />
      </Routes>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
`;
