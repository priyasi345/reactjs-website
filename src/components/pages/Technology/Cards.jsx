import React from 'react';
import  Card from './CardUI';
// import  Card from '../Card/Cards'
import img1 from '../../../assets/img1.jpg';
 import img2 from '../../../assets/img2.jpg';
 import img3 from '../../../assets/img3.jpg';
 import img4 from '../../../assets/img4.jpg';


 function Cards(){
   
        return (
            <div className="container-fluid text-center">
                <h1> Our Technologies</h1>
        <hr/>
                 <div className="menu-tabs container">
        </div>
        {/* <div className="menu-tab"> */}
         <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group" style={{width:450}}>
                <button className="btn btn-success" >MobileApp</button>
                <button className="btn btn-warning">DesktopApp</button>
                <button className="btn btn-danger" >WebApp</button>
                <button className="btn btn-info" >DigitalSolution</button>
            </div>
       
       
                <div className="row">
                   <div className="col-md-4">
                       <Card imgsrc={img1}  />
                       </div> 
                       <div className="col-md-4">
                       <Card imgsrc={img2}/>
                       </div>
                   <div className="col-md-4">
                   <Card imgsrc={img3} />
                   </div>
                   
                   <div className="col-md-4" >
                   <Card imgsrc={img4}/>
                   </div> 
                       </div> 
                
            </div>

        );
    }

export default Cards;

