import React from 'react';
import './App.css';

import Home from './components/pages/HomePage/Home';
import MakeInIndia from './components/pages/MakeInIndia/India'
  // import Technology from './components/pages/Technology/CardUI'
 import Technology from './components/pages/Technology/Cards';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import ContactUS from './components/pages/ContactUs/mailer';
import Projects from './components/pages/Projects/Projects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer.js/Footer';
// import MadeInIndia from './components/pages/MakeInIndia/MakeInIndia';
// import LoginIcon from '../components/Assets/icon-img.png';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/makeinindia' component={MakeInIndia} />
        <Route path='/contactus' component={ContactUS} />
        <Route path='/projects' component={Projects} />
        <Route path='/technology' component={Technology} />
      {/* <Card/> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;