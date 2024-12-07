import { useParams } from "react-router";
import QuizzesControls from "./QuizzesControls";
import QuizControlButtons from "./QuizControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { IoRocketOutline } from "react-icons/io5";

import * as coursesClient from "../client";
import { useSelector, useDispatch } from "react-redux";
import { setQuizzes, deleteQuiz } from "./reducer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as quizzesClient from "./client";

export default function Quizzes() {
    const { cid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const dispatch = useDispatch();
    const fetchQuizzes = async () => {
        const quizzes = await coursesClient.findQuizzesForCourse(cid as string);
        dispatch(setQuizzes(quizzes));
    }
    useEffect(() => {
        fetchQuizzes();
    }, [cid]);

    const removeQuiz = async (quizId: string) => {
        await quizzesClient.deleteQuiz(quizId);
        dispatch(deleteQuiz(quizId));
    }

    return (
        <div>

            <QuizzesControls searchTerm={searchTerm} editSearchTerm={setSearchTerm} /> <br /><br /><br /><br />
            <ul id="wd-quizzes-all" className="list-group rounded-0">
                <li className="wd-quizzes-all list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <select className="select-button bg-secondary">
                            <option></option>
                        </select>
                        Assignment Quizzes
                    </div>

                    <ul className="wd-quizzes list-group rounded-0">
                        {quizzes
                            .filter((quiz: any) => (!searchTerm || searchTerm === "") || quiz.title.toLowerCase().includes(searchTerm.toLowerCase()))
                            .map((quiz: any) => (
                                <li key={quiz._id} className="wd-quiz list-group-item p03 ps-1">
                                    <div className="d-flex flex-row">
                                        <div className="p-2">
                                            <IoRocketOutline color="green" />
                                        </div>

                                        <div className="p-2"><div id="wd-quiz-details">
                                            {
                                                currentUser.role === 'FACULTY' ? 
                                                <h5><strong><Link to={`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}/Details`} className="wd-quiz-link text-decoration-none link-dark">
                                                {quiz.title}</Link></strong></h5>
                                                :
                                                <h5><strong><Link to={`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`} className="wd-quiz-link text-decoration-none link-dark">
                                                {quiz.title}</Link></strong></h5>
                                            }

                                            <div className="row">

                                                <div className="col-md-auto"><h6><strong>Not available until</strong> {quiz.available_date} |</h6></div>
                                                <div className="col-md-auto"><h6><strong>Due</strong> {quiz.due_date} |</h6></div>
                                                <div className="col-md-auto"><h6>{quiz.points}</h6></div>
                                            </div>
                                        </div></div>
                                        <div className="p-2 ms-auto fixed-with">
                                            <QuizControlButtons quizId={quiz._id} deleteQuiz={removeQuiz} />
                                        </div>
                                    </div>
                                </li>
                            ))}

                    </ul>
                </li>
            </ul>

        </div>
    );
}