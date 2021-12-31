import React from 'react';
import Card from './IndiaUI';
// import  Card from '../Card/Cards'
// import img4 from '../../../assets/img4.jpg';
 import img2 from '../../../assets/img2.jpg';
 import img3 from '../../../assets/img3.jpg';
 import img1 from '../../../assets/img1.jpg';
//  import img4 from '../../../assets/img4.jpg';


 function Cards(){
   
        return (
            <div className="container-fluid text-center">
                <h1> Tools & Resources</h1>
                <h3>Register On The Startup India Portal To Get Free Access To Useful Resources That Will Help You To Learn More At No Costs</h3>
        <hr/>
                 <div className="menu-tabs container">
        </div>
        {/* <div className="menu-tab"> */}
         {/* <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group" style={{width:450}}>
                <button className="btn btn-success" >MobileApp</button>
                <button className="btn btn-warning">PhotoApp</button>
                <button className="btn btn-danger" >ScreenApp</button>
                <button className="btn btn-info" >WebApp</button>
            </div> */}
       
         
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
                   
                   {/* <button class="btn btn-primary" type="button">Button</button> */}
                       </div>
                       <button type="button" class="btn btn-primary active" data-bs-toggle="button"  aria-pressed="true"> Click Here </button>
                       {/* <button class="btn btn-primary" type="button">Button</button> */}
            </div>

        );
    }

export default Cards;

