// eslint-disable-next-line @typescript-eslint/no-unused-vars
import AllIncasPage from '../pages/all-incas-page/all-incas-page';
import styles from './app.module.css';

import { Route, Routes, Navigate } from 'react-router-dom';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/inkas" />} />
        <Route path="/inkas" element={<AllIncasPage />} />
      </Routes>
      {/* END: routes */}
    </>
  );
}

export default App;
