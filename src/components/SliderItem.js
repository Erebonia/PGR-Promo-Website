import React from 'react';
import {Link} from 'react-router-dom';


function SliderItem(props) {
  return (
  <>
  <li className = "Slider__item" >    
      <Link className= "Slider__item__link" to = {props.path}>
      <figure style={{ '--data-color': props.color, }} className="Slider__item__pic-wrap" data-category={props.element}>
      <img src={props.src} alt={props.alt} className="Slider__item__img" />
        </figure>
        <div className = "Slider__item__info">
            <h5 className ='Slider__item__text'>{props.text}</h5>
        </div>
      </Link>
  </li>
  </>
  );
}



export default SliderItem;
