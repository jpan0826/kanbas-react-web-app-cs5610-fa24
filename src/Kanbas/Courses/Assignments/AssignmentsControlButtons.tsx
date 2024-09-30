import {BsPlus} from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <button className="wd-rounded-corners-all-around wd-border-grey">
    40% of Total
  </button>

      <BsPlus color="grey"/>
      <IoEllipsisVertical className="fs-4" color="grey"/>
    </div>
);}