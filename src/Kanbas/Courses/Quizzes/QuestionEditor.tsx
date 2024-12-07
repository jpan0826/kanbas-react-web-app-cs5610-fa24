import { Navigate, Route, Routes } from "react-router";
import EditorNavigation from "./EditorNavigation";
import DetailsEditor from "./DetailsEditor";
import QuestionsEditor from "./QuestionsEditor";
import { BsGripVertical } from "react-icons/bs";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import TrueFalseEditor from "./TrueFalseEditor";
import FillBlankEditor from "./FillBlankEditor";
import MultipleChoiceEditor from "./MultipleChoiceEditor";


export default function QuestionEditor({ question, editQuestion }: { question: any, editQuestion: (q: any) => void; }) {
    const [done, setDone] = useState(true);
    const [thisQuestion, setThisQuestion] = useState<any>(question);
    const cancel = () => {
        setEditing()
        setThisQuestion(question)
    }

    const setEditing = () => {
        editQuestion(
            {
                ...question,
                editing: !question.editing
            }
        )
    }

    const updateQuestion = () => {
        editQuestion(
            thisQuestion
        )
    }
    const startEditing = () => {
        setEditing()
    }
    return (
        <div>
            {
                question.editing ?
                    (
                        <div className="container mt-4">
                            <div className="mb-3">
                                <label htmlFor="question" className="form-label">
                                    Question:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    value={thisQuestion.title}
                                    onChange={(e) => setThisQuestion(
                                        {
                                            ...thisQuestion,
                                            title: e.target.value
                                        }
                                    )}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="points" className="form-label">
                                    Points:
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="points"
                                    value={thisQuestion.points}
                                    onChange={(e) => setThisQuestion({...thisQuestion, points: e.target.value})}
                                />
                            </div>
                            <div id="wd-quiz-type" className="mb-3">
                                <label htmlFor="wd-select-quiz-type" className="col"> Quiz Type
                                    <select id="wd-select-quiz-type" className="mb-3" defaultValue={thisQuestion.type} onChange={(e) => setThisQuestion({ ...thisQuestion, type: e.target.value })}>
                                        <option value="trueFalse">True/False</option>
                                        <option value="fillBlank">Fill in the Blank</option>
                                        <option value="multipleChoice">Multiple Choice</option>
                                    </select>
                                </label>
                            </div>

                            <li className="wd-assignment list-group-item p03 ps-1">
                                {
                                    thisQuestion.type === 'trueFalse' ?
                                        <TrueFalseEditor question={thisQuestion} editQuestion={setThisQuestion} />
                                        :
                                        thisQuestion.type === 'fillBlank' ?
                                            <FillBlankEditor question={thisQuestion} editQuestion={setThisQuestion} />
                                            :
                                            <MultipleChoiceEditor question={thisQuestion} editQuestion={setThisQuestion} />
                                }
                            </li>

                            <div className="p-2">
                                <button id="wd-add-assignment-btn" className="btn btn-lg btn-secondary me-1 float-end" onClick={cancel}>
                                    Cancel</button>
                                <button type="submit" className="btn btn-lg btn-danger" onClick={updateQuestion}>Update Question</button>
                            </div>
                        </div>
                    ) : (
                        <div className="d-flex flex-row">
                            <div className="d-flex flex-row">
                                <div className="p-2">
                                    <BsGripVertical className="me-2 fs-3" /></div>
                                <div className="p-2"><FaRegPenToSquare color="green" /></div>
                                <div className="p-2"><div id="wd-assignment-details">
                                    <h5><strong>{question.title}</strong></h5>
                                    <div className="row">
                                        <div className="col-md-auto"><h6><span className="text-danger"></span>Question Type: {question.type} </h6></div>
                                        <div className="col-md-auto"><h6> Points: {question.points}</h6></div>
                                    </div>
                                </div>
                                </div>
                            </div>                            <div className="d-flex justify-content-end">
                                <button type="submit" className="btn btn-danger" onClick={startEditing}>Edit</button>
                            </div>
                        </div>
                    )

            }
        </div>
    )
}