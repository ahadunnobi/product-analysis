import React, { useState } from 'react';
import './reviewdata.css'

const Reviewdata = ({Review}) => {
        const{ briefReview, image, name , stars}= Review;
        const [showmore, setshowmore] = useState(false);
        return (   
<div >
  <div className="container m-5 ">
      <div className="img-area  ">
         <div className="inner-area">
            <img src={image}alt=""/>
         </div>
      </div>
      <div className="name">{name}</div>
      <div className="font-bold">Ratings : {stars}</div>
      <div className="about">
        {showmore ? briefReview :`${briefReview.substring(0,250)}`}
        <br></br><button className="inset-1 font-bold" onClick={()=> setshowmore(!showmore)}>
        {showmore ? "...Show less" : "...Show more"}</button></div>
   </div>
</div>
        );
};

export default Reviewdata;