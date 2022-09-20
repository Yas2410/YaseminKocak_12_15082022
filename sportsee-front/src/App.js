import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import propTypes from "prop-types";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage";

/**
 * @description React component for App using React Router
 * @property {function} App
 * @param { {mock: Boolean} } props mock: Mocked data // API data
 * @returns { React.ReactElement } App
 */
function App(props) {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Homepage mock={props.mock} />}
          ></Route>
          <Route
            path="/user/:id"
            element={<Dashboard mock={props.mock} />}
          ></Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

App.propTypes = {
  mock: propTypes.bool.isRequired,
};

export default App;
