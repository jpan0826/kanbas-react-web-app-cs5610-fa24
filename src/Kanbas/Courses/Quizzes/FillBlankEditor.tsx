import { Navigate, Route, Routes } from "react-router";
import EditorNavigation from "./EditorNavigation";
import DetailsEditor from "./DetailsEditor";
import QuestionsEditor from "./QuestionsEditor";
import { BsGripVertical } from "react-icons/bs";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import Editor from 'react-simple-wysiwyg';

export default function FillBlankEditor({ question, editQuestion }: { question: any, editQuestion: (q: any) => void; }) {
    const addNewAnswer = () => {
        editQuestion({
            ...question,
            answers: [...question.answers, ""]
        })
    }
    return (
        <div>
            <p className="mb-3">Enter your question text, then define all possible correct answers for the blank. Students will see the question followed by a small text box to type their answer</p>
            <h4 className="mb-3">Question:</h4>
            <div className="form-group">
                <Editor value={question.question} onChange={(e) => editQuestion({ ...question, question: e.target.value })} />
            </div>
            <h4 className="mb-3">Answers</h4>
            {
                question.answers.map(
                    (answer: any, index: number) => {
                        return (
                            <div key={index} className="form-check mb-3">
                                <label className="form-check-label" htmlFor={`radio-${index}`}>
                                    <p>Possible Answer </p>
                                    <input
                                        type="text"
                                        className="form-control d-inline w-auto ms-2"
                                        value={answer}
                                        onChange={(e) => editQuestion({
                                            ...question,
                                            answers: question.answers.map((_anwser: any, _index: number) => _index === index ? e.target.value : _anwser)
                                        })}
                                    />
                                </label>
                            </div>
                        )
                    }
                )
            }
            <div className="d-flex justify-content-end">
                <button id="wd-add-assignment-btn" className="btn btn-lg me-1 float-end" onClick={addNewAnswer}>
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Add Answer</button>
            </div>
        </div>
    )
}