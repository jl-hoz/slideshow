import React, { useState } from 'react';
import './Slideshow.css';
import Slide from './Slide'

const Slideshow = () => {

  const [slideIndex, setSliceIndex] = useState(0);
  const [isImage, setImage] = useState(false);
  const data = ["https://gitlab.com/dwt1/wallpapers/-/raw/master/0001.jpg", "https://gitlab.com/dwt1/wallpapers/-/raw/master/0002.jpg", "https://gitlab.com/dwt1/wallpapers/-/raw/master/0003.jpg", "https://gitlab.com/dwt1/wallpapers/-/raw/master/0005.jpg"];
  
  const slices = data.map((url, index) => <Slide url={url} key={index} index={index} slide={slideIndex} setImage={() => addImage()}/> )
  const dots = data.map((url, index) => <span className="dot" key={index} onClick={() => setSliceIndex(index)} name={url}></span>)

  const mainImage = <img src={data[slideIndex]} style={{width: '750px', height: 'auto', marginTop: '60px'}} />;

  const addImage = () => {
    setImage(true);
  } 

  return (

    
    <div>
      
      {isImage ? mainImage : null}
      <div className="slideshow-container">

        {slices}
      </div>
      <br />

      <div style={{textAlign: 'center'}}>
        {dots}
      </div>
    </div>
  );
}

export default Slideshow; 