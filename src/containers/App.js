import React from 'react';
import './App.css';
import { About }  from '../components/About';
import { Portfolio } from '../components/Portfolio';
import { Resume } from '../components/Resume';
import { Index } from '../components/Index';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer'; 
import d from '../portfolioData.json'

console.log(d);

export const App = () => (
    <div className="App">
      <Header/>
      <Index data={d}/>
      <About data={d.main}/>
      <Portfolio data={d.Portfolio}/>
      <Resume data ={d.Resume}/>
      <Footer/>
    </div>
);



