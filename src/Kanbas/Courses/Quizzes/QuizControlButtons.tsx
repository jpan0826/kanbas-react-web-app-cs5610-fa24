// green checkmark
// vertical three dots
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Assignments/GreenCheckmark";
import { useNavigate, useParams } from "react-router";
import * as quizzesClient from "./client";

export default function QuizControlButtons({quizId , deleteQuiz } : { quizId : string, deleteQuiz: (quizId: string)=> void}
) {
    const navigate = useNavigate();
    const { cid } = useParams();
    const editQuizRoute = () => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizId}/Edit`);
    }
    return (
        <div className="float-end">

            <GreenCheckmark />


            <div className="dropdown d-inline me-1 float-end">
                <button id="wd-quiz-context-menu-btn" className="btn btn-lg dropdown" type="button" data-bs-toggle="dropdown">
                    <IoEllipsisVertical className="fs-4" />
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <a id="wd-quiz-publish-button" className="dropdown-item"  >
                            Publish</a>
                    </li>
                    <li>
                        <a id="wd-quiz-edit-button" className="dropdown-item" onClick={(editQuizRoute)}>    
                            Edit</a>
                    </li>
                    <li>
                        <a id="wd-quiz-delete-button" className="dropdown-item" onClick={() => deleteQuiz(quizId)}  >  
                            Delete</a>
                    </li>

                </ul>
            </div>

        </div>
    );
}