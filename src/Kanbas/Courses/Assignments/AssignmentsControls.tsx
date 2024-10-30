import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { useNavigate  } from "react-router";
import { useParams } from "react-router-dom";
export default function AssignmentsControls() {
    const { cid } = useParams();
    const navigate = useNavigate();
    const newAssignmentRoute = () => {
        navigate(`/Kanbas/Courses/${cid}/Assignments/new`);
    }
    return (
        <div id="wd-assignments-controls" className="text-nowrap">
  
            <CiSearch />
            <input placeholder="Search..." type="text" id="wd-assignments-search-btn" 
    className="css-1mtgjqq-textInput" />
   


  <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end" onClick={(newAssignmentRoute)}>
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment</button>

        <button id="wd-assignments-group-btn" className="btn btn-lg btn-secondary me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
     </button>
    

        </div>
    )
}