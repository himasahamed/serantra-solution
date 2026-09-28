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
import Clients from "./pages/Clients";
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
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<AboutPage />}
          />

          <Route
            path="/services"
            element={<ServicePage />}
          />

          <Route
            path="/projects"
            element={<ProjectsPage />}
          />

          <Route
            path="/clients"
            element={<Clients />}
          />

          <Route
            path="/contact"
            element={<ContactPage />}
          />

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