import { useParams } from "react-router";
import * as db from "../../Database"
import AssignmentsControls from "./AssignmentsControls";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";

import { BsGripVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAssignments, deleteAssignment } from "./reducer";
import { FaRegPenToSquare } from "react-icons/fa6";

import { useEffect } from "react";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";

export default function Assignments() {
    const { cid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const dispatch = useDispatch();
    const fetchAssignments = async () => {
        const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignments));
    };
    useEffect(() => {
        fetchAssignments();
    }, [cid]);

    const confirmAndDelete = async (assignmentId : string) => {
        const text = `Do you want to delete assignment ${assignmentId}?\nEither OK or Cancel.`;
        if (window.confirm(text) == true) {
            await assignmentsClient.deleteAssignment(assignmentId);
            dispatch(deleteAssignment(assignmentId));
        }
    }
    return (
        <div>
            <AssignmentsControls /><br /><br /><br /><br />
            <ul id="wd-assignments-all" className="list-group rounded-0">
                <li className="wd-assignments-all list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        <select className="select-button bg-secondary">
                            <option></option>
                        </select>
                        Assignments
                        <AssignmentsControlButtons />
                    </div>
                    <ul className="wd-assignments list-group rounded-0">
                        {assignments
                            .map((assignment: any) => (
                                <li key={assignment._id} className="wd-assignment list-group-item p03 ps-1">
                                    <div className="d-flex flex-row">
                                        <div className="p-2">
                                            <BsGripVertical className="me-2 fs-3" /></div>
                                        <div className="p-2"><FaRegPenToSquare color="green" /></div>

                                        <div className="p-2"><div id="wd-assignment-details">
                                            <h5><strong><Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-link text-decoration-none link-dark">

                                                {assignment.title}</Link></strong></h5>
                                            <div className="row">
                                                <div className="col-md-auto"><h6><span className="text-danger">Multiple Modules </span>| </h6></div>
                                                
                                                <div className="col-md-auto"><h6><strong>Not available until</strong> {assignment.available_date} |</h6></div>
                                                <div className="col-md-auto"><h6><strong>Due</strong> {assignment.due_date} |</h6></div>
                                                <div className="col-md-auto"><h6>{assignment.points}</h6></div>
                                            </div>
                                        </div></div>

                                        <div className="p-2 ms-auto fixed-width">
                                        <AssignmentControlButtons
                                            assignmentId={assignment._id}
                                            deleteAssignment={(assignmentId) => confirmAndDelete(assignmentId) } /></div>

                                    </div>
                                </li>
                            ))}
                    </ul>
                </li>
            </ul>

        </div>


    );
}
