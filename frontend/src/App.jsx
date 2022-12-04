import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import Main from "./components/Main";
import FileForm from "./components/FileForm";

import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/file" element={<FileForm />} />
      </Routes>
    </div>
  );
}

export default App;
