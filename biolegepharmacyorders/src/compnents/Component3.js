import React from 'react';
import './compnents.css';
function Component3(props) {
    return(
    <div>
        <div className="card cardborder">
                <div className="row px-4 pt-2 pb-5">
                    <div className="col font26 pt-2">
                       <h5>{props.name}</h5>
                    </div>
                    <br/>
                    <br/><br/>      

                </div>
        </div>
    </div>
    );
}
export default Component3;