import './App.css';
import "primereact/resources/themes/vela-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Navigation from './components/Nav/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Product from './components/product/Product'
import InformacionProductos from './components/informacionProductos/InformacionProductos'
function App() {
  return (
    <div className="App">
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path="/" element={null} />
          <Route path="/hol" element={null} />
        </Routes>
      </BrowserRouter>
      <InformacionProductos/>
      

    </div>
  );
}

export default App;