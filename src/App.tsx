import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Solutions from './pages/Solutions';
import Integrations from './pages/Integrations';
import Pricing from './pages/Pricing';
import Resources from './pages/Resources';
import Security from './pages/Security';
import Customers from './pages/Customers';
import Careers from './pages/Careers';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Demo from './pages/Demo';
import NotFound from './pages/NotFound';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/security" element={<Security />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/blog" element={<Resources />} />
          <Route path="/docs" element={<Resources />} />
          <Route path="/faq" element={<Resources />} />
          <Route path="/changelog" element={<Resources />} />
          <Route path="/case-studies" element={<Customers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
