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

export default function Quiz() {
    const { cid, qid } = useParams();
    //find questions from Redux given the quiz id
    const dispatch = useDispatch();
    const [score, setScore] = useState<any>();
    const [quiz, setQuiz] = useState<any>({});
    const [time, setTime] = useState<Date>();
    const [index, setIndex] = useState<number>(0)
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const [userAnswers, setUserAnswers] = useState<string[]>([]);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [viewOnly, setViewOnly] = useState<boolean>(false);

    //fetch scores from the user
    const fetchSores = async () => {
    }

    const submitQuiz = async () => {

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
                        <div key={index} className="form-check mb-3">
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
                <h4>{question.question}</h4>
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
                <h4 className="mb-3">{question.question}</h4>
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
                <div className="container mt-4">
                    {/* Title Section */}
                    <div className="row">
                        <div className="col-12">
                            <h1>{quiz.title}</h1>
                            {currentUser.role === 'FACULTY' && <p className="text-danger">This is a preview of the published version of the quiz</p>
                            }
                        </div>
                    </div>

                    {/* Main Content */}
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
                        </div>
                    </div>

                    {/* Submit Button */}
                    {!viewOnly &&
                        <div className="row mt-4">
                            {
                                time && <div className="col-md-8"><p>Quiz saved at {`${time.getHours()}:${time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()}:${time.getSeconds()}`}</p></div>
                            }
                            <div className="col-md-8">
                                <button className="btn btn-success w-100" onClick={submitQuiz}>Submit Quiz</button>
                            </div>
                        </div>
                    }

                </div>
            }
        </div>
    );

}