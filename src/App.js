import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Hero from './components/Hero';
import Fragrance from './components/Fragrance';
import SkinCare from './components/SkinCare';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className='bg-orange-50'>
      <Hero/>
      <Fragrance/>
      <SkinCare/>
      
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
