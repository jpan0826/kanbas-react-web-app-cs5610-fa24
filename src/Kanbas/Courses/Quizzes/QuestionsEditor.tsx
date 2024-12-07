import { Navigate, Route, Routes } from "react-router";
import EditorNavigation from "./EditorNavigation";
import { FaPlus } from "react-icons/fa6";

import DetailsEditor from "./DetailsEditor";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import { stringify } from "querystring";
import TrueFalseEditor from "./TrueFalseEditor";
import FillBlankEditor from "./FillBlankEditor";
import MultipleChoiceEditor from "./MultipleChoiceEditor";
import QuestionEditor from "./QuestionEditor";


export default function QuestionsEditor({ quiz, setQuiz }:
    {
        quiz: any,
        setQuiz: (quiz: any) => void
    }) {
    const { cid, qid } = useParams();
    //find questions from Redux given the quiz id
    const dispatch = useDispatch();
    const [questions, setQuestions] = useState<any[]>((quiz && quiz.questions) || []);
    const defaultQuestion = {
        "_id": 1,
        "title": "React/Redux Foundamentals ?",
        "question": "my <b>HTML</b>",
        "type": "multipleChoice",
        "assignee": "",
        "points": 10,
        "group": "",
        "shuffle": true,
        "time": 20,
        "show_correct_answers": "",
        "access_code": "",
        "lock": "no",
        "choices": [],
        "answers" :[],
        "editing" : false
    }

    const saveQuizWithQuestions = async (questions: any[]) => {
        setQuiz({
            ...quiz,
            questions: questions
        })
    }

    const editQuestion = async (question: any) => {
        setQuestions(
            questions.map(
                (q) => q._id === question._id ? question : q
            )
        )
    }

    const addNewQuestion = (question: any) => {
        defaultQuestion._id = Date.now()
        const questiosnToAdd = [...questions, defaultQuestion]
        setQuestions(questiosnToAdd)
    }

    return (
        <div>
            {quiz === undefined ? (<p> No quiz details found, please create the quiz first </p>) : (

                <div>
                    <ul id="wd-assignments-all" className="list-group rounded-0">
                        <li className="wd-assignments-all list-group-item p-0 mb-5 fs-5 border-gray">
                        </li>
                    </ul>
                    <div>
                        <ul className="wd-assignments list-group rounded-0">
                            {questions.map(
                                question => 
                                    <QuestionEditor key={question._id} question={question} editQuestion={editQuestion} />
                            )}
                        </ul>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button id="wd-add-assignment-btn" className="btn btn-lg btn-secondary me-1 float-end" onClick={addNewQuestion}>
                            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                            Add Question</button>
                        <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/Edit/Details`}><button type="submit" className="btn btn-lg btn-danger" onClick={() => saveQuizWithQuestions(questions)}>Save</button></Link>
                    </div>
                </div>

            )}


        </div>
    );
}