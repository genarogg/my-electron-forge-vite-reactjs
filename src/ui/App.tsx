import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Home from "ui/screens/Home";

import TopBar from "./components/electron/topBar/TopBar";

const App = () => {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </Router>
  );
};

export default App;
