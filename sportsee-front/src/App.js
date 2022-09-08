import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import propTypes from "prop-types";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";

function App(props) {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="main-section">
          <Aside />
          <Routes>
            <Route
              path="/:id"
              element={<Dashboard mock={props.mock} />}
            ></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

App.propTypes = {
  mock: propTypes.bool.isRequired,
};

export default App;
