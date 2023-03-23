import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import AboutUs from './pages/About-Us/AboutUs';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
      </Routes>

    </Router>
    </div>
  );
}

export default App;
