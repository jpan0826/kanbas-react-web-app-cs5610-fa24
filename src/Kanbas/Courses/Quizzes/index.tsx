import { useNavigate, useParams } from "react-router";
import QuizzesControls from "./QuizzesControls";
import { BsGripVertical } from "react-icons/bs";
import { IoRocketOutline } from "react-icons/io5";
import * as coursesClient from "../client";
import { useSelector, useDispatch } from "react-redux";
import { setQuizzes, deleteQuiz , editQuiz } from "./reducer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as quizzesClient from "./client";
import { IoEllipsisVertical } from "react-icons/io5";
import { RiForbidLine } from "react-icons/ri";
import GreenCheckmark from "../Assignments/GreenCheckmark";

export default function Quizzes() {
    const { cid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
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

    const publishQuiz = async (quiz: any) => {
        quiz = {...quiz, published: !quiz.published};
        await quizzesClient.updateQuiz(quiz);
        dispatch(editQuiz(quiz));
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
                            .filter((quiz: any) => quiz.published || currentUser.role === "FACULTY")
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

                                        {currentUser.role === "FACULTY" && 
                                        <div className="p-2 ms-auto fixed-with">
                                            
            
                                            <div className="float-end">

                                            <button className="border border-0 btn btn-outline-secondary bg-white " onClick={() => publishQuiz(quiz)} >
                                                {quiz.published ? <GreenCheckmark /> : <RiForbidLine color="red" />}
                                                </button>


                                                <div className="dropdown d-inline me-1 float-end">
                                                    <button id="wd-quiz-context-menu-btn" className="btn btn-lg dropdown" type="button" data-bs-toggle="dropdown">
                                                        <IoEllipsisVertical className="fs-4" />
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a id="wd-quiz-publish-button" className="dropdown-item" onClick = {() => publishQuiz(quiz)}  >
                                                                {quiz.published ? <p>Unpublish</p> : <p>Publish</p> }</a>
                                                        </li>
                                                        <li>
                                                            <a id="wd-quiz-edit-button" className="dropdown-item" onClick={()=>navigate(`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}/Edit`)}>
                                                                Edit</a>
                                                        </li>
                                                        <li>
                                                            <a id="wd-quiz-delete-button" className="dropdown-item" onClick={() => removeQuiz(quiz._id)}  >
                                                                Delete</a>
                                                        </li>

                                                    </ul>
                                                </div>

                                            </div>
                                        </div>}
                                    </div>
                                </li>
                            ))}

                    </ul>
                </li>
            </ul>

        </div>
    );
}