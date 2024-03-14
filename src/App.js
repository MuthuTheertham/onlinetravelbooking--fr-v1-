// import './App.css';
import  { Login }  from './logintask/Login';
import  { SignUp }  from './logintask/Signup.js';
import { Home } from './logintask/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar1 from './Navbar1';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar1 />
      <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<SignUp />} />        
          <Route path='/Home' element={<Home />} />
         
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
