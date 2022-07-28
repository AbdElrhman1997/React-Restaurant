import React from 'react';
import './App.scss';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Offers1 from './Components/Offers1/Offers1';
import Offers2 from './Components/Offers2/Offers2';
import Offers3 from './Components/Offers3/Offers3';
import Explore from './Components/Explore/Explore';
import Statistics from './Components/Statistics/Statistics';
import Offers5 from './Components/Offers5/Offers5';
import Testimonials from './Components/Testimonials/Testimonials';
import FAQ from './Components/FAQ/FAQ';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <main className="App">
      <NavBar/>
      <Home/>
      <Statistics/>
      <Offers1/>
      <Offers2/>
      <Offers3/>  
      <Explore/>
      <Testimonials/>
      <FAQ/>
      <Offers5/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default App;
