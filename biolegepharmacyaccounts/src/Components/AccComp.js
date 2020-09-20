import React from 'react';
import './components.css';

function AccComp(props) {
    return (
        <div className="card cardborder mt-5 mt-lg-0">
        <div className="row px-4 py-2">
          <div className="col-11 font36 pt-2">
            {props.name}
          </div>
          
          <div className=" col-1 mt-2 ml-n4">
            <button className="rounded-pill btn-sm buttongray">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" height="1.1em" width="1.1em" class="svg-inline--fa fa-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="gray" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
            </button>
          </div>
          <br/>
          <br/><br/><br/>
          <div className="col-12 font15 pt-2 pb-2">
            <div>{props.message}</div>
          </div>
        </div>
      </div>
    );
}
export default AccComp;