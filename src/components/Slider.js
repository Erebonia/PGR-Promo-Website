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
                    src='/images/ppc/cave.png'
                    text = "Training" 
                    element ="Loadout: Mixed"
                    color = {bgColors.Purple}
                    alt = ""
                    path = "https://www.youtube.com/playlist?list=PL7JA1IrqCTWqBn794CzoGS3phTwUVdCDc"/>

                    <SliderItem
                    src='/images/ppc/dimboss.png'
                    text = "Rift" 
                    element ="Loadout: Boss Build"
                    color = {bgColors.Purple}
                    alt = ""
                    path = "https://www.youtube.com/playlist?list=PL7JA1IrqCTWrbD7AzAKhiON8v-BnzKOQg"/>

                    <SliderItem
                    src='/images/ppc/dragon.png'
                    text = "Dragon" 
                    element ="Loadout: Boss Build"
                    color= {bgColors.Gray}
                    alt = ""
                    path = "https://www.youtube.com/playlist?list=PL7JA1IrqCTWrVqHRGMeZHzfDCjbbqJdvd"/>

                    <SliderItem
                    src='/images/ppc/forest.png'
                    text = "Forest" 
                    element ="Loadout: Speed Run"
                    color = {bgColors.Blue}
                    alt = ""
                    path = "https://www.youtube.com/playlist?list=PL7JA1IrqCTWrlJgqfPXU5ek4Q-EMGrFpV"/>

                    <SliderItem
                    src='/images/ppc/Mine.png'
                    text = "Closed Mine" 
                    element ="Loadout: Speed Run"
                    color = {bgColors.Red}
                    alt = ""
                    path = "https://www.youtube.com/playlist?list=PL7JA1IrqCTWqLS8GlnRkGUyqG4CXN604R"/>

                    <SliderItem
                    src='/images/ppc/warrior.png'
                    text = "Companions" 
                    element ="Loadout: Custom"
                    color= {bgColors.Gray}
                    alt = ""
                    path = "https://www.youtube.com/playlist?list=PL7JA1IrqCTWptmgjes0ZUAXeCFT-HWm4y"/>

                    <SliderItem
                    src='/images/ppc/adventure.png'
                    text = "Adventure" 
                    element ="Loadout: Mixed"
                    color= {bgColors.Gray}
                    alt = ""
                    path = "https://www.youtube.com/playlist?list=PL7JA1IrqCTWqe20nkenJBadMhtjBdYRXX"/>

                    <SliderItem
                    src='/images/ppc/stageboss.png'
                    text = "Stage Bosses" 
                    element ="Loadout: Boss Build"
                    color= {bgColors.Gray}
                    alt = ""
                    path = "https://www.youtube.com/playlist?list=PL7JA1IrqCTWqn6mjj8Urh8-KR0ixS5m5H"/>

                    <SliderItem
                    src='/images/ppc/stagefarm.png'
                    text = "Stage Farm" 
                    element ="Loadout: Speedrun"
                    color= {bgColors.Blue}
                    alt = ""
                    path = "https://www.youtube.com/playlist?list=PL7JA1IrqCTWrTvnm1JBsGadA12E7RyWl7"/>
                    
              </ul>
          </div>
      </div>
      <h3>Drag your mouse and click any banner for more information and resources.</h3>
      <h4>Special thanks to the Slayer Legend Community discord for providing all the information and resources.</h4>
  </div>
  );

  
}



export default Slider;
