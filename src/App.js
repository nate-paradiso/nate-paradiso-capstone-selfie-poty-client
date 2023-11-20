import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Footer } from "./components/Footer/Footer";
import { HomePage } from "./pages/HomePage/HomePage";
import { Register } from "./pages/Register/Register";
import { Login } from "./pages/Login/Login";
import "./styles/_global.scss";
import { Profile } from "./pages/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <Header />
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
  );
}

export default App;
