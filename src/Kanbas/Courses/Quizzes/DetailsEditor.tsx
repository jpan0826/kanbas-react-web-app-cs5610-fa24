import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import * as coursesClient from '../client';
import * as quizzesClient from "./client";
import { addQuiz, editQuiz } from "./reducer";
import Editor from 'react-simple-wysiwyg';


export default function DetailsEditor({ quiz, setQuiz, saveQuiz }:
    {
        quiz: any,
        setQuiz: (quiz: any) => void,
        saveQuiz: (quiz: any, publish:boolean) => void
    }) {
    const { cid, qid } = useParams();


    return (
        <div>

            <div className="container mt-5">

                <div id="wd-quiz-details-editor">
                    {/* <p className="row">Current State Value: {JSON.stringify(quiz)}</p> */}

                    {/* title */}
                    <div id="wd-quiz-title" className="mb-3">
                        <label htmlFor="quiz-title" className="form-label">Title</label>
                        <div className="col-md-3">
                            <input type="text" className="form-control" id="quiz-title"
                                defaultValue={quiz.title} onChange={(e) => setQuiz({ ...quiz, title: e.target.value })} />
                        </div>
                    </div>

                    {/* desciption */}
                    <div id="wd-quiz-description" className="mb-3">
                        <label htmlFor="quiz-description" className="form-label">Description</label>
                        <div className="form-group">
                            <Editor value={quiz.description} onChange={(e) => setQuiz({ ...quiz, description: e.target.value })} />
                        </div>

                    </div>

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
                        <input type="checkbox" name="check-option" id="wd-quiz-shuffle" checked={quiz.shuffle} onChange={() => setQuiz({ ...quiz, shuffle: !quiz.shuffle })} />
                        <label htmlFor="wd-quiz-shuffle">Shuffle Answers</label><br />

                        {/* allow multiple attempts */}
                        <input type="number" name="check-option" id="wd-quiz-multiple-attempts" value={quiz.multiple_attempts} onChange={(e) => setQuiz({ ...quiz, multiple_attempts: e.target.value })} />
                        <label htmlFor="wd-quiz-multiple-attempts">Allow Multiple Attempts</label><br />

                        {/* TODO: time limit  */}
                        <input type="checkbox" name="check-option" id="wd-quiz-time-limit-boolean" checked={quiz.time_limit_boolean} onChange={() => setQuiz({ ...quiz, time_limit_boolean: !quiz.time_limit_boolean })} />
                        <label htmlFor="wd-quiz-time-limit-boolean">Time Limit</label>
                        <div className="d-flex align-items-center">
                            <input type="text" className="form-control w-25" id="time-limit" defaultValue={quiz.time_limit} onChange={(e) => setQuiz({ ...quiz, time_limit: e.target.value })} />
                            <label htmlFor="time-limit" className="form-label me-2">Minitues</label>
                        </div>
                        <br />
                    </div>

                    {/* assign  */}
                    <div id="wd-quiz-assign" className="row float-start">
                        <label htmlFor="assign" className="form-label col text-end">
                            Assign
                        </label><br />

                        <div className="col">
                            <div className="card border border-light rounded ">
                                {/* assign to */}
                                <label htmlFor="assign-to" className="form-label">
                                    <strong>Assign to</strong>
                                </label>
                                <div className="col">
                                    <input type="text" className="form-control" id="assign-to" defaultValue={quiz.assignee} onChange={(e) => setQuiz({ ...quiz, assignee: e.target.value })} />
                                </div><br />

                                {/* due  */}
                                <label htmlFor="due" className="form-label">
                                    <strong>Due</strong>
                                </label>

                                <input type="datetime-local" defaultValue={quiz.due_date} className="form-control" id="due"
                                    onChange={(e) => setQuiz({ ...quiz, due_date: e.target.value })} />
                                <br />

                                {/* available */}
                                <label htmlFor="available-from" className="form-label">
                                    <strong>Available from</strong>
                                </label>
                                <input type="datetime-local" defaultValue={quiz.available_date} className="form-control" id="available"
                                    onChange={(e) => setQuiz({ ...quiz, available_date: e.target.value })} />
                                <br />

                                {/* until  */}
                                <label htmlFor="available-until" className="form-label">
                                    <strong>Until</strong>
                                </label>
                                <input type="datetime-local" defaultValue={quiz.until_date} className="form-control" id="due"
                                    onChange={(e) => setQuiz({ ...quiz, until_date: e.target.value })} />
                                <br />


                            </div>
                        </div>
                    </div>

                </div>

            </div><br /><br /><br /><br />

            <div className="container float-start">
                <div className="d-flex justify-content-center">
                    {/* save to Quiz Detail screen  */}
                    <button type="submit" className="btn btn-primary" onClick={() => saveQuiz(quiz, false)}>Save</button>
                    {/* save and publish  */}
                    <button type="submit" className="btn btn-danger" onClick={() => saveQuiz(quiz, true) }>Save and Publish</button>

                    {/* cancel to Quiz list */}
                    <Link to={`/Kanbas/Courses/${cid}/Quizzes`}><button type="button" className="btn btn-secondary" >Cancel</button></Link>

                </div>
            </div>


        </div>
    );
}