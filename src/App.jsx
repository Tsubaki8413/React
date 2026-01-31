import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="inner">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;