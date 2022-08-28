import React from 'react'


export const PartnersDiscountCarousel = (props) => {
    // let offset=100;
    // const slider=document.querySelector('.PartnersDiscount');

    // document.querySelector('.button-slideright').addEventListener('click',function(){
    //     offset-=500;
    //     slider.style.left=offset+'px'
    // });
    // document.querySelector('.button-slideleft').addEventListener('click',function(){
    //     offset+=500;
    //     slider.style.left=offset+'px'
    // });
    return(
        <img className='DiscountImage' src={props.img} alt="" />
    )
}


export default PartnersDiscountCarousel;