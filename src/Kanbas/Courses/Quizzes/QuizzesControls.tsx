// search bar
// red +Quiz button
// grey vertical 3 dots button
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function QuizzesControls({ searchTerm, editSearchTerm }: {
    searchTerm: any,
    editSearchTerm: (term: string) => void
}) {
    const { cid } = useParams();
    const navigate = useNavigate();
    const newQuizRoute = () => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/new/Edit/`);
    }
    const { currentUser } = useSelector((state: any) => state.accountReducer);


    return (
        <div id="wd-quizzes-controls" className="text-nowrap">

            <input placeholder="Search for Quiz" type="text" id="wd-quizzes-search-btn" className="css-1mtgjqq-textInput float-start"
                value={searchTerm}
                onChange={(e) => editSearchTerm(e.target.value)}
            />

            {
                currentUser.role === 'FACULTY' &&
                <div>
                    <button id="wd-add-quiz-btn" className="btn btn-lg btn-danger me-1 float-end" onClick={(newQuizRoute)}>
                        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                        Quiz
                    </button>

                    <button id="wd-quizzes-context-menu-btn" className="btn btn-lg btn-secondary me-1 float-end">
                        <IoEllipsisVertical />
                    </button>
                </div>
            }


        </div>
    );
}