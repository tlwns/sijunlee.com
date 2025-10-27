import { BrowserRouter, Routes, Route } from 'react-router';
import RootLayout from './layouts/RootLayout';
import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';
import SupportPage from './pages/GymTrack/SupportPage';
import PrivacyPolicyPage from './pages/GymTrack/PrivacyPolicyPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path='resume' element={<ResumePage />} />
          <Route path='gym-track/support' element={<SupportPage />} />
          <Route path='gym-track/privacy' element={<PrivacyPolicyPage />} />
        </Route>
        <Route path='*' element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
