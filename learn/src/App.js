import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Nav from './page/nav';
import Footer from './page/footer';
import Home from './page/home';
import Course from './page/course';
import Sub from './page/subcourse';
import Trainer from './page/trainer';
import Subtrainer from './page/subtrainer';

function App() {
  return (

    <BrowserRouter>
    <Nav/>
      <Routes>
        
        <Route path='/' Component={Home}/>
        <Route path='/course' Component={Course}/>
        <Route path='/sub' Component={Sub}/>
        <Route path='/trainer' Component={Trainer}/>
        <Route path='/subtrainer' Component={Subtrainer}/>
      </Routes> 
    
    <Footer/>
    </BrowserRouter>


  );
}

export default App;
