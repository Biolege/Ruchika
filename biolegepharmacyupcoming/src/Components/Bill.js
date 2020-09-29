import React from 'react';
import './components.css';

function Bill() {
    return (
        <div className="container cardborder ">
          <div className="row ">
          <div className="col-12 bluebackground2 py-1 pl-4">
            <h4>Bill</h4>
          </div>
           
           <div className="col-7 mt-4">
             <div classname="row">
               <div className="col-12 font22">
                    Amount
               </div>
               <div className="col-12 mt-3 font22">
                    Delivery Charges
               </div>
               <div className="col-12 mt-3 font22">
                    Discount
               </div>
             </div>
           </div>
           <div className="col-5 mt-4">
           <div classname="row ">
               <div className="col-12 text-right font22">
                 Rs 2000
               </div>
               <div className="col-12 mt-3 text-right font22">
                  Rs 20
               </div>
               <div className="col-12 mt-3 text-right font22">
                  -15%
               </div>
               
             </div> 
           </div>
           <div className="col-12">
               <hr></hr>
           </div>
           <div className="col-7 ml-3 font22">
               Total
           </div>
           <div className="col-4 text-right marginbottom font22">
               Rs: 1500
           </div>
          </div>
        </div>
    );
}
export default Bill;