import React from 'react';
import './component.css';

function Present(props) {
    return (
        <div className="card cardborder mt-5 mt-xl-0">
        <div className="row px-4 py-2">
            <div className="col-8 font26 pt-2">
               <h4>{props.name}</h4>
               <div className="font14">{props.position}</div>
            </div>
            <div className="col-4 font14 d-flex justify-content-end pt-2">
               <div className="circle"></div>
            </div>
            <br/><br/>
            <div className="col-12 pt-2">
              <h5>{props.number}</h5>
            </div>
        </div>
</div>
    );
}
export default Present;