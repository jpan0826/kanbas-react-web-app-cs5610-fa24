import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as db from "../Database";
import { useDispatch, useSelector } from "react-redux";
import { current } from "@reduxjs/toolkit";
import { enroll, unenroll } from "../Account/reducer";
export default function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
      courses: any[]; course: any; setCourse: (course: any) => void;
      addNewCourse: () => void; deleteCourse: (course: any) => void;
      updateCourse: () => void;
    }
) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  // const { enrollments } = db;
  const [showAll, setShowAll] = useState(false)
  const { enrollments } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {currentUser.role === 'STUDENT' && (<div>
        <button className="btn btn-primary float-end" id="wd-enrollments-click"
          onClick={() => setShowAll(!showAll)}>
          Enrollments
        </button>
      </div>)}

      {currentUser.role === 'FACULTY' && (<div>
        <h5>New Course
          <button className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={addNewCourse} > Add </button>
          <button className="btn btn-warning float-end me-2"
            onClick={updateCourse} id="wd-update-course-click">
            Update
          </button>

        </h5><br />
        <input defaultValue={course.name} className="form-control mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })} />
        <textarea defaultValue={course.description} className="form-control"
          onChange={(e) => setCourse({ ...course, description: e.target.value })} />
      </div>)}


      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.filter((course) =>
            showAll || enrollments.includes(course._id))
            .map((course) => (
              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link key={course._id} to={`/Kanbas/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                    <img src="/images/tiffanyblue.jpg" width="100%" height={160} />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        {course.name} </h5>
                      <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                        {course.description} </p>
                      <button className="btn btn-primary"> Go </button>


                      {currentUser.role === 'FACULTY' && (
                        <button onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }} className="btn btn-danger float-end"
                          id="wd-delete-course-click">
                          Delete
                        </button>)}
                      {currentUser.role === 'FACULTY' && (<button id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end" >
                        Edit
                      </button>)}

                    </div>
                  </Link>


                  {currentUser.role === 'STUDENT' && (<div>
                    {!enrollments.includes(course._id) && (<button onClick={() => dispatch(enroll(course._id))}
                      className="btn btn-success float-end me-2">
                      Enroll</button>)}
                    {enrollments.includes(course._id) && (<button onClick={() => dispatch(unenroll(course._id))}
                      className="btn btn-danger float-end me-2">
                      Unenroll
                    </button>)}
                  </div>)}



                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
