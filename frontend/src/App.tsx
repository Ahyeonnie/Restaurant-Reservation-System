import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Menu from './pages/Menu';
import Reservations from './pages/Reservations';
import Contact from './pages/Contact';
import MainLayout from './layouts/Mainlayout';
import './index.css';


function App() {

  return (
   <Router>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path = "/about" element={<MainLayout><About /></MainLayout>} />
        <Route path="/news" element={<MainLayout><News /></MainLayout>} />
        <Route path="/menu" element={<MainLayout><Menu /></MainLayout>} />
        <Route path="/reservations" element={<MainLayout><Reservations /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
      </Routes>
      
    </Router>
  )
}

export default App
