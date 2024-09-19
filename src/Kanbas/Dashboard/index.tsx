import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/babyblue.jpg" width={200} height={100} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5010/Home">
              CS5010 Programming Design Paradigm
            </Link>
            <p className="wd-dashboard-course-title">
              Programming Design Paradigm
            </p>
            <Link to="/Kanbas/Courses/5010/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/darkblue.jpg" width={200} height={100}/>
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5800/Home">
              CS5800 Algorithms
            </Link>
            <p className="wd-dashboard-course-title">
              Algorithms
            </p>
            <Link to="/Kanbas/Courses/5800/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/oxfordblue.jpg" width={200} height={100}/>
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5400/Home">
              CS5400 Principles of Programming language
            </Link>
            <p className="wd-dashboard-course-title">
              Principles of Programming language
            </p>
            <Link to="/Kanbas/Courses/5400/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/royalblue.jpg" width={200} height={100}/>
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5500/Home">
              CS5500 Foundations of Software Engineering
            </Link>
            <p className="wd-dashboard-course-title">
              Foundations of Software Engineering
            </p>
            <Link to="/Kanbas/Courses/5500/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/sapphireblue.jpg" width={200} height={100}/>
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5520/Home">
              CS5520 Mobile Application Development
            </Link>
            <p className="wd-dashboard-course-title">
              Mobile Application Development
            </p>
            <Link to="/Kanbas/Courses/5520/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/steelblue.jpg" width={200} height={100}/>
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5600/Home">
              CS5600 Computer Systems
            </Link>
            <p className="wd-dashboard-course-title">
              Computer Systems
            </p>
            <Link to="/Kanbas/Courses/5600/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/tiffanyblue.jpg" width={200} height={100}/>
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5610/Home">
              CS5610 Web Development
            </Link>
            <p className="wd-dashboard-course-title">
              Web Development
            </p>
            <Link to="/Kanbas/Courses/5610/Home"> Go </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
