import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Hero from './components/Hero';
import Fragrance from './components/Fragrance';
import SkinCare from './components/SkinCare';

function App() {
  return (
    <BrowserRouter>
      <div className='bg-orange-50'>
      <Hero/>
      <Fragrance/>
      <SkinCare/>
      
      </div>
      
    </BrowserRouter>
  );
}

export default App;
