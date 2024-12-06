import { Navigate, Route, Routes } from "react-router";
import EditorNavigation from "./EditorNavigation";
import { FaPlus } from "react-icons/fa6";

import DetailsEditor from "./DetailsEditor";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { stringify } from "querystring";
import TrueFalseEditor from "./TrueFalseEditor";
import FillBlankEditor from "./FillBlankEditor";
import MultipleChoiceEditor from "./MultipleChoiceEditor";
import QuestionEditor from "./QuestionEditor";
import * as client from "./client"
import QuizHistory from "./QuizHistory";

export default function Quiz() {
    const { cid, qid } = useParams();
    //find questions from Redux given the quiz id
    const dispatch = useDispatch();
    const [score, setScore] = useState<any>();
    const [quiz, setQuiz] = useState<any>();
    const [time, setTime] = useState<Date>();
    const [index, setIndex] = useState<number>(0)
    const [userAnswers, setUserAnswers] = useState<string[]>([]);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [viewOnly, setViewOnly] = useState<boolean>(false);
    const attemptsAllowed = 2
    const [started, setStarted] = useState<boolean>(false);

    const defaultScore = {
        "points": 10,
        "startDate": "12/05/2024 9:50",
        "endDate": "12/05/2024 10:00",
        "attempts": 1,
        "answers": ["yes", "True", "c", "200"],
        "status": "COMPLETED"
    }

    //fetch scores from the user
    const fetchScore = async () => {
        const fetchedScore = defaultScore;
        if (fetchedScore) {
            setScore(fetchedScore)
            if (fetchedScore.status === 'IN_PROGRESS') {
                setStarted(true)
            }
        }
    }

    const submitQuiz = async () => {
        const userScore = userAnswers
        const scoreToSubmit = { ...score }
        const userQuizScore = userAnswers
        .map((answer: any, _i: number) => 
            quiz.questions[_i].answeer.includes(answer) ? quiz.questions[_i] : 0)
        .reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0);
        scoreToSubmit.points = userQuizScore
        scoreToSubmit.endDate = Date.now()
        scoreToSubmit.attempts = scoreToSubmit.attempts + 1
        scoreToSubmit.status = "COMPLETED"
        //call client to submit
    }

    const calculateQuizScore = (quiz: any) => {
        console.log(quiz)
        const sum = quiz.questions.map((question: any) => question.points).reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0);
        return sum
    }

    const fetchQuiz = async () => {
        if (qid) {
            const fetchedQuiz = await client.findQuiz(qid)
            setQuiz(fetchedQuiz);
            //create a user answer array of the size of the questions
            const array: string[] = new Array(fetchedQuiz.questions.length)
            setUserAnswers(array)
        }
    }

    useEffect(() => {
        // const fetchedQuiz = quizzes.find((quiz: any) => (quiz._id === qid));
        fetchQuiz()
        fetchScore()
    }, [qid, cid]);

    const setUserAnswer = (questionNumber: number, userAnswer: string) => {
        if (viewOnly) return
        const answers = [...userAnswers]
        answers[questionNumber] = userAnswer
        setUserAnswers(answers)
        setTime(new Date())
    }

    const renderMultipleChoice = (question: any) => {
        return (
            <div>
                <h4 className="mb-3">{question.question}</h4>
                {question.choices.map(((choice: string, i: number) => {
                    return (
                        <div key={i} className="form-check mb-3">
                            <input
                                type="radio"
                                className="form-check-input"
                                id={`radio-${choice}`}
                                name="editableRadio"
                                value={choice}
                                checked={userAnswers[index] == choice}
                                onChange={(e) => setUserAnswer(index, e.target.value)}
                            />
                            {choice}
                        </div>
                    )
                }))}
            </div>
        )
    }

    const renderFillInBank = (question: any) => {
        return (
            <div>
                <div dangerouslySetInnerHTML={{ __html: question.question }} />
                <input placeholder="Fill in the blank" type="text" id="wd-quizzes-search-btn"
                    value={userAnswers[index]}
                    onChange={(e) => setUserAnswer(index, e.target.value)}
                />
            </div>
        )
    }

    const renderTrueOrFalse = (question: any) => {
        return (
            <div>
                <div dangerouslySetInnerHTML={{ __html: question.question }} />
                <div className="form-check">
                    <input
                        type="radio"
                        className="form-check-input"
                        id="trueOption"
                        name="trueFalse"
                        value="True"
                        checked={userAnswers[index] === "True"}
                        onChange={(e) => setUserAnswer(index, "True")}
                    />
                    <label className="form-check-label" htmlFor="trueOption">
                        True
                    </label>
                </div>
                <div className="form-check">
                    <input
                        type="radio"
                        className="form-check-input"
                        id="falseOption"
                        name="trueFalse"
                        value="False"
                        checked={userAnswers[index] === "False"}
                        onChange={(e) => setUserAnswer(index, "False")}
                    />
                    <label className="form-check-label" htmlFor="falseOption">
                        False
                    </label>
                </div>

            </div>
        )
    }

    const renderQuestion = () => {
        const question = quiz.questions && quiz.questions.find(
            (question: any, i: number) => i === index)
        if (question) {
            return (
                <div>
                    <div className="card mb-4" style={{ minHeight: '300px' }}>
                        <div className="card-header">
                            <strong>{question.title}</strong>
                            <span className="float-end">{question.points} pts</span>
                        </div>
                        <div className="card-body">
                            {
                                question.type === 'multipleChoice' ?
                                    renderMultipleChoice(question) :
                                    question.type === 'fillBlank' ?
                                        renderFillInBank(question) :
                                        renderTrueOrFalse(question)
                            }
                        </div>
                    </div>
                    {/* Navigation Buttons */}
                    <div className="">
                        {index > 0 && <button className="btn btn-secondary float-start" onClick={() => setIndex(index - 1)}>Back</button>}
                        {index < quiz.questions.length - 1 && <button className="btn btn-primary float-end" onClick={() => setIndex(index + 1)}>Next</button>}
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
            {!quiz ? <p>Loading</p> :
                <div>
                    <div className="container mt-4">
                        {/* Quiz Title */}
                        <h1 className="mb-3">{quiz.title}</h1>

                        {/* Details Section */}
                        <div className="mb-4">
                            <p>
                                <strong>Due:</strong> {quiz.due_date}
                            </p>
                            <p>
                                <strong>Available:</strong> {quiz.available_date}
                            </p>
                            <p>
                                <strong>Points:</strong> {calculateQuizScore(quiz)}
                            </p>
                            <p>
                                <strong>Questions:</strong> {quiz.questions.length}
                            </p>
                            <p>
                                <strong>Time Limit:</strong> {quiz.time_limit} minutes
                            </p>
                        </div>
                        {
                            score && !started && <QuizHistory quiz={quiz} score={score} />
                            // <div>
                            //     <h2 className="mt-4">Attempt History</h2>
                            //     <table className="table table-bordered mt-3">
                            //         <thead className="thead-light">
                            //             <tr>
                            //                 <th>Time</th>
                            //                 <th>Score</th>
                            //             </tr>
                            //         </thead>
                            //         <tbody>
                            //             <tr>
                            //                 <td>18 minutes</td>
                            //                 <td>{score.points} out of {calculateQuizScore(quiz)}</td>
                            //             </tr>
                            //         </tbody>
                            //     </table>
                            // </div>
                        }
                    </div>
                    <div className="container mt-4">

                        {/* Main Content */}
                        {!started &&
                            <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-start" onClick={() => setStarted(true)}>
                                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                                Start Quiz</button>
                        }
                        {
                            started &&
                            <div>
                                {/* Title Section */}
                                <div className="row">
                                    <div className="col-12">
                                        {currentUser.role === 'FACULTY' && <p className="text-danger">This is a preview of the published version of the quiz</p>
                                        }
                                    </div>
                                </div>
                                <div className="row">
                                    {/* Question Section */}

                                    <div className="col-md-8">
                                        {
                                            quiz.questions && renderQuestion()
                                        }
                                    </div>
                                    {/* Sidebar for Questions */}
                                    <div className="col-md-4">
                                        <div className="card">
                                            <div className="card-header">
                                                <strong>Questions</strong>
                                            </div>
                                            <ul className="list-group list-group-flush">
                                                {
                                                    quiz.questions && quiz.questions.map((question: any, index: number) => {
                                                        return (
                                                            <div key={question._id}>
                                                                <button className={userAnswers[index] !== undefined ? "list-group-item border-0 text-primary text-success" : "list-group-item border-0 text-primary text-danger"} onClick={() => setIndex(index)}>
                                                                    <li >Question {index + 1}</li>
                                                                </button>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        <div className="d-flex justfiy-content-center" >
                                            {currentUser.role === "FACULTY" ? <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/Edit/Details`}><button>Keep Editting This Quiz</button></Link> : <></>}
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                {!viewOnly &&
                                    <div className="row mt-4">
                                        {
                                            time && <div className="col-md-8"><p>Quiz saved at {`${time.getHours()}:${time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()}:${time.getSeconds()}`}</p></div>
                                        }
                                        <div className="col-md-8">
                                          <Link to={`/Kanbas/Courses/${cid}/Quizzes`}><button className="btn btn-success w-100" onClick={submitQuiz}>Submit Quiz</button></Link>
                                        </div>
                                    </div>
                                }
                            </div>
                        }

                    </div>
                </div>
            }
        </div>
    );

}