// import logo from './logo.svg';
import './App.css';
import Navbar from './Page/Sheared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Page/Home';
import About from './Page/About';
import Footer from './Page/Sheared/Footer';
import Services from './Page/Services';
import Login from './Page/Login/Login';

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="service" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
