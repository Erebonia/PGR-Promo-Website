import {Link} from 'react-router-dom';
import React, { useRef, useEffect } from 'react';

function SliderItem(props) {

const slider = useRef(null);

useEffect(() => {
    const slider = document.querySelector('.Slider__container')//To access the div with class slide track
    slider.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });
      slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
      });
      slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
      });
      slider.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
        console.log(walk);
      });
    console.log(slider);
    });

let isDown = false;
let startX;
let scrollLeft;
  return (
  <>
  <li className = "Slider__item" >    
      <a className= "Slider__item__link" href = {props.path} >
      <figure style={{ '--data-color': props.color, }} className="Slider__item__pic-wrap" data-category={props.element}>
      <img src={props.src} alt={props.alt} className="Slider__item__img" />
        </figure>
        <div className = "Slider__item__info">
            <h3 className ='Slider__item__text'>{props.text}</h3>
        </div>
      </a>
  </li>
  </>
  );
}



export default SliderItem;
