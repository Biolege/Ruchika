import React from 'react';
import Subnav from './components/Subnav.js'
import Patients from './components/Patients.js'
import Navbar from './components/Navbar.js'
import './App.css';


function App() {
 return (
   <div>
     <div className="container">
       <div className="row">
         <div className="col-12">
         <Subnav></Subnav>
         </div>
         <div className="col-12 mt-4">
           <Patients></Patients>
         </div>
       </div>
     </div>
     
   </div>
           

 );
}

export default App;

