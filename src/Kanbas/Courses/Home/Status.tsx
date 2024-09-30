import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { FaCalendarCheck } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import { IoIosNotifications } from "react-icons/io";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "300px" }}>
      <h2>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </button>
        </div>
        <div className="w-50">
          <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish </button>
        </div>
      </div><br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </button>
      {/* Complete the rest of the buttons */}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <SiSimpleanalytics className="me-2 fs-5" /> View Course Stream </button>

        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <SiSimpleanalytics className="me-2 fs-5" /> New Analytics </button>

        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaCalendarCheck className="me-2 fs-5" /> View Course Calendar </button>

        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <IoIosNotifications className="me-2 fs-5" /> View Course Notifications </button>

    </div>
);}

  