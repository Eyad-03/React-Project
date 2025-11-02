import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Nav from './page/nav';
import Footer from './page/footer';
import Home from './page/home';
import Course from './page/course';
import Sub from './page/subcourse';
import Trainer from './page/trainer';
import Subtrainer from './page/subtrainer';
import Signin from './page/signin';
import Signup from './page/signup';
import Todo from  './page/todo';
import Contact from './page/contact';

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
        <Route path='/signin' Component={Signin}/>
        <Route path='/signup' Component={Signup}/>
        <Route path='/todo' Component={Todo}/>
        <Route path='/contact' Component={Contact}/>
      </Routes> 
    
    <Footer/>
    </BrowserRouter>


  );
}

export default App;
