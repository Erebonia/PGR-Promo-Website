import React from 'react';
import CardItem from './CardItem';
import "./Cards.css"

var bgColors = { "Default": "#81b71a",
                    "Blue": "#1f98f4",
                    "Cyan": "#37BC9B",
                    "Green": "#32CD32",
                    "Red": "#E9573F",
                    "Yellow": "#F6BB42",
};

var tags = { "Guild": "Guild News",
                    "Global": "Global News",
                    "GuildEvent": "Guild Event",
                    "Green": "#32CD32",
                    "Red": "#E9573F",
                    "Yellow": "#F6BB42",
}
function Cards() {
  return (
  <div className='cards'>
      <h1> News and Information</h1>
      <div className = "cards__container">
          <div className = "cards_wrapper">
              <ul className= "cards__items" >
                    <CardItem
                    src='/images/pggroup2.jpg'
                    text = "Guild's are finally released! Which batch are you?" 
                    label ={tags.Guild}
                    color = {bgColors.Green}
                    alt = "Time to join the guild in game :D"
                    path = "/services"/>

                    <CardItem
                    src='/images/livheart.jpg'
                    text = "February Guild Event" 
                    label ={tags.GuildEvent}
                    color = {bgColors.Red}
                    alt = "An official mangetsu event!"
                    path = "/services"/>

                    <CardItem
                    src='/images/chromesleek.jpg'
                    text = "Welcome to the Liberation Front!" 
                    label ={tags.Global}
                    color= {bgColors.Blue}
                    alt = "Welcome to the Liberation Front!"
                    path = "/services"/>
                    
              </ul>
          </div>
      </div>
  </div>
  );
}

export default Cards;
