import "./App.css";
import Header from "./components/Header";
import {  Routes, Route } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Service from "./components/Service";
import Home from "./components/Home";
import Review from "./components/Review";


function App() {
  return (
    <div className="App">
      <>
      <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/reviews" element={<Review />} />
       
        </Routes>
        <Footer/>
        
      </>
    </div>
  );
}

export default App;
