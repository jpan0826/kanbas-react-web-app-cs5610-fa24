import AssignmentsControls from "./AssignmentsControls";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { FaRegPenToSquare } from "react-icons/fa6";

export default function Assignments() {
    return (
        <div>
            <AssignmentsControls /><br /><br /><br /><br />

            <ul id="wd-assignments-all" className="list-group rounded-0">
                <li className="wd-assignments-all list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3" />

                    Assignments
        
   
                    <AssignmentsControlButtons />

                    </div>

                    <ul className="wd-assignments list-group rounded-0">
                        <li className="wd-assignment list-group-item p03 ps-1">

                            <div className="d-flex flex-row">
                                <div className="p-2">
                            <BsGripVertical className="me-2 fs-3" /></div>
                            <div className="p-2"><FaRegPenToSquare color="green" /></div>

                            <div className="p-2"><div id="wd-assignment-details">
                           <h5><strong><a className="wd-assignment-link text-decoration-none link-dark"
            href="#/Kanbas/Courses/1234/Assignments/123">
A1</a></strong></h5>
                            <div className="row">
                                <div className="col-md-auto"><h6><span className="text-danger">Multiple Modules </span>| </h6></div> 
                                <div className="col-md-auto"><h6><strong>Not available until</strong> May 6 at 12:00am |</h6></div>
                                <div className="col-md-auto"><h6><strong>Due</strong> May 13 at 11:59pm |</h6></div>
                                <div className="col-md-auto"><h6>100 pts</h6></div>
                            </div>
                            </div></div>
                            
                            <div className="p-2 ms-auto fixed-width">
                            <AssignmentControlButtons /></div>

                            </div>
                        </li>

                        <li className="wd-assignment list-group-item p03 ps-1">

                            <div className="d-flex flex-row">
                                <div className="p-2">
                            <BsGripVertical className="me-2 fs-3" /></div>
                            <div className="p-2"><FaRegPenToSquare color="green" /></div>

                            <div className="p-2"><div id="wd-assignment-details">
                            <h5><strong><a className="wd-assignment-link text-decoration-none link-dark"
            href="#/Kanbas/Courses/1234/Assignments/123">
A2</a></strong></h5>
                            <div className="row">
                                <div className="col-md-auto"><h6><span className="text-danger">Multiple Modules </span>| </h6></div> 
                                <div className="col-md-auto"><h6><strong>Not available until</strong> May 13 at 12:00am |</h6></div>
                                <div className="col-md-auto"><h6><strong>Due</strong> May 20 at 11:59pm |</h6></div>
                                <div className="col-md-auto"><h6>100 pts</h6></div>
                            </div>
                            </div></div>
                            
                            <div className="p-2 ms-auto fixed-width">
                            <AssignmentControlButtons /></div>

                            </div>
                        </li>

                        <li className="wd-assignment list-group-item p03 ps-1">

                            <div className="d-flex flex-row">
                                <div className="p-2">
                            <BsGripVertical className="me-2 fs-3" /></div>
                            <div className="p-2"><FaRegPenToSquare color="green" /></div>

                            <div className="p-2"><div id="wd-assignment-details">
                            <h5><strong><a className="wd-assignment-link text-decoration-none link-dark"
            href="#/Kanbas/Courses/1234/Assignments/123">
A3</a></strong></h5>
                            <div className="row">
                                <div className="col-md-auto"><h6><span className="text-danger">Multiple Modules </span>| </h6></div> 
                                <div className="col-md-auto"><h6><strong>Not available until</strong> May 20 at 12:00am |</h6></div>
                                <div className="col-md-auto"><h6><strong>Due</strong> May 27 at 11:59pm |</h6></div>
                                <div className="col-md-auto"><h6>100 pts</h6></div>
                            </div>
                            </div></div>
                            
                            <div className="p-2 ms-auto fixed-width">
                            <AssignmentControlButtons /></div>

                            </div>
                        </li>

                    </ul>
                </li>
            
            </ul>


            

        </div>

    
  );}
  