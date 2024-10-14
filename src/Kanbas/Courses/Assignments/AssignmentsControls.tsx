import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
export default function AssignmentsControls() {
    return (
        <div id="wd-assignments-controls" className="text-nowrap">
  
            <CiSearch />
            <input placeholder="Search..." type="text" id="wd-assignments-search-btn" 
    className="css-1mtgjqq-textInput" />
   


  <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment</button>

        <button id="wd-assignments-group-btn" className="btn btn-lg btn-secondary me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
     </button>
    

        </div>
    )
}