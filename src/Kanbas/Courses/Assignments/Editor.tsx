import { useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAssignment, editAssignment } from "./reducer";
import { useNavigate } from "react-router";
import { useState } from 'react';
import * as coursesClient from '../client';
import * as assignmentsClient from './client';
export default function AssignmentEditor() {
  const { cid , aid } = useParams();
  const addNewAssignment = aid === undefined //assignment id undefined means create new assignment
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const defaultAssignment = db.assignments.find((assignment: any) => assignment._id === aid) || {
    "title": "",
    "course": cid,
    "available_date": "",
    "due_date": "",
    "available_timestamp": "",
    "due_timestamp": "",
    "points": "",
    "assignee": "",
    "description": ""
  };
  // name, description, points, due date, available from date, and available until date.
  const [assignment, setAssignment] = useState(defaultAssignment)
  const save = async (assignment: any) => {
    if (!cid) return;
    
    if (addNewAssignment) {
      const newAssignment = await coursesClient.createAssignmentForCourse(cid, assignment)
      dispatch(addAssignment(newAssignment));
    } else {
      const newAssignment = await assignmentsClient.updateAssignment(assignment);
      dispatch(editAssignment(newAssignment));
    }
  };


  return (
    <div className="container mt-5">
      <div id="wd-assignments-editor">
        {
            <div>
              <div id="wd-assignment-name" className="mb-3">
                <label htmlFor="assignment-name" className="form-label">
                  Assignment Name</label>
                <input type="text" className="form-control"
                  id="assignment-name" 
                  defaultValue={assignment.title} onChange={(e) => setAssignment({...assignment, title: e.target.value})} />
              </div>
              <div id="wd-assignment-instruction" className="mb-3 border rounded p-3">
              <label htmlFor="assignment-instruction" className="form-label">
                Assignment Description</label>
              <input type="text" className="form-control"
                id="assignment-instruction" 
                defaultValue={assignment.description} onChange={(e) => setAssignment({ ...assignment, description: e.target.value })} />

              </div>

              <div className="container">

                <div id="wd-assignment-points" className="row">
                  <label htmlFor="points" className="form-label col text-end">
                    Points
                  </label>
                  <div className="col">
                    <input id="points" type="number" className="form-control" 
                    defaultValue={assignment.points} onChange={(e) => setAssignment({...assignment, points: e.target.value})} />
                  </div>
                </div> <br />


                <div id="wd-assignment-assign" className="row">
                  <label htmlFor="assign" className="form-label col text-end">
                    Assign
                  </label>
                  <div className="col">
                    <div className="card border boder-light rounded">
                      <div className="card-body">
                        <label htmlFor="assign-to" className="form-label">
                          <strong>Assign to</strong>
                        </label>
                        <div className="col">
                          <input type="text" className="form-control" id="assign-to" defaultValue={assignment.assignee} onChange={(e) => setAssignment({...assignment, assignee: e.target.value})} />
                        </div><br />

                        <label htmlFor="due" className="form-label">
                          <strong>Due</strong>
                        </label>
                        <div className="col">
                          <input type="datetime-local" defaultValue={assignment.due_timestamp} className="form-control" id="due"
                          onChange={(e) => setAssignment({ ...assignment, due_timestamp: e.target.value })} />
                        </div><br />

                        <div className="row">
                          <div className="col-sm">
                            <label htmlFor="available-from" className="form-label">
                              <strong>Available from</strong>
                            </label>
                            <div className="col-sm-5">
                              <input type="datetime-local" defaultValue={assignment.available_timestamp} className="form-control" id="due" 
                              onChange={(e) => setAssignment({ ...assignment, available_timestamp: e.target.value })}/>
                            </div>
                          </div>
                          <div className="col-sm">
                            <label htmlFor="available-until" className="form-label">
                              <strong>Until</strong>
                            </label>
                            <div className="col-sm-5">
                              <input type="datetime-local" defaultValue={assignment.due_timestamp} className="form-control" id="due" 
                              onChange={(e) => setAssignment({ ...assignment, available_timestamp: e.target.value })}/>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              </div><br /><br />
              <div className="d-flex justify-content-end">
                <Link to={`/Kanbas/Courses/${cid}/Assignments`}><button type="button" className="btn btn-secondary me-2">Cancel</button></Link>
                <Link to={`/Kanbas/Courses/${cid}/Assignments`}><button type="submit" className="btn btn-danger" onClick={() => save(assignment)}>Save</button></Link>
              </div>

            </div>
        
        }



      </div> <br />


    </div>



  );
}
