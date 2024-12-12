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
import { FaArrowAltCircleRight } from "react-icons/fa";
import { divide } from "../../../Labs/Lab3/Math";
import { RxCross1 } from "react-icons/rx";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function QuizHistory({ quiz, score }: { quiz: any, score: any }) {
    const userAnswers = score.answers

    const calculateQuizScore = (quiz: any) => {
        const sum = quiz.questions.map((question: any) => question.points).reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0);
        return sum
    }

    const calculateTimeTaken = () => {
        if (!score.endDate) return quiz["time_limit"]
        const end = new Date(score.endDate)
        const start = new Date(score.startDate)
        // Calculate the difference in milliseconds
        const diffInMilliseconds: number = end.getTime() - start.getTime();
        return Math.ceil(diffInMilliseconds / 1000 / 60);
    }

    const renderMultipleChoice = (question: any, questionIndex: number) => {
        return (
            <div>
                <h4 className="mb-3">{question.question}</h4>
                <div className="container mt-4">
                    <ul className="list-group">
                        {question.choices.map(((choice: string, i: number) => {
                            return (


                                <li key={`${choice}-${i}`} className="list-group-item border d-flex justify-content-start">
                                    {
                                        userAnswers[questionIndex] === choice ?
                                            <div className="d-inline-flex align-items-center bg-light text-dark p-2 rounded">
                                                {/* React icon */}
                                                <FaArrowAltCircleRight></FaArrowAltCircleRight>
                                                {/* Text */}
                                                <span>Your Answer</span>
                                            </div>
                                            : <div />
                                    }
                                    {
                                        userAnswers[questionIndex] === choice ?
                                            choice === quiz.questions[questionIndex].answers[0] ?
                                                <strong className="text-success">{choice} <IoIosCheckmarkCircle color="green"/></strong> :
                                                <strong className="text-danger"> {choice}
                                                    <RxCross1 color="red" />
                                                </strong>
                                            :
                                            <strong>{choice}</strong>
                                    }
                                </li>

                            )
                        }))}
                    </ul>
                </div>
            </div>
        )
    }

    const renderFillInBank = (question: any, questionIndex: number) => {
        return (
            <div>
                <div dangerouslySetInnerHTML={{ __html: question.question }} />
                <div className="d-inline-flex align-items-center bg-light text-dark p-2 rounded">
                    {userAnswers[questionIndex] && userAnswers[questionIndex] !== "" ?
                        <div>
                            <FaArrowAltCircleRight></FaArrowAltCircleRight>
                            {/* Text */}
                            <span>Your Answer</span>
                            {userAnswers[questionIndex] === quiz.questions[questionIndex].answers[0] ?
                                <strong className="text-success border border-light p-2">{userAnswers[questionIndex]} <IoIosCheckmarkCircle color="green"/></strong>
                                :
                                <strong className="text-danger border border-light p-2">{userAnswers[questionIndex]}
                                    <RxCross1 color="red" />
                                </strong>

                            }
                        </div>
                        : <></>
                    }
                </div>
            </div>
        )
    }

    const renderTrueOrFalse = (question: any, questionIndex: number) => {
        return (
            <div>
                <div dangerouslySetInnerHTML={{ __html: question.question }} />
                <div className="container mt-4">
                    <ul className="list-group">
                        <li className="list-group-item text-center d-flex justify-content-start" >
                            {
                                userAnswers[questionIndex] === 'True' ?

                                    <div className="d-inline-flex align-items-center bg-light text-dark p-2 rounded">
                                        {/* React icon */}
                                        <FaArrowAltCircleRight></FaArrowAltCircleRight>
                                        {/* Text */}
                                        <span>Your Answer</span>
                                    </div> : <></>
                            }
                            {
                                userAnswers[questionIndex] === 'True' ?
                                    'True' === quiz.questions[questionIndex].answers[0] ?
                                        <strong className="text-success">True <IoIosCheckmarkCircle color="green"/></strong> :
                                        <strong className="text-danger"> True
                                            <RxCross1 color="red" />
                                        </strong>
                                    :
                                    <strong>True</strong>
                            }
                        </li>
                        <li className="list-group-item text-center d-flex justify-content-start" >
                            {
                                userAnswers[questionIndex] === 'False' ?

                                    <div className="d-flex text-center justify-content-start border">

                                        <FaArrowAltCircleRight></FaArrowAltCircleRight>
                                        <p>Your answer</p>
                                    </div>
                                    : <div />
                            }
                            {
                                userAnswers[questionIndex] === 'False' ?
                                    'False' === quiz.questions[questionIndex].answers[0] ?
                                        <strong className="text-success">False <IoIosCheckmarkCircle color="green"/></strong> :
                                        <strong className="text-danger"> False
                                            <RxCross1 color="red" />
                                        </strong>
                                    :
                                    <strong>False</strong>
                            }                        </li>
                    </ul>
                </div>
            </div>
        )
    }

    const renderQuestion = () => {
        return quiz.questions && quiz.questions.map((question: any, index: number) => {
            return (
                <div key={`${question.title}-${index}`}>
                    <div className="card mb-4" style={{ minHeight: '300px' }}>
                        <div className="card-header">
                            <strong>{question.title}</strong>
                            <span className="float-end">{question.points} pts</span>
                        </div>
                        <div className="card-body">
                            {
                                question.type === 'multipleChoice' ?
                                    renderMultipleChoice(question, index) :
                                    question.type === 'fillBlank' ?
                                        renderFillInBank(question, index) :
                                        renderTrueOrFalse(question, index)
                            }
                        </div>
                    </div>
                </div>
            )
        })
    }


    return (
        <div>
            {!quiz ? <p>Loading</p> :
                <div>
                    <div className="container mt-4">
                        {
                            score &&
                            <div>
                                <h2 className="mt-4">Attempt History</h2>
                                <table className="table table-bordered mt-3">
                                    <thead className="thead-light">
                                        <tr>
                                            <th>Time</th>
                                            <th>Score</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{calculateTimeTaken()} minutes</td>
                                            <td>{score.points} out of {calculateQuizScore(quiz)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        }
                    </div>
                    <div className="container mt-4">
                        {/* Main Content */}
                        <div className="row">
                            {/* Question Section */}

                            <div className="col-md-8">
                                {
                                    quiz.questions && renderQuestion()
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );

}