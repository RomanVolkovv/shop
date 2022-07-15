import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './pages/HomePage';
import { Settings } from './pages/SettingsPage';
import { LayOut } from './components/LayOut';

const App = () => {
  return (
    <div>
      <Header />
      <LayOut>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='settings' element={<Settings />} />
        </Routes>
      </LayOut>
      <Footer />
    </div>
  );
};

export default App;
