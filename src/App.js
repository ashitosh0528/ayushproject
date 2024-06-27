import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Career from './components/Career';
import Service from './components/Service';
import Abouts from './components/Abouts';
import Contacts from './components/Contacts';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>

      <Route path='/Home' element={<Home/>}></Route>

      <Route path='/Abouts' element={<Abouts/>}></Route>

      <Route path='/Service' element={<Service/>}></Route>

      <Route path='/Career' element={<Career/>}></Route>

     <Route path='/Contacts' element={<Contacts/>}></Route>


      </Routes>
      
      <Footer/>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
