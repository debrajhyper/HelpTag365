import { Routes, Route } from 'react-router-dom';
import { HomePage, LoginPage, NotFoundPage, RegisterPage, AboutPage, ContactUsPage } from '../pages';
import { ABOUT_PATH, CONTACT_US_PATH, HOME_PATH, LOGIN_PATH, NOT_FOUND_PATH, REGISTER_PATH } from '../routes';
import { Header } from '../components';

function App() {
  return (
    <div className='relative h-dvh w-full grid place-items-center items-start'>
      <Header />
      <Routes>
        <Route path={HOME_PATH} element={<HomePage />} />
        <Route path={LOGIN_PATH} element={<LoginPage />} />
        <Route path={REGISTER_PATH} element={<RegisterPage />} />
        <Route path={ABOUT_PATH} element={<AboutPage />} />
        <Route path={CONTACT_US_PATH} element={<ContactUsPage />} />
        <Route path={NOT_FOUND_PATH} element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
