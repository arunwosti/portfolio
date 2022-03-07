import React from 'react';
import './Home.css';
import Profile from './Profile';
import Footer from './Footer/Footer';
import Aboutme from '../AboutMe/Aboutme';
import Header from './Header/Header';
import Resume from '../Resume/Resume';
import Testimonial from '../Testimonial/Testimonial';
import Contact from '../ContactMe/Contact';


export default function Home() {
  return (
    <div className='home-container'>
        <Header/>
        <Profile/>
        <Footer/>
        <Aboutme/>
        <Resume/>
        <Testimonial/>
        <Contact/>
    </div>
  )
}
