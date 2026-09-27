import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SiteMotion from "./components/SiteMotion";
import Home from "./pages/Home";
import Clients from "./pages/Clients";
import ServicePage from "./pages/ServicePage";
import RequestQuote from "./pages/RequestQuote";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SiteMotion />
      <Navbar />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/request-quote" element={<RequestQuote />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

