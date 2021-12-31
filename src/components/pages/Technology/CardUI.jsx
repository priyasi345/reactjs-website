import React from 'react';

import './card-style.css';

const Card  = (props) => {
    return (
        <>
           
     <div className="card text-center">
        <div className="overflow">
            <img src={props.imgsrc} alt="Image 1" className='card-img-top'/>
        </div>
        <div className="card-body text-dark">
         <p className="card-text text-secondary">Project1</p>
         <p className="card-text text-secondary">Project2</p>
         {/* <a href="#" className="btn btn-outline-success">Go Anywhere</a> */}
         <a class="btn btn-primary" href="#" role="button">Know More</a>

         </div>
        </div>
   </>
    );

}
export default Card;