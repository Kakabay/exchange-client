// Modules
import { Routes, Route } from 'react-router-dom';
// Styles
import './assets/styles/style.scss';
// Components
import Header from './components/Header';

// Pages
import Home from './pages/Home';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
