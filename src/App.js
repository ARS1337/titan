import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Routes } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/page1" element={<Page1/>} />
        <Route path="/page2" element={<Page2/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
