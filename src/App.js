import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router ,Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import NotFound from './components/NotFound';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
     
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/About' element={<About/>}/> 
          <Route exact path='/Services' element={<Services/>}/> 
          <Route exact path='/ContactUs' element={<ContactUs/>}/> 
          <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>

  );
}

export default App;
