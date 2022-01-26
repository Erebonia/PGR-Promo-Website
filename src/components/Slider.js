import React from 'react';
import SliderItem from './SliderItem';
import "./Slider.css"

var bgColors = { "Default": "#81b71a",
                    "Blue": "#1f98f4",
                    "Cyan": "#37BC9B",
                    "Green": "#32CD32",
                    "Red": "#FF0000",
                    "Yellow": "#F6BB42",
                    "Purple": "#6a0dad",
                    "Gray": "#808080"
};

function Slider() {

  return (
  <div className='Slider'>
      <div className = "Slider__container">
          <div className = "Slider_wrapper">
              <ul className= "Slider__items" >
                    <SliderItem
                    src='/images/ppc/BossSingleTab3.png'
                    text = "Camu" 
                    element ="Weakness: Kamui"
                    color = {bgColors.Purple}
                    alt = ""
                    path = "https://www.youtube.com/playlist?list=PL7JA1IrqCTWqBn794CzoGS3phTwUVdCDc"/>

                    <SliderItem
                    src='/images/ppc/BossSingleTab5.png'
                    text = "Tifa" 
                    element ="Weakness: Dark"
                    color = {bgColors.Purple}
                    alt = ""
                    path = "https://www.youtube.com/playlist?list=PL7JA1IrqCTWrbD7AzAKhiON8v-BnzKOQg"/>

                    <SliderItem
                    src='/images/ppc/BossSingleTab16.png'
                    text = "Alpha" 
                    element ="Weakness: Rosetta"
                    color= {bgColors.Gray}
                    alt = ""
                    path = "https://www.youtube.com/playlist?list=PL7JA1IrqCTWrVqHRGMeZHzfDCjbbqJdvd"/>

                    <SliderItem
                    src='/images/ppc/BossSingleTab7.png'
                    text = "Roseblade" 
                    element ="Weakness: Ice"
                    color = {bgColors.Blue}
                    alt = ""
                    path = "https://www.youtube.com/playlist?list=PL7JA1IrqCTWrlJgqfPXU5ek4Q-EMGrFpV"/>

                    <SliderItem
                    src='/images/ppc/BossSingleTab9.png'
                    text = "Nozzle" 
                    element ="Weakness: Fire"
                    color = {bgColors.Red}
                    alt = ""
                    path = "https://www.youtube.com/playlist?list=PL7JA1IrqCTWqLS8GlnRkGUyqG4CXN604R"/>

                    <SliderItem
                    src='/images/ppc/BossSingleTab10.png'
                    text = "Musashi" 
                    element ="Weakness: Tank"
                    color= {bgColors.Gray}
                    alt = ""
                    path = "https://www.youtube.com/playlist?list=PL7JA1IrqCTWptmgjes0ZUAXeCFT-HWm4y"/>

                    <SliderItem
                    src='/images/ppc/BossSingleTab14.png'
                    text = "Roland" 
                    element ="Weakness: Physical"
                    color= {bgColors.Gray}
                    alt = ""
                    path = "https://www.youtube.com/playlist?list=PL7JA1IrqCTWqe20nkenJBadMhtjBdYRXX"/>

                    <SliderItem
                    src='/images/ppc/BossSingleTab17.png'
                    text = "Rosetta" 
                    element ="Weakness: Being Close"
                    color= {bgColors.Gray}
                    alt = ""
                    path = "https://www.youtube.com/playlist?list=PL7JA1IrqCTWqn6mjj8Urh8-KR0ixS5m5H"/>

                    <SliderItem
                    src='/images/ppc/BossSingleTab18.png'
                    text = "Huaxu" 
                    element ="Weakness: Ice"
                    color= {bgColors.Blue}
                    alt = ""
                    path = "https://www.youtube.com/playlist?list=PL7JA1IrqCTWrTvnm1JBsGadA12E7RyWl7"/>
                    
              </ul>
          </div>
      </div>
      <h3>Drag your mouse and click any banner to see a video strategy.</h3>
      <h4>Strategy and Equipment Spreadsheet: <a href = "https://docs.google.com/spreadsheets/d/1_2Jg37FIxK7bqqaSYT9G2qirShdsC3G-ZdYQSeYIlmA/edit?usp=sharing">HERE</a></h4>
      <h4>Special thanks to Esqpur for providing all the clips!</h4>
  </div>
  );

  
}



export default Slider;
