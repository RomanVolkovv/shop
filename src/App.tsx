import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './pages/HomePage';
import { Settings } from './pages/SettingsPage';
import { LayOut } from './components/LayOut';
import { routes } from './utils/route/route';
import { Users } from './pages/Users';
import { LoginPage } from './pages/LoginPage';
import RegistrationPage from './pages/LoginPage/RegistrationPage';
const App = () => {
  return (
    <div>
      <Header />
      <LayOut>
        <Routes>
          <Route path={routes.home_page} element={<Home />} />
          <Route path={routes.users_page} element={<Users />} />
          <Route path={routes.login_page} element={<LoginPage />} />
          <Route path={routes.register_page} element={<RegistrationPage />} />
          <Route path={routes.settings_page} element={<Settings />} />
        </Routes>
      </LayOut>
      <Footer />
    </div>
  );
};

export default App;
