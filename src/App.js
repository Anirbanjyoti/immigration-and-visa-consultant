// import logo from './logo.svg';
import './App.css';
import Navbar from './Page/Sheared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Page/Home';
import About from './Page/About';

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
