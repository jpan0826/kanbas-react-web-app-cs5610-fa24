import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function QuizDetails() {
    const { cid, qid } = useParams();

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-center mb-3">
                <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}`}><button type="button" className="btn btn-outline-secondary me-2">Preview</button></Link>
                <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/Edit/Details`}><button type="button" className="btn btn-outline-secondary">Edit</button></Link>
            </div>

            <h3>Q1 - HTML</h3>
            <dl className="row quiz-details ">
                <dt className="col-sm-3 align-items-center">Quiz Type</dt>
                <dd className="col-sm-9 align-items-center">Graded Quiz</dd>

                <dt className="col-sm-3 align-items-center">Points</dt>
                <dd className="col-sm-9 align-items-center">29</dd>

                <dt className="col-sm-3">Assignment Group</dt>
                <dd className="col-sm-9">QUIZZES</dd>

                <dt className="col-sm-3">Shuffle Answers</dt>
                <dd className="col-sm-9">No</dd>

                <dt className="col-sm-3">Time Limit</dt>
                <dd className="col-sm-9">30 Minutes</dd>

                <dt className="col-sm-3">Multiple Attempts</dt>
                <dd className="col-sm-9">No</dd>

                <dt className="col-sm-3">View Responses</dt>
                <dd className="col-sm-9">Always</dd>

                <dt className="col-sm-3">Show Correct Answers</dt>
                <dd className="col-sm-9">Immediately</dd>

                <dt className="col-sm-3">One Question at a Time</dt>
                <dd className="col-sm-9">Yes</dd>

                <dt className="col-sm-3">Require Respondus LockDown Browser</dt>
                <dd className="col-sm-9">No</dd>

                <dt className="col-sm-3">Required to View Quiz Results</dt>
                <dd className="col-sm-9">No</dd>

                <dt className="col-sm-3">Webcam Required</dt>
                <dd className="col-sm-9">No</dd>

                <dt className="col-sm-3">Lock Questions After Answering</dt>
                <dd className="col-sm-9">No</dd>
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
                        <td>Sep 21 at 1pm</td>
                        <td>Everyone</td>
                        <td>Sep 21 at 11:40am</td>
                        <td>Sep 21 at 1pm</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}