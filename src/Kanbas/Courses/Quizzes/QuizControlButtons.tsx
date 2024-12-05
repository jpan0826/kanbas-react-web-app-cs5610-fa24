// green checkmark
// vertical three dots
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Assignments/GreenCheckmark";

export default function QuizControlButtons() {
    return (
        <div className="float-end">
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}