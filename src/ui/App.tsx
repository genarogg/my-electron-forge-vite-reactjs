import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import TopBar from "./components/electron/TopBar/TopBar";
import Provider from "@provider";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <Provider>
        <TopBar />
        <Router>
          <Routes>
            {/* <Route path="/" element={<Dashboard />} /> */}
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
};

export default App;
