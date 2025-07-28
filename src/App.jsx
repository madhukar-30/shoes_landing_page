// App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home   from './components/Home';
import Men    from './pages/Men';
import Women  from './pages/Women';
import Kids   from './pages/Kids';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"      element={<Home />} />
        <Route path="/men"   element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids"  element={<Kids />} />
        <Route path="*"      element={<h1 className="text-center mt-20">404 – Not found</h1>} />
      </Routes>
    </>
  );
}
