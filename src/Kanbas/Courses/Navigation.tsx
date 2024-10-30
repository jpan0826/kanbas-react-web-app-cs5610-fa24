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
