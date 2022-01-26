import React from 'react';
import SliderItem from './SliderItem';
import "./Slider.css"

var bgColors = { "Default": "#81b71a",
                    "Blue": "#1f98f4",
                    "Cyan": "#37BC9B",
                    "Green": "#32CD32",
                    "Red": "#E9573F",
                    "Yellow": "#F6BB42",
};

function Slider() {

  return (
  <div className='Slider'>
      <h2> Pain Cage</h2>
      <div className = "Slider__container">
          <div className = "Slider_wrapper">
              <ul className= "Slider__items" >
                    <SliderItem
                    src='/images/ppc/BossSingleTab3.png'
                    text = "Camu" 
                    element ="Weakness: Kamui"
                    color = {bgColors.Green}
                    alt = ""
                    path = "/services"/>

                    <SliderItem
                    src='/images/ppc/BossSingleTab5.png'
                    text = "Tifa" 
                    element ="Weakness: Dark"
                    color = {bgColors.Red}
                    alt = ""
                    path = "/services"/>

                    <SliderItem
                    src='/images/ppc/BossSingleTab16.png'
                    text = "Alpha" 
                    element ="Weakness: Rosetta"
                    color= {bgColors.Blue}
                    alt = ""
                    path = "/services"/>

                    <SliderItem
                    src='/images/ppc/BossSingleTab7.png'
                    text = "Roseblade" 
                    element ="Weakness: Ice"
                    color = {bgColors.Green}
                    alt = ""
                    path = "/services"/>

                    <SliderItem
                    src='/images/ppc/BossSingleTab9.png'
                    text = "Nozzle" 
                    element ="Weakness: Fire"
                    color = {bgColors.Red}
                    alt = ""
                    path = "/services"/>

                    <SliderItem
                    src='/images/ppc/BossSingleTab10.png'
                    text = "Musashi" 
                    element ="Weakness: Tank"
                    color= {bgColors.Blue}
                    alt = ""
                    path = "/services"/>

                    <SliderItem
                    src='/images/ppc/BossSingleTab14.png'
                    text = "Roland" 
                    element ="Weakness: Physical"
                    color= {bgColors.Blue}
                    alt = ""
                    path = "/services"/>

                    <SliderItem
                    src='/images/ppc/BossSingleTab17.png'
                    text = "Rosetta" 
                    element ="Weakness: Being Close"
                    color= {bgColors.Blue}
                    alt = ""
                    path = "/services"/>

                    <SliderItem
                    src='/images/ppc/BossSingleTab18.png'
                    text = "Huaxu" 
                    element ="Weakness: Ice"
                    color= {bgColors.Blue}
                    alt = ""
                    path = "/services"/>
                    
              </ul>
          </div>
      </div>
  </div>
  );

  
}



export default Slider;
