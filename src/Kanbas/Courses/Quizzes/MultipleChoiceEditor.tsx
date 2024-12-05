import { Navigate, Route, Routes } from "react-router";
import EditorNavigation from "./EditorNavigation";
import DetailsEditor from "./DetailsEditor";
import QuestionsEditor from "./QuestionsEditor";
import { BsGripVertical } from "react-icons/bs";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import internal from "stream";

export default function MultipleChoiceEditor({ question, editQuestion }: { question: any, editQuestion: (q: any) => void; }) {

    const addNewChoice = () => {
        editQuestion({
            ...question,
            choices: [...question.choices, ""]
        })
    }
    return (
        <div className="container mt-4">
            <p className="mb-3">Enter your question and multiple answers, then select one correct answer</p>
            <h4 className="mb-3">Question:</h4>
            <div className="form-group">
                <textarea
                    className="form-control"
                    id="textEditor"
                    placeholder="Enter question here..."
                    value={question.question}
                    onChange={(e) => editQuestion({ ...question, question: e.target.value })}></textarea>
            </div>
            <h4 className="mb-3">Answers</h4>
            {
                question.choices.map((choice: any, index: number) => {
                        return (
                            <div key={index} className="form-check mb-3">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    id={`radio-${choice}`}
                                    name="editableRadio"
                                    value={choice}
                                    checked={question.answers[0] == index}
                                    onChange={(e) => editQuestion(
                                        { ...question, answers: [index]}
                                    )}
                                />
                                <label className="form-check-label" htmlFor={`radio-${index}`}>
                                {
                                    index == question.answers[0] ?
                                    <p className="text-success">Correct Answer </p>
                                    :
                                    <p>Possible Answer </p>
                                }
                                    <input
                                    type="text"
                                    className="form-control d-inline w-auto ms-2"
                                    value={choice}
                                    onChange={(e) => editQuestion({
                                        ...question,
                                        choices: question.choices.map((_choice: any, _index: number) => _index === index? e.target.value : _choice)
                                    })}
                                    />
                                </label>
                            </div>
                        )
                    }
                )
            }
            <div className="d-flex justify-content-end">
                <button id="wd-add-assignment-btn" className="btn btn-lg me-1 float-end" onClick={addNewChoice}>
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Add Question</button>
            </div>

        </div>
    )
}