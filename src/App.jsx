
import "./assets/global.css";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import Destination from "./pages/destination/Destination.jsx";
import Contact from "./pages/Contact/Contact";
import Trips from "./pages/trips/Trips.jsx";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      { <Header /> }
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destiny" element={<Destination />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/trips" element={<Trips />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
