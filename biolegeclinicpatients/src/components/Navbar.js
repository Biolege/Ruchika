import React from 'react';
import './components.css';

function Navbar(){
  return(
    <nav className="navbar navbar-expand navbar-light backOrange">
                <div className="container-fluid">

                  <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/#"><div className="circle"></div></a>
                        </li>
                        <li className="vl mx-2 mt-2"></li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/#"><p className="heading colorWhite">Clinic Name</p>
                            <p className="mt-n3 px12 colorWhite">Extra name if any</p></a>
                        </li>
                    </ul>
                  </div>

                  <a href="/#" className="heading home ml-auto d-none d-md-block"><h2 className="colorWhite">Logo</h2></a>
                </div>
          </nav>
  );
}
export default Navbar;