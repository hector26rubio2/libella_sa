import './App.css';
import "primereact/resources/themes/vela-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Navigation from './component/Nav/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './component/About/About';

function App() {
  return (
    <div className="App">
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path="/" element={null} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;