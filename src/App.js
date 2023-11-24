import React, { createContext, useState, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Footer } from "./components/Footer/Footer";
import { HomePage } from "./pages/HomePage/HomePage";
import { Register } from "./pages/Register/Register";
import { Login } from "./pages/Login/Login";
import { Profile } from "./pages/Profile/Profile";
import "./styles/_global.scss";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    console.log("Logged in");
    setIsLoggedIn(true);
  };

  const logout = () => {
    console.log("Logged out");
    sessionStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const authContextValue = {
    isLoggedIn,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={authContextValue}>
      <BrowserRouter>
        <div className="body">
          <Header className="nav" />
          <Hero />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
