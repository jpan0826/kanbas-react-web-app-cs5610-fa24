import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import * as coursesClient from '../client';
import * as quizzesClient from "./client";
import { addQuiz, editQuiz } from "./reducer";
import { stringify } from "querystring";


export default function DetailsEditor() {
    const { cid, qid } = useParams();
    const addNewQuiz = qid === undefined;
    const dispatch = useDispatch();
    const defaultQuizDetails = {
        "title": "",
        "description": "",
        "assignee": "",
        "type": "Graded Quiz",
        "points": "",
        "group": "",
        "shuffle": true,
        "time": "20min",
        "multiple_attempts": false,
        "show_correct_answers": "",
        "access_code": "",
        "one_question": "yes",
        "webcam": "no",
        "lock": "no",
        "due_date": "",
        "available_date": "",
        "until_date": "",
        "questions" : []
    }
    const [quiz, setQuiz] = useState(defaultQuizDetails);

    const fetchQuiz = async () => {
        setQuiz(defaultQuizDetails);
    }
    useEffect(() => {
        fetchQuiz();
    }, [cid, qid]);


    return (
        <div className="container mt-5-sm">

            <div id="wd-quiz-details-editor">
                <p className="row">Current State Value: {JSON.stringify(quiz)}</p>

                {/* title */}
                <div id="wd-quiz-title" className="mb-3">
                    <label htmlFor="quiz-title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="quiz-title"
                        defaultValue={quiz.title} onChange={(e) => setQuiz({ ...quiz, title: e.target.value })} />
                </div>

                {/* desciption */}
                <div id="wd-quiz-description" className="mb-3">
                    <label htmlFor="quiz-description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="quiz-description"
                        defaultValue={quiz.description} onChange={(e) => setQuiz({ ...quiz, description: e.target.value })} />
                </div>
                <div className="container">
                    {/* quiz type */}
                    <div id="wd-quiz-type" className="row mb-3 pt-3">
                        <label htmlFor="wd-select-quiz-type" className="col"> Quiz Type
                            <select id="wd-select-quiz-type" className="mb-3" onChange={(e) => setQuiz({ ...quiz, type: e.target.value })}>
                                <option selected value="graded_quiz">Graded Quiz </option>
                                <option value="practice">Practice Quiz</option>
                                <option value="graded_survey">Graded Survey</option>
                                <option value="ungraded_survey">Ungraded Survey</option>
                            </select>
                        </label>
                    </div>

                    {/* assignment group */}
                    <div id="wd-quiz-assignment-group" className="row mb-3 pt-3">
                        <label htmlFor="wd-select-quiz-assignment-group" className="col"> Assignment Group
                            <select id="wd-select-quiz-assignment-group" className="mb-3" onChange={(e) => setQuiz({ ...quiz, group: e.target.value })}>
                                <option selected value="quizzes">Quizzes </option>
                                <option value="exams">Exams</option>
                                <option value="assignments">Assignments</option>
                                <option value="project">Project</option>
                            </select>
                        </label>
                    </div>

                    {/* options */}
                    <div id="wd-quiz-options">

                        <label><strong>Options</strong></label><br />

                        {/* shuffle answers */}
                        <input type="checkbox" name="check-option" id="wd-quiz-shuffle" checked={quiz.shuffle} onChange={() => setQuiz({ ...quiz, shuffle: !quiz.shuffle })}/>
                        <label htmlFor="wd-quiz-shuffle">Shuffle Answers</label><br />

                        {/* allow multiple attempts */}
                        <input type="checkbox" name="check-option" id="wd-quiz-multiple-attempts" checked={quiz.multiple_attempts} onChange={() => setQuiz({...quiz, multiple_attempts: !quiz.multiple_attempts})} />
                        <label htmlFor="wd-quiz-multiple-attempts">Allow Multiple Attempts</label><br />

                        {/* time limit  */}

                        {/* assign  */}
                        <div id="wd-quiz-assign" className="row">
                            <label htmlFor="assign" className="form-label col text-end">
                                Assign
                            </label>

                            <div className="col">
                                <div className="card border border-light rounded">
                                    
                                </div>
                            </div>
                        </div>

                    </div>


                </div>

            </div>


        </div>
    );
}