import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import * as client from "./client";

export default function QuizDetails() {
    const { cid, qid } = useParams();
    // const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    // const quiz = quizzes.find((quiz:any) => quiz._id === qid);

    const [quiz, setQuiz] = useState<any>({});

    const fetchQuiz = async () => {
        if (qid) {
            const fetchedQuiz = await client.findQuiz(qid)
            setQuiz(fetchedQuiz);
            //create a user answer array of the size of the questions
            
        }
    }

    useEffect(() => {
        // const fetchedQuiz = quizzes.find((quiz: any) => (quiz._id === qid));
        fetchQuiz()
    }, [qid, cid]);

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-center mb-3">
                <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}`}><button type="button" className="btn btn-outline-secondary me-2">Preview</button></Link>
                <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/Edit/Details`}><button type="button" className="btn btn-outline-secondary">Edit</button></Link>
            </div>

            <h3>{quiz.title}</h3>
            <dl className="row quiz-details ">
                <dt className="col-sm-3 align-items-center">Quiz Type</dt>
                <dd className="col-sm-9 align-items-center">{quiz.type}</dd>

                <dt className="col-sm-3 align-items-center">Points</dt>
                <dd className="col-sm-9 align-items-center">{quiz.points}</dd>

                <dt className="col-sm-3">Assignment Group</dt>
                <dd className="col-sm-9">{quiz.group}</dd>

                <dt className="col-sm-3">Shuffle Answers</dt>
                <dd className="col-sm-9">{quiz.shuffle ? "Yes" : "No"}</dd>

                <dt className="col-sm-3">Time Limit</dt>
                <dd className="col-sm-9">{quiz.time_limit ? "Yes" : "No"}</dd>

                <dt className="col-sm-3">Multiple Attempts</dt>
                <dd className="col-sm-9">{quiz.multiple_attempts ? "Yes" : "No"}</dd>

                <dt className="col-sm-3">View Responses</dt>
                <dd className="col-sm-9">{}</dd>

                <dt className="col-sm-3">Show Correct Answers</dt>
                <dd className="col-sm-9">{quiz.show_correct_answers ? "Yes" : "No"}</dd>

                <dt className="col-sm-3">One Question at a Time</dt>
                <dd className="col-sm-9">{quiz.one_question ? "Yes" : "No"}</dd>

                <dt className="col-sm-3">Require Respondus LockDown Browser</dt>
                <dd className="col-sm-9"></dd>

                <dt className="col-sm-3">Required to View Quiz Results</dt>
                <dd className="col-sm-9"></dd>

                <dt className="col-sm-3">Webcam Required</dt>
                <dd className="col-sm-9">{quiz.webcam ? "Yes" : "No"}</dd>

                <dt className="col-sm-3">Lock Questions After Answering</dt>
                <dd className="col-sm-9">{quiz.lock ? "Yes" : "No"}</dd>
            </dl>

            <table className="table">
                <thead>
                    <tr>
                        <th>Due</th>
                        <th>For</th>
                        <th>Available from</th>
                        <th>Until</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{quiz.due_date}</td>
                        <td>{quiz.assignee}</td>
                        <td>{quiz.available_date}</td>
                        <td>{quiz.until_date}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}