import { useParams } from "react-router";
import QuizzesControls from "./QuizzesControls";
import QuizControlButtons from "./QuizControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { IoRocketOutline } from "react-icons/io5";

import * as coursesClient from "../client";
import { useSelector, useDispatch } from "react-redux";
import { setQuizzes, deleteQuiz } from "./reducer";
import { useEffect } from "react";

export default function Quizzes() {
    const { cid } = useParams();
    const { quizzes } = useSelector((state:any) => state.quizzesReducer);
    const dispatch = useDispatch();
    const fetchQuizzes = async () => {
        const quizzes = await coursesClient.findQuizzesForCourse(cid as string);
        dispatch(setQuizzes(quizzes));
    }
    useEffect(() => {
        fetchQuizzes();
    }, [cid]);

    return (
        <div>

            <QuizzesControls /> <br /><br /><br /><br />


            <ul id="wd-quizzes-all" className="list-group rounded-0">
                <li className="wd-quizzes-all list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <select className="select-button bg-secondary">
                            <option></option>
                        </select>
                        Assignment Quizzes
                    </div>
                
                <ul className="wd-quizzes list-group rounded-0">
                   
                    <li>
                        <div className="d-flex flex-row">
                            <div className="p-2">
                                <IoRocketOutline color="green" />
                            </div>



                            <div className="p-2 ms-auto fixed-with">
                                <QuizControlButtons />
                            </div>
                        </div>
                    </li>
                </ul>
                </li>
            </ul>

        </div>
    );
}