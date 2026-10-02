import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import ScrollToTop from "./components/ScrollToTop";
import SiteMotion from "./components/SiteMotion";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import RequestQuote from "./pages/RequestQuote";


export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <SiteMotion />

      <Navbar />

      <main id="main-content">
        <Routes>
          {/* HOME */}

          <Route
            path="/"
            element={<Home />}
          />


          {/* ABOUT */}

          <Route
            path="/about"
            element={<AboutPage />}
          />


          {/* SERVICES */}

          <Route
            path="/services"
            element={<ServicePage />}
          />


          {/* PROJECTS */}

          <Route
            path="/projects"
            element={<ProjectsPage />}
          />


          {/* CONTACT */}

          <Route
            path="/contact"
            element={<ContactPage />}
          />


          {/* REQUEST QUOTE */}

          <Route
            path="/request-quote"
            element={<RequestQuote />}
          />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}