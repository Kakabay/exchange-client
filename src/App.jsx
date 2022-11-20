// Modules
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Styles
import './assets/styles/style.scss';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Gtsbt from './pages/Gtsbt';
import Finance from './pages/Finance';
import Normative from './pages/Normative';
import Trade from './pages/Trade';
import Register from './pages/Register';
import Ticker from './components/Ticker';
import Contacts from './pages/Contacts';
import NewsPage from './pages/NewsPage';

const App = () => {
  return (
    <div className="App">
      <Ticker />
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/gtsbt" element={<Gtsbt />} />
        <Route path="/fin" element={<Finance />} />
        <Route path="/norm" element={<Normative />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
