import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
