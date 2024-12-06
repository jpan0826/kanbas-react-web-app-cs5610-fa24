import { Navigate, Route, Routes } from "react-router";
import EditorNavigation from "./EditorNavigation";
import DetailsEditor from "./DetailsEditor";
import QuestionsEditor from "./QuestionsEditor";
import { BsGripVertical } from "react-icons/bs";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import Editor from 'react-simple-wysiwyg';

export default function TrueFalseEditor({ question, editQuestion }: { question: any, editQuestion: (q: any) => void; }) {
    return (
        <div>
            <p className="mb-3">Enter your question and select True or False for correct answers</p>
            <h4 className="mb-3">Question:</h4>
            <div className="form-group">
            <Editor value={question.question} onChange={(e) => editQuestion({ ...question, question: e.target.value })} />
            </div>
            <h4 className="mb-3">Answers</h4>
            <div className="form-check">
                <input
                    type="radio"
                    className="form-check-input"
                    id="trueOption"
                    name="trueFalse"
                    value="True"
                    checked={question.answers[0] === "True"}
                    onChange={(e) => editQuestion({
                        ...question,
                        answers: [e.target.value]
                    })}
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
                    checked={question.answers[0] === "False"}
                    onChange={(e) => editQuestion({
                        ...question,
                        answers: [e.target.value]
                    })} />
                <label className="form-check-label" htmlFor="falseOption">
                    False
                </label>
            </div>
        </div>
    )
}