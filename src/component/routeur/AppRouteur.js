import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import ApartmentPage from "../../pages/apartmentPage/ApartmentPage";
import Header from "../header/Header";
import Error from "../../pages/error/Error";
import Main from "../layout/Main";
import Footer from "../footer/Footer";

function Routeur() {
  return (
    <Router>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<About />} />
          <Route path="/logements/:id" element={<ApartmentPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Main>
      <Footer />
    </Router>
  );
}
export default Routeur;
