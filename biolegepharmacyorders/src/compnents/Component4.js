import React, {useState} from 'react';
import './compnents.css';
function Component4() {
     
      const [toggleFlag,setToggleFlag] = useState({
        numberFlag: true,
        biolegeFlag: false
      })
      const {numberFlag,biolegeFlag } = toggleFlag
      const mobileNumber = () => {
          return(
            <div className="row">
            <div className="col-12 font22">
                Enter Customer Mobile Number
           </div>
           <br/><br/>
           <div className="col-1 offset-2 mt-2">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" height="1.5em" width="1.5em" data-icon="phone-alt" class="svg-inline--fa fa-phone-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>    
           </div>
           <div className="col-7">
                <div class="input-group mb-3">
                <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">+91</span>
                </div>
                <input type="text" class="form-control" placeholder="Enter mobile number" aria-label="Username" aria-describedby="basic-addon1"/>
               </div>  
           </div>
           <br/>
           <br/><br/>
           <div className="col">
                <button className="px-4 btn-sm " id="proceed">Proceed</button>
           </div>
        </div>
          );
      }
      const biolegeCard =() => {
          return(
        <div className="row">
        <div className="col-12 font22">
            Checkout with Biolege Card
       </div>
       <br/><br/>
       <div className="col-8 offset-2">
            <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Enter Biolege Card Number" aria-label="Username" aria-describedby="basic-addon1"/>
           </div>  
       </div>
       <br/>
       <br/>
       <div className="col-12">
            <button className="px-4 btn-sm " id="proceed">Proceed</button>
       </div>
       <div className="col-12 my-2">
            <h5><b>OR</b></h5>
        </div>
       <div className="col-12">
            <button className="px-4 btn-sm " id="scan">Scan QR Code</button>
       </div>
    </div>
          );
      }
      
      const clickedFunc = () => {
          setToggleFlag({
              ...toggleFlag, numberFlag: !numberFlag, biolegeFlag: !biolegeFlag
          });
      }
    return(
    <div>
       <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active tabtitle" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
  </li>
  <li class="nav-item" role="presentation">
   
       <a href="#profile"> <div class="nav-link tabtitle" id="profile-tab" data-toggle="tab" role="tab" aria-controls="profile" aria-selected="false">Profile</div></a>
    
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active border border-top-0 cardborder" id="home" role="tabpanel" aria-labelledby="home-tab">
  <div className="row mb-5">
        <div className="col-12 col-lg-6 billingpane text-center text-lg-left pt-5 pl-5 ">
            Start a new billing for pharmacy
            <div className="col d-none d-sm-none d-md-none d-lg-block"><br/><br/><br/><br/></div>
            <div><button type="button" class="btn btn-light" onClick={clickedFunc}>Checkout with biolege card</button></div>
        </div> 
        
        <div className="col-12 col-lg-6  mt-5 d-flex justify-content-center">
            <div className="card cardborder border text-center pt-4 pb-5" id="card1" >
                {numberFlag && mobileNumber()}
                {biolegeFlag && biolegeCard()}
            </div>
        </div>
    </div>
   </div>
       <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  
</div>
    </div>
    );
}
export default Component4;