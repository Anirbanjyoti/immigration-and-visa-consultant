// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Page/Sheared/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Footer from "./Page/Sheared/Footer";
import Services from "./Page/Services";
import Login from "./Page/Login/Login";
import SignUp from "./Page/Login/SignUp";
import RequireAuth from "./Page/Login/RequireAuth";
import { ToastContainer } from "react-toastify";
import Checkout from "./Page/Checkout";
import Confirm from "./Page/Confirm";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route
          path="service"
          element={
            <RequireAuth>
              <Services />
            </RequireAuth>
          }
        />
        <Route
          path="checkout/:serviceId"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route path="about" element={<About />} />
        <Route path="confirm" element={<Confirm />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
