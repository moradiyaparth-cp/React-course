
import './App.css';
import Alldata from './component/Alldata';
import Cart from './component/Cart';
import Navbar from './component/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Alldata />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
