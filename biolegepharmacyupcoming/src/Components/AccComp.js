import React from 'react';
import './components.css';

function AccComp() {
    return (
        <div className="container cardborder ">
          <div className="row ">
          <div className="col-5 bluebackground py-1 pl-4">
            <h4>Patient details</h4>
          </div>
           <div className="col-7 bluebackground1 py-1 text-right pr-4">
              <h5>April 27,2020 11:45 am</h5>
           </div>
           <div className="col-lg-7 col-6  my-4">
             <div classname="row">
               <div className="col-12 font18">
                 Name
               </div>
               <div className="col-12 font22">
                 Customer details
               </div>
               <div className="col-12 mt-3 font18">
                Address
               </div>
               <div className="col-12 font22">
               Kedia Puram, VIP Colony, Hojai, Assam-782435
               </div>
             </div>
           </div>
           <div className="col-lg-5 col-6 my-4">
           <div classname="row">
               <div className="col-12 font18">
                  Contact
               </div>
               <div className="col-12 font22">
                  1010101010101
               </div>
               <div className="col-12 mt-3 font18">
                  Payment
               </div>
               <div className="col-12 font22">
                  Cash on Delivery
               </div>
               <div className="col-12 mt-3 font18">
                  Order Number
               </div>
               <div className="col-12 font22">
                  BM124
               </div>
             </div> 
           </div>
          </div>
        </div>
    );
}
export default AccComp;