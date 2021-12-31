import React from 'react';

import './style.css';

const Card  = (props) => {
    return (
        <>
           
     <div className="card text-center">
        <div className="overflow">
            <img src={props.imgsrc} alt="Image 1" className='card-img-top'/>
        </div>
        <div className="card-body text-dark">
         <p className="card-text text-secondary">Project3</p>
         <p className="card-text text-secondary">Project4</p>
         {/* <a href="#" className="btn btn-outline-success">Go Anywhere</a> */}
      

         </div>
       
        
        </div>
        {/* <button type="button" class="btn btn-primary">Primary</button> */}
   </>
    );

}
export default Card;