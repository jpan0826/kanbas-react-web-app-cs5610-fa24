import { Navigate, Route , Routes, useParams, useNavigate } from "react-router";
import EditorNavigation from "./EditorNavigation";
import DetailsEditor from "./DetailsEditor";
import QuestionsEditor from "./QuestionsEditor";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import * as coursesClient from '../client';
import * as quizzesClient from "./client";
import { addQuiz, editQuiz } from "./reducer";
import * as client from "./client";

export default function Editor() {
    const { cid, qid } = useParams();
    const addNewQuiz = qid === 'new';
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);

    const defaultQuizDetails = {
        "title": "",
        "description": "",
        "assignee": "",
        "type": "Graded Quiz",
        "points": 0,
        "group": "",
        "shuffle": true,
        "time_limit_boolean": false,
        "time_limit": 20,
        "multiple_attempts": 1,
        "show_correct_answers": false,
        "access_code": "",
        "one_question": "yes",
        "webcam": "no",
        "lock": "no",
        "due_date": "",
        "available_date": "",
        "until_date": "",
        "published":false,
        "questions": []
    }
    // local state
    const [quiz, setQuiz] = useState(defaultQuizDetails);
    

    const fetchQuiz = async () => {
        if (addNewQuiz) {
            setQuiz(defaultQuizDetails);
        }
        else if (qid) {
            const fetchedQuiz = await client.findQuiz(qid)
            setQuiz(fetchedQuiz);
        }
        
    }
    useEffect(() => {
        fetchQuiz();
    }, [cid, qid]);

    const saveQuiz = async (quiz: any) => {
        let detailsPath = '';
        if (!cid) return;

        if (addNewQuiz) {
            const newQuiz = await coursesClient.createQuizForCourse(cid, quiz)
            dispatch(addQuiz(newQuiz));
            detailsPath = `/Kanbas/Courses/${cid}/Quizzes/${newQuiz._id}/Details`
        } else {
            const newQuiz = await quizzesClient.updateQuiz(quiz);
            console.log(newQuiz._id === undefined)
            dispatch(editQuiz(quiz));
            detailsPath = `/Kanbas/Courses/${cid}/Quizzes/${quiz._id}/Details`
        }
        navigate(detailsPath);
    };

    return (
        <div>
            <EditorNavigation />
            <div className="flex-fill">
                <Routes>
                    <Route path="/" element={<Navigate to="details" />} />
                    <Route path="/details" element={<DetailsEditor quiz={quiz} setQuiz={setQuiz} saveQuiz={saveQuiz} />} />
                    <Route path="/questions" element={<QuestionsEditor quiz={quiz} setQuiz={setQuiz}/>} />
                </Routes>
            </div>
        </div>

    );
}