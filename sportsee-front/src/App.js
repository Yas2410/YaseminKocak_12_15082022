import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="main-section">
          <Aside />
          <Routes>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
