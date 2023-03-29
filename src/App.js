import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import AboutUs from './pages/About-Us/AboutUs';



function App() {
  const [menu, setMenu] = useState(false);

  const change_menu_state = () => {
    setMenu(!menu);
  }


  return (
    <div className="App">
      <Router>
        <Navbar change_menu_function={change_menu_state} menu_state={menu} />
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
