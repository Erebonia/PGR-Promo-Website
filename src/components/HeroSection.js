import React from 'react';
import {Button} from './Button';
import './HeroSection.css';
import '../App.css';
import Video from '../videos/nona.mp4';
export default function HeroSection() {
  return <div className = 'hero-container'> 
      <video src = {Video} autoPlay loop muted /> 
      <h2>Punishing: Liberation Front</h2>
      <p>Mangetsu's Guild Headquarters and PGR Archive</p>
      <div className = "hero-btns">
        <Button className = 'btns' buttonStyle ='btn--outline' buttonSize = 'btn--large'> Latest News </Button>
        {/* <Button className = 'btns' buttonStyle ='btn--primary' buttonSize = 'btn--large'> Pain Cage<i className = 'far fa-play-circle'/> </Button> */}
      </div>
  </div>;
}
