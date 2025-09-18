import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import {img} from"./image/data";
import classes from "./Carousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";


function CarouselEffect() {
  return (
    <div className={classes.effect_margin}>
        <Carousel 
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}>

            {
                img.map((imageItemLink)=>{
                    return <img src ={imageItemLink}/>
                })
            }
            
        </Carousel>
        <div className={classes.hero_img}></div>
    </div>
  )
}

export default CarouselEffect