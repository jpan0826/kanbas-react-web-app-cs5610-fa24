// import { Link } from "react-router-dom";
// export default function CoursesNavigation() {
//   return (
//     <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
//       <Link id="wd-course-home-link"    to="/Kanbas/Courses/1234/Home" className="list-group-item active border border-0">Home</Link>
//       <Link id="wd-course-modules-link" to="/Kanbas/Courses/1234/Modules" className="list-group-item text-danger border border-0">Modules
//         </Link>
//       <Link id="wd-course-piazza-link"  to="/Kanbas/Courses/1234/Piazza" className="list-group-item text-danger border border-0">Piazza</Link>
//       <Link id="wd-course-zoom-link"    to="/Kanbas/Courses/1234/Zoom" className="list-group-item text-danger border border-0">Zoom</Link>
//       <Link id="wd-course-quizzes-link" to="/Kanbas/Courses/1234/Assignments" className="list-group-item text-danger border border-0">
//           Assignments</Link>
//       <Link id="wd-course-assignments-link" to="/Kanbas/Courses/1234/Quizzes" className="list-group-item text-danger border border-0">Quizzes
//         </Link>
//         <Link id="wd-course-assignments-link" to="/Kanbas/Courses/1234/Grades" className="list-group-item text-danger border border-0">Grades
//         </Link>
//       <Link id="wd-course-people-link"  to="/Kanbas/Courses/:cid/People" className="list-group-item text-danger border border-0">People</Link>
//     </div>
// );}
//   const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
// rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2
import { Link, useLocation, useParams } from "react-router-dom";
export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const { cid } = useParams();
  const links = [{label:"Home", path:`/Kanbas/Courses/${cid}/Home`},
    {label:"Modules", path:`/Kanbas/Courses/${cid}/Modules/`},
    {label:"Piazza", path:`/Kanbas/Courses/${cid}/Piazza`},
    {label:"Zoom", path:`/Kanbas/Courses/${cid}/Zoom`},
    {label:"Assignment", path:`/Kanbas/Courses/${cid}/Assignments`},
    {label:"Quizzes", path:`/Kanbas/Courses/${cid}/Quizzes`},
    {label:"Grades", path:`/Kanbas/Courses/${cid}/Grades`},
    {label:"People", path:`/Kanbas/Courses/${cid}/People`}
  ]
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link key={link.path} to={link.path} className={`list-group-item d-md-block border-0
              ${pathname.includes(link.label) ? "text-black active" : "text-danger"}`}>
          <br />
          {link.label}
        </Link>
      ))}
    </div>
  );
}
