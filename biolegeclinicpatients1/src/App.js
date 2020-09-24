import React from 'react';
import './App.css';


function App() {
 return (
   <div className="container mt-5 font ">
     <div className="row">
      <div className="col-12 bluebackground py-1 pl-5">
        <h5>Patient details</h5>
      </div>
      <div className="col-6 col-lg-3">
        <div className="row mt-5 pl-5">
          <div className="col-12 font-20">
            Name
          </div>
          <div className="col-12 mt-2 font-20">
            Mobile Number
          </div>
          <div className="col-12 mt-2 font-20">
            Address
          </div>
          <div className="col-12 mt-2 font-20">
            Date of Birth
          </div>
          <div className="col-12 mt-2 font-20">
            Age
          </div>
          <div className="col-12 mt-2 font-20">
            Gender
          </div>
          <div className="col-12 mt-2 font-20">
            Email Address
          </div>
        </div>        
      </div>
      <div className="col-6 col-lg-3">
        <div className="row mt-5">
          <div className="col-12 font-20">
            Name
          </div>
          <div className="col-12 mt-2 font-20">
            Mobile Number
          </div>
          <div className="col-12 mt-2 font-20">
            Address
          </div>
          <div className="col-12 mt-2 font-20">
            Date of Birth
          </div>
          <div className="col-12 mt-2 font-20">
            Age
          </div>
          <div className="col-12 mt-2 font-20">
            Gender
          </div>
          <div className="col-12 mt-2 font-20">
            Email Address
          </div>
        </div>        
      </div>
      <div className="col-1 d-none d-sm-none d-md-none d-lg-block mt-5 ">
        <div className="border-right"></div>
      </div>
      <div className="col-lg-5 col-12 mt-5">
        <div className="row pl-5 pl-lg-0">
          <div className="col-12 font-20">
            Doctor consulted 
          </div>
          <div className="col-12 mt-2">
            Dr. Champak Lal Singh
          </div>
          <div className="col-12 mt-2">
            Neurology
          </div>
          <div className="col-12 font-20 mt-2">
            Appointment date and time 
          </div>
          <div className="col-6 mt-2">
            March 24 2020, Monday 
          </div>  
          <div className="col-6 mt-2">
           11:30 am
          </div>
          <div className="col-12 mt-2 font-20">
            Payment details 
          </div>
          <div className="col-6 mt-2">
            Consultancy charge 
          </div>
          <div className="col-6 mt-2">
            Rs. 300 
          </div>
          <div className="col-12 mt-2">
            Cash
          </div>
        </div>
      </div>
      <div className="col-2 ml-lg-auto mt-3 mx-auto mx-lg-0 mb-5">
        <button className="btn btn-sm buttoncolor px-5">OK</button>
      </div>
     </div>
   </div>
           

 );
}

export default App;

