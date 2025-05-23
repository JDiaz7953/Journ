import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Wrapper from "./pages/wrapper";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/account/UpdatePassword";
import Navbar from "./components/navbar";
import { useState } from "react";

function App() {


  return (
    <div className="flex justify-center">
    
      <Router>
        <Routes>
          <Route exact path="/" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/dashboard"
            element={
              <Wrapper>
                <Profile />
              </Wrapper>
            }
          />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
          <Route
            exact
            path="account/update-password"
            element={<UpdatePassword />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
