import React from 'react';
import './components.css';
 
function Patients(){
    return(
        <div>
            <div className="container shad p-3 mt-5 mb-5 bg-white bordrup">
                <div className="row mt-3">
                    <div className="col-lg-9 col-6 col-md-7  "><h3>Patients</h3></div>
                    <div className="col-lg  col-6 col-md-5 ">
                        <h3>Today,March 24 &nbsp;
                            <svg class="mt-n2" aria-hidden="true" focusable="false" width="30px" height="30px" data-prefix="far" data-icon="calendar-alt" class="svg-inline--fa fa-calendar-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg>
                        </h3>
                    </div>
                    <div className="col-12">
                    <table class=" table table-responsive-md table-borderless px-5 mt-5">
                                        <thead class="shad">
                                            <tr>
                                              <th scope="row font-20"></th>
                                              <td class="py-4 font-20">PAtient Name</td>
                                              <td class="py-4 font-20">Gender</td>
                                              <td class="py-4 font-20">Age</td>
                                              <td class="py-4 font-20">Purpose</td>
                                              <td class="py-4">Time Slot</td>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr class="border-bottom">
                                              <td scope="row col-1"><div class="graycircle"></div></td>
                                              <td class="py-4 font-14">Babur Ahmed</td>
                                              <td class="py-4 font-14">Male</td>
                                              <td class="py-4 font-14">34</td>
                                              <td class="py-4 font-14 ">Consultation</td>
                                              <td class="py-4 font-14">11 a.m</td>
                                            </tr>
                                            <tr class="border-bottom">
                                              <th scope="row col-1"><div class="graycircle"></div></th>
                                              <td class="py-4 font-14">Rupali Domre</td>
                                              <td class="py-4 font-14">Female</td>
                                              <td class="py-4 font-14">40</td>
                                              <td class="py-4 red-text font-14">Diagnostic</td>
                                              <td class="py-4 font-14">12p.m</td>
                                              
                                            </tr>
                                            <tr class="border-bottom">
                                            <th scope="row col-1"><div class="graycircle"></div></th>
                                              <td class="py-4 font-14">Rupali Domre</td>
                                              <td class="py-4 font-14">Female</td>
                                              <td class="py-4 font-14">40</td>
                                              <td class="py-4 red-text font-14">Diagnostic</td>
                                              <td class="py-4 font-14">12p.m</td>
                                              
                                            </tr>
                                            <tr class="border-bottom">
                                            <th scope="row col-1"><div class="graycircle"></div></th>
                                              <td class="py-4 font-14">Rupali Domre</td>
                                              <td class="py-4 font-14">Female</td>
                                              <td class="py-4 font-14">40</td>
                                              <td class="py-4 red-text font-14">Diagnostic</td>
                                              <td class="py-4 font-14">12p.m</td>
                                              
                                            </tr>
                                            <tr class="border-bottom">
                                            <th scope="row col-1"><div class="graycircle"></div></th>
                                              <td class="py-4 font-14">Rupali Domre</td>
                                              <td class="py-4 font-14">Female</td>
                                              <td class="py-4 font-14">40</td>
                                              <td class="py-4 red-text font-14">Diagnostic</td>
                                              <td class="py-4 font-14">12p.m</td>
                                              
                                            </tr>
                                            <tr class="border-bottom">
                                            <th scope="row col-1"><div class="graycircle"></div></th>
                                              <td class="py-4 font-14">Rupali Domre</td>
                                              <td class="py-4 font-14">Female</td>
                                              <td class="py-4 font-14">40</td>
                                              <td class="py-4 red-text font-14">Diagnostic</td>
                                              <td class="py-4 font-14">12p.m</td>
                                              
                                            </tr>
                                          </tbody>
                                    </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Patients;