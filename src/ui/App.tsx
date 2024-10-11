import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import TopBar from "./components/electron/TopBar/TopBar";
import Provider from "@provider";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <Provider>
        <TopBar />
        <Router>
          <Routes>
            <Route path="/" element={<p>adsf</p>} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          </Routes>
        </Router>
      </Provider>
    </>
  );
};

export default App;
