// Modules
import { Routes, Route } from 'react-router-dom';

// Styles
import './assets/styles/style.scss';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Gtsbt from './pages/Gtsbt';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/gtsbt" element={<Gtsbt />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
