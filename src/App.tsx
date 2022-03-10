import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./Pages/Navbar";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
   return (
      <div className="app">
         <Router>
            <Navbar />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/projects" element={<Projects />} />
               <Route path="/contact" element={<Contact />} />
            </Routes>
         </Router>
      </div>
   );
}

export default App;
