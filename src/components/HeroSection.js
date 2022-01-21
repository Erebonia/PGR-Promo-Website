import React from 'react';
import {Button} from './Button';
import './HeroSection.css';
import '../App.css';
import Video from '../videos/pulao.mp4';
//
export default function HeroSection() {
  return <div className = 'hero-container'> 
      { /* <video src = {Video} autoPlay loop muted /> */}
      <h1>BIG ROEY FRAME</h1>
      <p>Stay safe and stay obese.</p>
      <div className = "hero-btns">
        { /*<Button className = 'btns' buttonStyle ='btn--outline' buttonSize = 'btn--large'> FUCKING READ </Button>
        <Button className = 'btns' buttonStyle ='btn--primary' buttonSize = 'btn--large'> PPC SHIT <i className = 'far fa-play-circle'/> </Button> */}
      </div>
  </div>;
}
