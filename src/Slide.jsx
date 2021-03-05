import React from 'react';
import './Slideshow.css'

const Slide = (props) => {

    const getStatus = (props) => {
        let status;
        if(props.slide === props.index){
            status = 'block';
        }else{
            status = 'none';
        }
        return status;
    };
    
    const status = getStatus(props);

    return (
        <div className="mySlides fade" style={{display: status}} onClick={props.setImage}>
            <div className="numbertext">1 / 3</div>
            <img src={props.url} alt={props} style={{width: '50%', margin: '30px'}} />
            <div className="text">Caption Text</div>
        </div>
    );
};

export default Slide;