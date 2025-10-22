import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import Home from './pages/Home';
import BscCsit from './pages/BscCsit';
import Bit from './pages/Bit';
import MscCsit from './pages/MscCsit';
import Updates from './pages/Updates';
import CookiePolicy from './pages/CookiePolicy';
import { getThemePreference } from './utils/cookies';

function App() {
  useEffect(() => {
    // Apply saved theme on mount
    const theme = getThemePreference();
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bsc-csit" element={<BscCsit />} />
              <Route path="/bit" element={<Bit />} />
              <Route path="/msc-csit" element={<MscCsit />} />
              <Route path="/updates" element={<Updates />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
            </Routes>
          </main>
          <Footer />
          <CookieBanner />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;

