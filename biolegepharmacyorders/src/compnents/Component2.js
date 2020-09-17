import React from 'react';
import './compnents.css';
function Component2(props) {
    return(
    <div>
        <div className="cardborder card mt-5 mt-xl-0">
                <div className="row px-4 py-2">
                    <div className="col-10 font26 pt-2">
                       <h5>{props.name}</h5>
                    </div>
                    <div className="col-2">
                        <button className="btn rounded-pill btn-sm buttongray">
                        
                       <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" height="1em" width="1em" class="svg-inline--fa fa-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
                        </button>
                    </div>
                    <br/>
                    <br/><br/>
                    <div className="col-9 font14 pt-2">
                      Order number {props.number}
                    </div>
                    <div className="col-3 text-right">
                       <div>
                       <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rupee-sign" height="0.5em" width="0.5em" class="svg-inline--fa fa-rupee-sign fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z"></path></svg>
                           <c className="font22">{props.money}</c>
                           
                       </div>
                    </div>
                 </div>
        </div>
    </div>
    );
}
export default Component2;