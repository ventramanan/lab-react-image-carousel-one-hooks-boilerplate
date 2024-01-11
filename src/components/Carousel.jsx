import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    let [currIndex,setCurrIndex] = useState(0)

    function move(){
        if(currIndex==0){
          setCurrIndex(images.length-1)
        }else{
          setCurrIndex(currIndex-1)
        }
      }
      function back(){
        if(currIndex==images.length-1){
          setCurrIndex(0)
        }else{
          setCurrIndex(currIndex+1)
        } 
      }
    return(
        <>
        <div className="main-container">
            <div className="forward" id="backwardIcon" >
            <ArrowBackIosIcon onClick={move}/>
            </div>
            <div className="imagecontainer">
                <div className="title">
                <h1>{images[currIndex].title}</h1>
                </div>
            <div className="image_box">
            <img src= {images[currIndex].img} />
            </div>
            <div className="para">
            <p>{images[currIndex].subtitle}</p>
            </div>
            </div>
            <div id="forwardIcon" className="forward">
                <ArrowForwardIosIcon onClick={back}/>
            </div>


        </div>
        
        </>
    )
}

export default Carousel;