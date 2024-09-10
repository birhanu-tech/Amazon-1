import React from 'react'
import {Carousel} from "react-responsive-carousel"
import {img} from "./img/data"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.module.css"

function Carouseleffect() {
  return (
    <div>
        <Carousel
        autoplay={true}
        infinitloop={true}
        showindicators={false}
        showthumbs={false}
        
         className="b">
        {
            img.map((imgitemlink)=>{
                return <img src={imgitemlink}/>
            })

        }
        
        
     </Carousel>
     {/* <div className={classes.hero_img}></div> */}
    </div>
  )
}

export default Carouseleffect