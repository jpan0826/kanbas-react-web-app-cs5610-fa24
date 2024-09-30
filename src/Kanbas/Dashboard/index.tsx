import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
      <div className="row row-cols-1 row-cols-md-5 g-4">

        <div className="wd-dashboard-course col" style={{ width: "300px"}}>
        <div className="card rounded-3 overflow-hidden">
        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">

          <img src="/images/babyblue.jpg" width="100%" height={160}/>
          <div className="card-body">
          <h5 className="wd-dashboard-course-title card-title">
          CS5010 Programming Design Paradigm
          </h5>
            <p className="wd-dashboard-course-title card-text">
              Programming Design Paradigm
            </p>
            <button className="btn btn-primary"> Go </button>
          </div>
          </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">

          <img src="/images/darkblue.jpg" width="100%" height={160}/>
          <div className="card-body">
          <h5 className="wd-dashboard-course-title card-title">
          CS5800 Algorithms
          </h5>
            <p className="wd-dashboard-course-title card-text">
            Algorithms
            </p>
            <button className="btn btn-primary"> Go </button>
          </div>
          </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">

          <img src="/images/oxfordblue.jpg" width="100%" height={160}/>
          <div className="card-body">
          <h5 className="wd-dashboard-course-title card-title">
          CS5400 Principles of Programming language
          </h5>
            <p className="wd-dashboard-course-title card-text">
            Principles of Programming language
            </p>
            <button className="btn btn-primary"> Go </button>
          </div>
          </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">

          <img src="/images/royalblue.jpg" width="100%" height={160}/>
          <div className="card-body">
          <h5 className="wd-dashboard-course-title card-title">
          CS5500 Foundations of Software Engineering
          </h5>
            <p className="wd-dashboard-course-title card-text">
            Foundations of Software Engineering
            </p>
            <button className="btn btn-primary"> Go </button>
          </div>
          </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">

          <img src="/images/sapphireblue.jpg" width="100%" height={160}/>
          <div className="card-body">
          <h5 className="wd-dashboard-course-title card-title">
          CS5520 Mobile Application Development
          </h5>
            <p className="wd-dashboard-course-title card-text">
            Mobile Application Development
            </p>
            <button className="btn btn-primary"> Go </button>
          </div>
          </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">

          <img src="/images/steelblue.jpg" width="100%" height={160}/>
          <div className="card-body">
          <h5 className="wd-dashboard-course-title card-title">
          CS5600 Computer Systems
          </h5>
            <p className="wd-dashboard-course-title card-text">
            Computer Systems
            </p>
            <button className="btn btn-primary"> Go </button>
          </div>
          </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">

          <img src="/images/tiffanyblue.jpg" width="100%" height={160}/>
          <div className="card-body">
          <h5 className="wd-dashboard-course-title card-title">
          CS5610 Web Development
          </h5>
            <p className="wd-dashboard-course-title card-text">
            Web Development
            </p>
            <button className="btn btn-primary"> Go </button>
          </div>
          </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">

          <img src="/images/babyblue.jpg" width="100%" height={160}/>
          <div className="card-body">
          <h5 className="wd-dashboard-course-title card-title">
          CS5370 Operating System
          </h5>
            <p className="wd-dashboard-course-title card-text">
            CS370 Operating System
            </p>
            <button className="btn btn-primary"> Go </button>
          </div>
          </Link>
          </div>
        </div>

    </div>


      </div>
    </div>
  );
}
