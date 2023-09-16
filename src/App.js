import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Hero from './components/Hero';
import Fragrance from './components/Fragrance';
import SkinCare from './components/SkinCare';
import Footer from './components/Footer';
import DecodingFragnance from './components/DecodingFragnance';
import StoreLocator from './components/StoreLocator';

function App() {
  return (
    <BrowserRouter>
      <div className='bg-orange-50'>
      <Hero/>
      <Fragrance/>
      <SkinCare/>
      <DecodingFragnance/>
      {/* Seacsol Change */}
      <StoreLocator/>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
