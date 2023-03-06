import React from 'react';
import {Button} from './Button';
import './HeroSection.css';
import '../App.css';
import Video from '../videos/slayer.mp4';
export default function HeroSection() {
  return <div className = 'hero-container'> 
      <video src = {Video} autoPlay loop muted /> 
      <h2>Slayer Legend Community Hub</h2>
      <p>The best unofficial spot for information and resources.</p>
      <div className = "hero-btns">
      <a href = "https://news.pgrliberationfront.com/">
        <Button className = 'btns' buttonStyle ='btn--outline' buttonSize = 'btn--large'> Latest News </Button>
         </a>
        {/* <Button className = 'btns' buttonStyle ='btn--primary' buttonSize = 'btn--large'> Pain Cage<i className = 'far fa-play-circle'/> </Button> */}
      </div>
  </div>;
}
